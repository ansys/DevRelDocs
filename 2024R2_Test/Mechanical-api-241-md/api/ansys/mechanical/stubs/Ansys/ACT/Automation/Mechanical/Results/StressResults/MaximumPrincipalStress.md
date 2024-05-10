<a id="maximumprincipalstress"></a>

# MaximumPrincipalStress

<a id="MaximumPrincipalStress"></a>

### *class* MaximumPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumPrincipalStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import MaximumPrincipalStress
```

<a id="property-detail"></a>

## Property detail

<a id="MaximumPrincipalStress.InternalObject"></a>

### *property* MaximumPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.DataModelObjectCategory"></a>

### *property* MaximumPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Mode"></a>

### *property* MaximumPrincipalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Ply"></a>

### *property* MaximumPrincipalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Plies"></a>

### *property* MaximumPrincipalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.EnvironmentSelection"></a>

### *property* MaximumPrincipalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.HarmonicIndex"></a>

### *property* MaximumPrincipalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CyclicMode"></a>

### *property* MaximumPrincipalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.IterationStep"></a>

### *property* MaximumPrincipalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Layer"></a>

### *property* MaximumPrincipalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadMultiplier"></a>

### *property* MaximumPrincipalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Probability"></a>

### *property* MaximumPrincipalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ReportedFrequency"></a>

### *property* MaximumPrincipalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AverageRadiusOfCurvature"></a>

### *property* MaximumPrincipalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.BendingInside"></a>

### *property* MaximumPrincipalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.BendingOutside"></a>

### *property* MaximumPrincipalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MembraneBendingCenter"></a>

### *property* MaximumPrincipalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MembraneBendingInside"></a>

### *property* MaximumPrincipalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MembraneBendingOutside"></a>

### *property* MaximumPrincipalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Membrane"></a>

### *property* MaximumPrincipalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PeakCenter"></a>

### *property* MaximumPrincipalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PeakInside"></a>

### *property* MaximumPrincipalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PeakOutside"></a>

### *property* MaximumPrincipalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.SweepingPhase"></a>

### *property* MaximumPrincipalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PhaseIncrement"></a>

### *property* MaximumPrincipalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Frequency"></a>

### *property* MaximumPrincipalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TotalCenter"></a>

### *property* MaximumPrincipalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TotalInside"></a>

### *property* MaximumPrincipalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TotalOutside"></a>

### *property* MaximumPrincipalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Linearized2DBehavior"></a>

### *property* MaximumPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Subtype"></a>

### *property* MaximumPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.NormalOrientation"></a>

### *property* MaximumPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ScaleFactor"></a>

### *property* MaximumPrincipalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Position"></a>

### *property* MaximumPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.StressStrainType"></a>

### *property* MaximumPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.SubScopeBy"></a>

### *property* MaximumPrincipalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ThroughThicknessBendingStress"></a>

### *property* MaximumPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Amplitude"></a>

### *property* MaximumPrincipalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AverageAcrossBodies"></a>

### *property* MaximumPrincipalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PlotData"></a>

### *property* MaximumPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Location"></a>

### *property* MaximumPrincipalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* MaximumPrincipalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* MaximumPrincipalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MaximumPrincipalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MaximumPrincipalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* MaximumPrincipalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* MaximumPrincipalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MaximumPrincipalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MaximumPrincipalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.IsSolved"></a>

### *property* MaximumPrincipalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CoordinateSystem"></a>

### *property* MaximumPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ScopingMethod"></a>

### *property* MaximumPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.SetNumber"></a>

### *property* MaximumPrincipalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CombinationNumber"></a>

### *property* MaximumPrincipalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.SolutionCombinationDriver"></a>

### *property* MaximumPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Path"></a>

### *property* MaximumPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Surface"></a>

### *property* MaximumPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.NamedSelections"></a>

### *property* MaximumPrincipalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* MaximumPrincipalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CrackFrontNumber"></a>

### *property* MaximumPrincipalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.GlobalIDs"></a>

### *property* MaximumPrincipalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Identifier"></a>

### *property* MaximumPrincipalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.IterationNumber"></a>

### *property* MaximumPrincipalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadStep"></a>

### *property* MaximumPrincipalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MaximumOccursOn"></a>

### *property* MaximumPrincipalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MinimumOccursOn"></a>

### *property* MaximumPrincipalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.LoadStepNumber"></a>

### *property* MaximumPrincipalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.SolverComponentIDs"></a>

### *property* MaximumPrincipalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Substep"></a>

### *property* MaximumPrincipalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Average"></a>

### *property* MaximumPrincipalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Maximum"></a>

### *property* MaximumPrincipalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* MaximumPrincipalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* MaximumPrincipalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Minimum"></a>

### *property* MaximumPrincipalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* MaximumPrincipalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* MaximumPrincipalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Time"></a>

### *property* MaximumPrincipalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.DisplayTime"></a>

### *property* MaximumPrincipalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.GraphControlsXAxis"></a>

### *property* MaximumPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.DisplayOption"></a>

### *property* MaximumPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.DpfEvaluation"></a>

### *property* MaximumPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.By"></a>

### *property* MaximumPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ItemType"></a>

### *property* MaximumPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CalculateTimeHistory"></a>

### *property* MaximumPrincipalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Suppressed"></a>

### *property* MaximumPrincipalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Children"></a>

### *property* MaximumPrincipalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Comments"></a>

### *property* MaximumPrincipalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Figures"></a>

### *property* MaximumPrincipalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Images"></a>

### *property* MaximumPrincipalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MaximumPrincipalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Properties"></a>

### *property* MaximumPrincipalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.VisibleProperties"></a>

### *property* MaximumPrincipalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumPrincipalStress.ClearGeneratedData"></a>

### MaximumPrincipalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.EvaluateAllResults"></a>

### MaximumPrincipalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.FetchRemoteResults"></a>

### MaximumPrincipalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ExportToTextFile"></a>

### MaximumPrincipalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.ExportAnimation"></a>

### MaximumPrincipalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.DuplicateWithoutResults"></a>

### MaximumPrincipalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CreateResultsAtAllSets"></a>

### MaximumPrincipalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PromoteToNamedSelection"></a>

### MaximumPrincipalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CreateParameter"></a>

### MaximumPrincipalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AddAlert"></a>

### MaximumPrincipalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AddConvergence"></a>

### MaximumPrincipalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.RenameBasedOnDefinition"></a>

### MaximumPrincipalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Delete"></a>

### MaximumPrincipalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.GetChildren"></a>

### MaximumPrincipalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MaximumPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AddComment"></a>

### MaximumPrincipalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AddFigure"></a>

### MaximumPrincipalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.AddImage"></a>

### MaximumPrincipalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Activate"></a>

### MaximumPrincipalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.CopyTo"></a>

### MaximumPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.Duplicate"></a>

### MaximumPrincipalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.GroupAllSimilarChildren"></a>

### MaximumPrincipalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.GroupSimilarObjects"></a>

### MaximumPrincipalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PropertyByName"></a>

### MaximumPrincipalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.PropertyByAPIName"></a>

### MaximumPrincipalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.GetParameter"></a>

### MaximumPrincipalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalStress.RemoveParameter"></a>

### MaximumPrincipalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
