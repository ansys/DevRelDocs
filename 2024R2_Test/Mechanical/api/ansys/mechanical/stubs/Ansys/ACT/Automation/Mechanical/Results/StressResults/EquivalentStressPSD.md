<a id="equivalentstresspsd"></a>

# EquivalentStressPSD

<a id="EquivalentStressPSD"></a>

### *class* EquivalentStressPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EquivalentStressPSD.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#EquivalentStressPSD.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
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

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import EquivalentStressPSD
```

<a id="property-detail"></a>

## Property detail

<a id="EquivalentStressPSD.InternalObject"></a>

### *property* EquivalentStressPSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ScaleFactorValue"></a>

### *property* EquivalentStressPSD.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.DataModelObjectCategory"></a>

### *property* EquivalentStressPSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Mode"></a>

### *property* EquivalentStressPSD.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Ply"></a>

### *property* EquivalentStressPSD.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Plies"></a>

### *property* EquivalentStressPSD.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.EnvironmentSelection"></a>

### *property* EquivalentStressPSD.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.HarmonicIndex"></a>

### *property* EquivalentStressPSD.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CyclicMode"></a>

### *property* EquivalentStressPSD.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.IterationStep"></a>

### *property* EquivalentStressPSD.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Layer"></a>

### *property* EquivalentStressPSD.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadMultiplier"></a>

### *property* EquivalentStressPSD.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Probability"></a>

### *property* EquivalentStressPSD.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ReportedFrequency"></a>

### *property* EquivalentStressPSD.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AverageRadiusOfCurvature"></a>

### *property* EquivalentStressPSD.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.BendingInside"></a>

### *property* EquivalentStressPSD.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.BendingOutside"></a>

### *property* EquivalentStressPSD.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MembraneBendingCenter"></a>

### *property* EquivalentStressPSD.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MembraneBendingInside"></a>

### *property* EquivalentStressPSD.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MembraneBendingOutside"></a>

### *property* EquivalentStressPSD.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Membrane"></a>

### *property* EquivalentStressPSD.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PeakCenter"></a>

### *property* EquivalentStressPSD.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PeakInside"></a>

### *property* EquivalentStressPSD.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PeakOutside"></a>

### *property* EquivalentStressPSD.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.SweepingPhase"></a>

### *property* EquivalentStressPSD.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PhaseIncrement"></a>

### *property* EquivalentStressPSD.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Frequency"></a>

### *property* EquivalentStressPSD.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TotalCenter"></a>

### *property* EquivalentStressPSD.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TotalInside"></a>

### *property* EquivalentStressPSD.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TotalOutside"></a>

### *property* EquivalentStressPSD.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Linearized2DBehavior"></a>

### *property* EquivalentStressPSD.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Subtype"></a>

### *property* EquivalentStressPSD.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.NormalOrientation"></a>

### *property* EquivalentStressPSD.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ScaleFactor"></a>

### *property* EquivalentStressPSD.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Position"></a>

### *property* EquivalentStressPSD.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.StressStrainType"></a>

### *property* EquivalentStressPSD.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.SubScopeBy"></a>

### *property* EquivalentStressPSD.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ThroughThicknessBendingStress"></a>

### *property* EquivalentStressPSD.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Amplitude"></a>

### *property* EquivalentStressPSD.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AverageAcrossBodies"></a>

### *property* EquivalentStressPSD.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PlotData"></a>

### *property* EquivalentStressPSD.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Location"></a>

### *property* EquivalentStressPSD.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentStressPSD.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentStressPSD.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentStressPSD.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentStressPSD.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentStressPSD.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentStressPSD.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentStressPSD.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentStressPSD.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.IsSolved"></a>

### *property* EquivalentStressPSD.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CoordinateSystem"></a>

### *property* EquivalentStressPSD.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ScopingMethod"></a>

### *property* EquivalentStressPSD.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.SetNumber"></a>

### *property* EquivalentStressPSD.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CombinationNumber"></a>

### *property* EquivalentStressPSD.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.SolutionCombinationDriver"></a>

### *property* EquivalentStressPSD.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Path"></a>

### *property* EquivalentStressPSD.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Surface"></a>

### *property* EquivalentStressPSD.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.NamedSelections"></a>

### *property* EquivalentStressPSD.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentStressPSD.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CrackFrontNumber"></a>

### *property* EquivalentStressPSD.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.GlobalIDs"></a>

### *property* EquivalentStressPSD.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Identifier"></a>

### *property* EquivalentStressPSD.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.IterationNumber"></a>

### *property* EquivalentStressPSD.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadStep"></a>

### *property* EquivalentStressPSD.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MaximumOccursOn"></a>

### *property* EquivalentStressPSD.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MinimumOccursOn"></a>

### *property* EquivalentStressPSD.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.LoadStepNumber"></a>

### *property* EquivalentStressPSD.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.SolverComponentIDs"></a>

### *property* EquivalentStressPSD.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Substep"></a>

### *property* EquivalentStressPSD.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Average"></a>

### *property* EquivalentStressPSD.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Maximum"></a>

### *property* EquivalentStressPSD.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MaximumOfMaximumOverTime"></a>

### *property* EquivalentStressPSD.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MaximumOfMinimumOverTime"></a>

### *property* EquivalentStressPSD.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Minimum"></a>

### *property* EquivalentStressPSD.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MinimumOfMaximumOverTime"></a>

### *property* EquivalentStressPSD.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.MinimumOfMinimumOverTime"></a>

### *property* EquivalentStressPSD.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Time"></a>

### *property* EquivalentStressPSD.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.DisplayTime"></a>

### *property* EquivalentStressPSD.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.GraphControlsXAxis"></a>

### *property* EquivalentStressPSD.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.DisplayOption"></a>

### *property* EquivalentStressPSD.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.DpfEvaluation"></a>

### *property* EquivalentStressPSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.By"></a>

### *property* EquivalentStressPSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ItemType"></a>

### *property* EquivalentStressPSD.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CalculateTimeHistory"></a>

### *property* EquivalentStressPSD.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Suppressed"></a>

### *property* EquivalentStressPSD.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Children"></a>

### *property* EquivalentStressPSD.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Comments"></a>

### *property* EquivalentStressPSD.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Figures"></a>

### *property* EquivalentStressPSD.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Images"></a>

### *property* EquivalentStressPSD.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EquivalentStressPSD.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Properties"></a>

### *property* EquivalentStressPSD.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.VisibleProperties"></a>

### *property* EquivalentStressPSD.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentStressPSD.ClearGeneratedData"></a>

### EquivalentStressPSD.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.EvaluateAllResults"></a>

### EquivalentStressPSD.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.FetchRemoteResults"></a>

### EquivalentStressPSD.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ExportToTextFile"></a>

### EquivalentStressPSD.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.ExportAnimation"></a>

### EquivalentStressPSD.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.DuplicateWithoutResults"></a>

### EquivalentStressPSD.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CreateResultsAtAllSets"></a>

### EquivalentStressPSD.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PromoteToNamedSelection"></a>

### EquivalentStressPSD.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CreateParameter"></a>

### EquivalentStressPSD.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AddAlert"></a>

### EquivalentStressPSD.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AddConvergence"></a>

### EquivalentStressPSD.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.RenameBasedOnDefinition"></a>

### EquivalentStressPSD.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Delete"></a>

### EquivalentStressPSD.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.GetChildren"></a>

### EquivalentStressPSD.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EquivalentStressPSD.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AddComment"></a>

### EquivalentStressPSD.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AddFigure"></a>

### EquivalentStressPSD.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.AddImage"></a>

### EquivalentStressPSD.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Activate"></a>

### EquivalentStressPSD.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.CopyTo"></a>

### EquivalentStressPSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.Duplicate"></a>

### EquivalentStressPSD.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.GroupAllSimilarChildren"></a>

### EquivalentStressPSD.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.GroupSimilarObjects"></a>

### EquivalentStressPSD.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PropertyByName"></a>

### EquivalentStressPSD.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.PropertyByAPIName"></a>

### EquivalentStressPSD.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.GetParameter"></a>

### EquivalentStressPSD.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentStressPSD.RemoveParameter"></a>

### EquivalentStressPSD.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
