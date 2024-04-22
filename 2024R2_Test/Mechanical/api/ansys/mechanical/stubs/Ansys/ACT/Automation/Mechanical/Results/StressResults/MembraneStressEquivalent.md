<a id="membranestressequivalent"></a>

# MembraneStressEquivalent

<a id="MembraneStressEquivalent"></a>

### *class* MembraneStressEquivalent

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MembraneStressEquivalent.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MembraneStressEquivalent.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MembraneStressEquivalent.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MembraneStressEquivalent.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MembraneStressEquivalent.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MembraneStressEquivalent.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MembraneStressEquivalent.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MembraneStressEquivalent.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MembraneStressEquivalent.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MembraneStressEquivalent.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MembraneStressEquivalent.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MembraneStressEquivalent.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MembraneStressEquivalent.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MembraneStressEquivalent.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MembraneStressEquivalent.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MembraneStressEquivalent.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MembraneStressEquivalent.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MembraneStressEquivalent.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MembraneStressEquivalent.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MembraneStressEquivalent.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MembraneStressEquivalent.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MembraneStressEquivalent.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MembraneStressEquivalent.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MembraneStressEquivalent.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MembraneStressEquivalent.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MembraneStressEquivalent.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MembraneStressEquivalent.Mode)                                                                                                    | Gets or sets the Mode.                                                 |
| [`Ply`](#MembraneStressEquivalent.Ply)                                                                                                      | Gets or sets the Ply selection.                                        |
| [`Plies`](#MembraneStressEquivalent.Plies)                                                                                                  | Plies property.                                                        |
| [`EnvironmentSelection`](#MembraneStressEquivalent.EnvironmentSelection)                                                                    | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#MembraneStressEquivalent.HarmonicIndex)                                                                                  | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#MembraneStressEquivalent.CyclicMode)                                                                                        | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#MembraneStressEquivalent.IterationStep)                                                                                  | Gets or sets the IterationStep.                                        |
| [`Layer`](#MembraneStressEquivalent.Layer)                                                                                                  | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#MembraneStressEquivalent.LoadMultiplier)                                                                                | Gets the LoadMultiplier.                                               |
| [`Probability`](#MembraneStressEquivalent.Probability)                                                                                      | Gets the Probability.                                                  |
| [`ReportedFrequency`](#MembraneStressEquivalent.ReportedFrequency)                                                                          | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#MembraneStressEquivalent.AverageRadiusOfCurvature)                                                            | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#MembraneStressEquivalent.BendingInside)                                                                                  | Gets the BendingInside.                                                |
| [`BendingOutside`](#MembraneStressEquivalent.BendingOutside)                                                                                | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#MembraneStressEquivalent.MembraneBendingCenter)                                                                  | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#MembraneStressEquivalent.MembraneBendingInside)                                                                  | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#MembraneStressEquivalent.MembraneBendingOutside)                                                                | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#MembraneStressEquivalent.Membrane)                                                                                            | Gets the Membrane.                                                     |
| [`PeakCenter`](#MembraneStressEquivalent.PeakCenter)                                                                                        | Gets the PeakCenter.                                                   |
| [`PeakInside`](#MembraneStressEquivalent.PeakInside)                                                                                        | Gets the PeakInside.                                                   |
| [`PeakOutside`](#MembraneStressEquivalent.PeakOutside)                                                                                      | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#MembraneStressEquivalent.SweepingPhase)                                                                                  | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#MembraneStressEquivalent.PhaseIncrement)                                                                                | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#MembraneStressEquivalent.Frequency)                                                                                          | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#MembraneStressEquivalent.TotalCenter)                                                                                      | Gets the TotalCenter.                                                  |
| [`TotalInside`](#MembraneStressEquivalent.TotalInside)                                                                                      | Gets the TotalInside.                                                  |
| [`TotalOutside`](#MembraneStressEquivalent.TotalOutside)                                                                                    | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#MembraneStressEquivalent.Subtype)                                                                                              | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#MembraneStressEquivalent.NormalOrientation)                                                                          | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#MembraneStressEquivalent.ScaleFactor)                                                                                      | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MembraneStressEquivalent.SubScopeBy)                                                                                        | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#MembraneStressEquivalent.Amplitude)                                                                                          | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#MembraneStressEquivalent.AverageAcrossBodies)                                                                      | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MembraneStressEquivalent.PlotData)                                                                                            | Gets the result table.                                                 |
| [`Location`](#MembraneStressEquivalent.Location)                                                                                            | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MembraneStressEquivalent.TimeForMinimumOfMinimumValues)                                                  | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MembraneStressEquivalent.TimeForMinimumOfMaximumValues)                                                  | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MembraneStressEquivalent.LoadStepForMinimumOfMinimumValues)                                          | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MembraneStressEquivalent.LoadStepForMinimumOfMaximumValues)                                          | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MembraneStressEquivalent.TimeForMaximumOfMinimumValues)                                                  | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MembraneStressEquivalent.TimeForMaximumOfMaximumValues)                                                  | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MembraneStressEquivalent.LoadStepForMaximumOfMinimumValues)                                          | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MembraneStressEquivalent.LoadStepForMaximumOfMaximumValues)                                          | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MembraneStressEquivalent.IsSolved)                                                                                            | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MembraneStressEquivalent.ScopingMethod)                                                                                  | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MembraneStressEquivalent.SetNumber)                                                                                          | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MembraneStressEquivalent.CombinationNumber)                                                                          | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MembraneStressEquivalent.SolutionCombinationDriver)                                                          | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MembraneStressEquivalent.WaterfallPanelShowTextOnMosaic)                                                | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MembraneStressEquivalent.CrackFrontNumber)                                                                            | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MembraneStressEquivalent.GlobalIDs)                                                                                          | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MembraneStressEquivalent.Identifier)                                                                                        | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MembraneStressEquivalent.IterationNumber)                                                                              | Gets the IterationNumber.                                              |
| [`LoadStep`](#MembraneStressEquivalent.LoadStep)                                                                                            | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MembraneStressEquivalent.MaximumOccursOn)                                                                              | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MembraneStressEquivalent.MinimumOccursOn)                                                                              | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MembraneStressEquivalent.LoadStepNumber)                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MembraneStressEquivalent.SolverComponentIDs)                                                                        | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MembraneStressEquivalent.Substep)                                                                                              | Gets the Substep.                                                      |
| [`Average`](#MembraneStressEquivalent.Average)                                                                                              | Gets the Average.                                                      |
| [`Maximum`](#MembraneStressEquivalent.Maximum)                                                                                              | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MembraneStressEquivalent.MaximumOfMaximumOverTime)                                                            | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MembraneStressEquivalent.MaximumOfMinimumOverTime)                                                            | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MembraneStressEquivalent.Minimum)                                                                                              | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MembraneStressEquivalent.MinimumOfMaximumOverTime)                                                            | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MembraneStressEquivalent.MinimumOfMinimumOverTime)                                                            | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MembraneStressEquivalent.Time)                                                                                                    | Gets the Time.                                                         |
| [`DisplayTime`](#MembraneStressEquivalent.DisplayTime)                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MembraneStressEquivalent.DisplayOption)                                                                                  | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MembraneStressEquivalent.DpfEvaluation)                                                                                  | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MembraneStressEquivalent.By)                                                                                                        | Gets or sets the By.                                                   |
| [`ItemType`](#MembraneStressEquivalent.ItemType)                                                                                            | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MembraneStressEquivalent.CalculateTimeHistory)                                                                    | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MembraneStressEquivalent.Suppressed)                                                                                        | Gets or sets the Suppressed.                                           |
| [`Children`](#MembraneStressEquivalent.Children)                                                                                            | Gets the list of children.                                             |
| [`Comments`](#MembraneStressEquivalent.Comments)                                                                                            | Gets the list of associated comments.                                  |
| [`Figures`](#MembraneStressEquivalent.Figures)                                                                                              | Gets the list of associated figures.                                   |
| [`Images`](#MembraneStressEquivalent.Images)                                                                                                | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MembraneStressEquivalent.Properties)                                                                                        | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MembraneStressEquivalent.VisibleProperties)                                                                          | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import MembraneStressEquivalent
```

<a id="property-detail"></a>

## Property detail

<a id="MembraneStressEquivalent.InternalObject"></a>

### *property* MembraneStressEquivalent.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DataModelObjectCategory"></a>

### *property* MembraneStressEquivalent.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Mode"></a>

### *property* MembraneStressEquivalent.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Ply"></a>

### *property* MembraneStressEquivalent.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Plies"></a>

### *property* MembraneStressEquivalent.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.EnvironmentSelection"></a>

### *property* MembraneStressEquivalent.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.HarmonicIndex"></a>

### *property* MembraneStressEquivalent.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CyclicMode"></a>

### *property* MembraneStressEquivalent.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.IterationStep"></a>

### *property* MembraneStressEquivalent.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Layer"></a>

### *property* MembraneStressEquivalent.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadMultiplier"></a>

### *property* MembraneStressEquivalent.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Probability"></a>

### *property* MembraneStressEquivalent.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ReportedFrequency"></a>

### *property* MembraneStressEquivalent.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AverageRadiusOfCurvature"></a>

### *property* MembraneStressEquivalent.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.BendingInside"></a>

### *property* MembraneStressEquivalent.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.BendingOutside"></a>

### *property* MembraneStressEquivalent.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MembraneBendingCenter"></a>

### *property* MembraneStressEquivalent.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MembraneBendingInside"></a>

### *property* MembraneStressEquivalent.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MembraneBendingOutside"></a>

### *property* MembraneStressEquivalent.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Membrane"></a>

### *property* MembraneStressEquivalent.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PeakCenter"></a>

### *property* MembraneStressEquivalent.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PeakInside"></a>

### *property* MembraneStressEquivalent.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PeakOutside"></a>

### *property* MembraneStressEquivalent.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SweepingPhase"></a>

### *property* MembraneStressEquivalent.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PhaseIncrement"></a>

### *property* MembraneStressEquivalent.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Frequency"></a>

### *property* MembraneStressEquivalent.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TotalCenter"></a>

### *property* MembraneStressEquivalent.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TotalInside"></a>

### *property* MembraneStressEquivalent.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TotalOutside"></a>

### *property* MembraneStressEquivalent.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Linearized2DBehavior"></a>

### *property* MembraneStressEquivalent.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Subtype"></a>

### *property* MembraneStressEquivalent.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.NormalOrientation"></a>

### *property* MembraneStressEquivalent.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ScaleFactor"></a>

### *property* MembraneStressEquivalent.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Position"></a>

### *property* MembraneStressEquivalent.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.StressStrainType"></a>

### *property* MembraneStressEquivalent.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SubScopeBy"></a>

### *property* MembraneStressEquivalent.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ThroughThicknessBendingStress"></a>

### *property* MembraneStressEquivalent.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Amplitude"></a>

### *property* MembraneStressEquivalent.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AverageAcrossBodies"></a>

### *property* MembraneStressEquivalent.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PlotData"></a>

### *property* MembraneStressEquivalent.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Location"></a>

### *property* MembraneStressEquivalent.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMinimumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMinimumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMinimumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMinimumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMaximumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMaximumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMaximumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMaximumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.IsSolved"></a>

### *property* MembraneStressEquivalent.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CoordinateSystem"></a>

### *property* MembraneStressEquivalent.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ScopingMethod"></a>

### *property* MembraneStressEquivalent.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SetNumber"></a>

### *property* MembraneStressEquivalent.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CombinationNumber"></a>

### *property* MembraneStressEquivalent.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SolutionCombinationDriver"></a>

### *property* MembraneStressEquivalent.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Path"></a>

### *property* MembraneStressEquivalent.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Surface"></a>

### *property* MembraneStressEquivalent.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.NamedSelections"></a>

### *property* MembraneStressEquivalent.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.WaterfallPanelShowTextOnMosaic"></a>

### *property* MembraneStressEquivalent.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CrackFrontNumber"></a>

### *property* MembraneStressEquivalent.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GlobalIDs"></a>

### *property* MembraneStressEquivalent.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Identifier"></a>

### *property* MembraneStressEquivalent.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.IterationNumber"></a>

### *property* MembraneStressEquivalent.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStep"></a>

### *property* MembraneStressEquivalent.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MaximumOccursOn"></a>

### *property* MembraneStressEquivalent.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MinimumOccursOn"></a>

### *property* MembraneStressEquivalent.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepNumber"></a>

### *property* MembraneStressEquivalent.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SolverComponentIDs"></a>

### *property* MembraneStressEquivalent.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Substep"></a>

### *property* MembraneStressEquivalent.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Average"></a>

### *property* MembraneStressEquivalent.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Maximum"></a>

### *property* MembraneStressEquivalent.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MaximumOfMaximumOverTime"></a>

### *property* MembraneStressEquivalent.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MaximumOfMinimumOverTime"></a>

### *property* MembraneStressEquivalent.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Minimum"></a>

### *property* MembraneStressEquivalent.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MinimumOfMaximumOverTime"></a>

### *property* MembraneStressEquivalent.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MinimumOfMinimumOverTime"></a>

### *property* MembraneStressEquivalent.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Time"></a>

### *property* MembraneStressEquivalent.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DisplayTime"></a>

### *property* MembraneStressEquivalent.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GraphControlsXAxis"></a>

### *property* MembraneStressEquivalent.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DisplayOption"></a>

### *property* MembraneStressEquivalent.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DpfEvaluation"></a>

### *property* MembraneStressEquivalent.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.By"></a>

### *property* MembraneStressEquivalent.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ItemType"></a>

### *property* MembraneStressEquivalent.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CalculateTimeHistory"></a>

### *property* MembraneStressEquivalent.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Suppressed"></a>

### *property* MembraneStressEquivalent.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Children"></a>

### *property* MembraneStressEquivalent.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Comments"></a>

### *property* MembraneStressEquivalent.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Figures"></a>

### *property* MembraneStressEquivalent.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Images"></a>

### *property* MembraneStressEquivalent.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MembraneStressEquivalent.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Properties"></a>

### *property* MembraneStressEquivalent.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.VisibleProperties"></a>

### *property* MembraneStressEquivalent.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MembraneStressEquivalent.ClearGeneratedData"></a>

### MembraneStressEquivalent.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.EvaluateAllResults"></a>

### MembraneStressEquivalent.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.FetchRemoteResults"></a>

### MembraneStressEquivalent.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ExportToTextFile"></a>

### MembraneStressEquivalent.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ExportAnimation"></a>

### MembraneStressEquivalent.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DuplicateWithoutResults"></a>

### MembraneStressEquivalent.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CreateResultsAtAllSets"></a>

### MembraneStressEquivalent.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PromoteToNamedSelection"></a>

### MembraneStressEquivalent.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CreateParameter"></a>

### MembraneStressEquivalent.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddAlert"></a>

### MembraneStressEquivalent.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddConvergence"></a>

### MembraneStressEquivalent.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.RenameBasedOnDefinition"></a>

### MembraneStressEquivalent.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Delete"></a>

### MembraneStressEquivalent.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GetChildren"></a>

### MembraneStressEquivalent.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MembraneStressEquivalent.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddComment"></a>

### MembraneStressEquivalent.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddFigure"></a>

### MembraneStressEquivalent.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddImage"></a>

### MembraneStressEquivalent.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Activate"></a>

### MembraneStressEquivalent.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CopyTo"></a>

### MembraneStressEquivalent.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Duplicate"></a>

### MembraneStressEquivalent.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GroupAllSimilarChildren"></a>

### MembraneStressEquivalent.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GroupSimilarObjects"></a>

### MembraneStressEquivalent.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PropertyByName"></a>

### MembraneStressEquivalent.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PropertyByAPIName"></a>

### MembraneStressEquivalent.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GetParameter"></a>

### MembraneStressEquivalent.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.RemoveParameter"></a>

### MembraneStressEquivalent.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
