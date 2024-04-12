<a id="equivalentstress"></a>

# EquivalentStress

<a id="EquivalentStress"></a>

### *class* EquivalentStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#EquivalentStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#EquivalentStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#EquivalentStress.Mode)                                                                                                            | Gets or sets the Mode.                                                 |
| [`Ply`](#EquivalentStress.Ply)                                                                                                              | Gets or sets the Ply selection.                                        |
| [`Plies`](#EquivalentStress.Plies)                                                                                                          | Plies property.                                                        |
| [`EnvironmentSelection`](#EquivalentStress.EnvironmentSelection)                                                                            | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#EquivalentStress.HarmonicIndex)                                                                                          | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#EquivalentStress.CyclicMode)                                                                                                | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#EquivalentStress.IterationStep)                                                                                          | Gets or sets the IterationStep.                                        |
| [`Layer`](#EquivalentStress.Layer)                                                                                                          | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#EquivalentStress.LoadMultiplier)                                                                                        | Gets the LoadMultiplier.                                               |
| [`Probability`](#EquivalentStress.Probability)                                                                                              | Gets the Probability.                                                  |
| [`ReportedFrequency`](#EquivalentStress.ReportedFrequency)                                                                                  | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#EquivalentStress.AverageRadiusOfCurvature)                                                                    | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#EquivalentStress.BendingInside)                                                                                          | Gets the BendingInside.                                                |
| [`BendingOutside`](#EquivalentStress.BendingOutside)                                                                                        | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#EquivalentStress.MembraneBendingCenter)                                                                          | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#EquivalentStress.MembraneBendingInside)                                                                          | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#EquivalentStress.MembraneBendingOutside)                                                                        | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#EquivalentStress.Membrane)                                                                                                    | Gets the Membrane.                                                     |
| [`PeakCenter`](#EquivalentStress.PeakCenter)                                                                                                | Gets the PeakCenter.                                                   |
| [`PeakInside`](#EquivalentStress.PeakInside)                                                                                                | Gets the PeakInside.                                                   |
| [`PeakOutside`](#EquivalentStress.PeakOutside)                                                                                              | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#EquivalentStress.SweepingPhase)                                                                                          | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#EquivalentStress.PhaseIncrement)                                                                                        | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#EquivalentStress.Frequency)                                                                                                  | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#EquivalentStress.TotalCenter)                                                                                              | Gets the TotalCenter.                                                  |
| [`TotalInside`](#EquivalentStress.TotalInside)                                                                                              | Gets the TotalInside.                                                  |
| [`TotalOutside`](#EquivalentStress.TotalOutside)                                                                                            | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#EquivalentStress.Subtype)                                                                                                      | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#EquivalentStress.NormalOrientation)                                                                                  | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#EquivalentStress.ScaleFactor)                                                                                              | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#EquivalentStress.SubScopeBy)                                                                                                | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#EquivalentStress.Amplitude)                                                                                                  | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#EquivalentStress.AverageAcrossBodies)                                                                              | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#EquivalentStress.PlotData)                                                                                                    | Gets the result table.                                                 |
| [`Location`](#EquivalentStress.Location)                                                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentStress.TimeForMinimumOfMinimumValues)                                                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentStress.TimeForMinimumOfMaximumValues)                                                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentStress.LoadStepForMinimumOfMinimumValues)                                                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentStress.LoadStepForMinimumOfMaximumValues)                                                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentStress.TimeForMaximumOfMinimumValues)                                                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentStress.TimeForMaximumOfMaximumValues)                                                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentStress.LoadStepForMaximumOfMinimumValues)                                                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentStress.LoadStepForMaximumOfMaximumValues)                                                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentStress.IsSolved)                                                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentStress.ScopingMethod)                                                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentStress.SetNumber)                                                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentStress.CombinationNumber)                                                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentStress.SolutionCombinationDriver)                                                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentStress.WaterfallPanelShowTextOnMosaic)                                                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentStress.CrackFrontNumber)                                                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentStress.GlobalIDs)                                                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentStress.Identifier)                                                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentStress.IterationNumber)                                                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentStress.LoadStep)                                                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentStress.MaximumOccursOn)                                                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentStress.MinimumOccursOn)                                                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentStress.LoadStepNumber)                                                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentStress.SolverComponentIDs)                                                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentStress.Substep)                                                                                                      | Gets the Substep.                                                      |
| [`Average`](#EquivalentStress.Average)                                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#EquivalentStress.Maximum)                                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentStress.MaximumOfMaximumOverTime)                                                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentStress.MaximumOfMinimumOverTime)                                                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentStress.Minimum)                                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentStress.MinimumOfMaximumOverTime)                                                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentStress.MinimumOfMinimumOverTime)                                                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentStress.Time)                                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentStress.DisplayTime)                                                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentStress.DisplayOption)                                                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentStress.DpfEvaluation)                                                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentStress.By)                                                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentStress.ItemType)                                                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentStress.CalculateTimeHistory)                                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentStress.Suppressed)                                                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentStress.Children)                                                                                                    | Gets the list of children.                                             |
| [`Comments`](#EquivalentStress.Comments)                                                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentStress.Figures)                                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentStress.Images)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentStress.Properties)                                                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentStress.VisibleProperties)                                                                                  | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import EquivalentStress
```

<a id="property-detail"></a>

## Property detail

<a id="EquivalentStress.InternalObject"></a>

### *property* EquivalentStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.DataModelObjectCategory"></a>

### *property* EquivalentStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Mode"></a>

### *property* EquivalentStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Ply"></a>

### *property* EquivalentStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Plies"></a>

### *property* EquivalentStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.EnvironmentSelection"></a>

### *property* EquivalentStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.HarmonicIndex"></a>

### *property* EquivalentStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CyclicMode"></a>

### *property* EquivalentStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.IterationStep"></a>

### *property* EquivalentStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Layer"></a>

### *property* EquivalentStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadMultiplier"></a>

### *property* EquivalentStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Probability"></a>

### *property* EquivalentStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ReportedFrequency"></a>

### *property* EquivalentStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AverageRadiusOfCurvature"></a>

### *property* EquivalentStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.BendingInside"></a>

### *property* EquivalentStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.BendingOutside"></a>

### *property* EquivalentStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MembraneBendingCenter"></a>

### *property* EquivalentStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MembraneBendingInside"></a>

### *property* EquivalentStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MembraneBendingOutside"></a>

### *property* EquivalentStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Membrane"></a>

### *property* EquivalentStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PeakCenter"></a>

### *property* EquivalentStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PeakInside"></a>

### *property* EquivalentStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PeakOutside"></a>

### *property* EquivalentStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.SweepingPhase"></a>

### *property* EquivalentStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PhaseIncrement"></a>

### *property* EquivalentStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Frequency"></a>

### *property* EquivalentStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TotalCenter"></a>

### *property* EquivalentStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TotalInside"></a>

### *property* EquivalentStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TotalOutside"></a>

### *property* EquivalentStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Linearized2DBehavior"></a>

### *property* EquivalentStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Subtype"></a>

### *property* EquivalentStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.NormalOrientation"></a>

### *property* EquivalentStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ScaleFactor"></a>

### *property* EquivalentStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Position"></a>

### *property* EquivalentStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.StressStrainType"></a>

### *property* EquivalentStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.SubScopeBy"></a>

### *property* EquivalentStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ThroughThicknessBendingStress"></a>

### *property* EquivalentStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Amplitude"></a>

### *property* EquivalentStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AverageAcrossBodies"></a>

### *property* EquivalentStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PlotData"></a>

### *property* EquivalentStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Location"></a>

### *property* EquivalentStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.IsSolved"></a>

### *property* EquivalentStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CoordinateSystem"></a>

### *property* EquivalentStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ScopingMethod"></a>

### *property* EquivalentStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.SetNumber"></a>

### *property* EquivalentStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CombinationNumber"></a>

### *property* EquivalentStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.SolutionCombinationDriver"></a>

### *property* EquivalentStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Path"></a>

### *property* EquivalentStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Surface"></a>

### *property* EquivalentStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.NamedSelections"></a>

### *property* EquivalentStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CrackFrontNumber"></a>

### *property* EquivalentStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.GlobalIDs"></a>

### *property* EquivalentStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Identifier"></a>

### *property* EquivalentStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.IterationNumber"></a>

### *property* EquivalentStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadStep"></a>

### *property* EquivalentStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MaximumOccursOn"></a>

### *property* EquivalentStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MinimumOccursOn"></a>

### *property* EquivalentStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.LoadStepNumber"></a>

### *property* EquivalentStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.SolverComponentIDs"></a>

### *property* EquivalentStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Substep"></a>

### *property* EquivalentStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Average"></a>

### *property* EquivalentStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Maximum"></a>

### *property* EquivalentStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MaximumOfMaximumOverTime"></a>

### *property* EquivalentStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MaximumOfMinimumOverTime"></a>

### *property* EquivalentStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Minimum"></a>

### *property* EquivalentStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MinimumOfMaximumOverTime"></a>

### *property* EquivalentStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.MinimumOfMinimumOverTime"></a>

### *property* EquivalentStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Time"></a>

### *property* EquivalentStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.DisplayTime"></a>

### *property* EquivalentStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.GraphControlsXAxis"></a>

### *property* EquivalentStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.DisplayOption"></a>

### *property* EquivalentStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.DpfEvaluation"></a>

### *property* EquivalentStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.By"></a>

### *property* EquivalentStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ItemType"></a>

### *property* EquivalentStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CalculateTimeHistory"></a>

### *property* EquivalentStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Suppressed"></a>

### *property* EquivalentStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Children"></a>

### *property* EquivalentStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Comments"></a>

### *property* EquivalentStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Figures"></a>

### *property* EquivalentStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Images"></a>

### *property* EquivalentStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EquivalentStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Properties"></a>

### *property* EquivalentStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.VisibleProperties"></a>

### *property* EquivalentStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentStress.ClearGeneratedData"></a>

### EquivalentStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.EvaluateAllResults"></a>

### EquivalentStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.FetchRemoteResults"></a>

### EquivalentStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ExportToTextFile"></a>

### EquivalentStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.ExportAnimation"></a>

### EquivalentStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.DuplicateWithoutResults"></a>

### EquivalentStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CreateResultsAtAllSets"></a>

### EquivalentStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PromoteToNamedSelection"></a>

### EquivalentStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CreateParameter"></a>

### EquivalentStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AddAlert"></a>

### EquivalentStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AddConvergence"></a>

### EquivalentStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.RenameBasedOnDefinition"></a>

### EquivalentStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Delete"></a>

### EquivalentStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.GetChildren"></a>

### EquivalentStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EquivalentStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AddComment"></a>

### EquivalentStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AddFigure"></a>

### EquivalentStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.AddImage"></a>

### EquivalentStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Activate"></a>

### EquivalentStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.CopyTo"></a>

### EquivalentStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.Duplicate"></a>

### EquivalentStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.GroupAllSimilarChildren"></a>

### EquivalentStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.GroupSimilarObjects"></a>

### EquivalentStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PropertyByName"></a>

### EquivalentStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.PropertyByAPIName"></a>

### EquivalentStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.GetParameter"></a>

### EquivalentStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStress.RemoveParameter"></a>

### EquivalentStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
