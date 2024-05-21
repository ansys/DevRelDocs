# MiddlePrincipalStress

<a id="MiddlePrincipalStress"></a>

### *class* MiddlePrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MiddlePrincipalStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MiddlePrincipalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MiddlePrincipalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MiddlePrincipalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MiddlePrincipalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MiddlePrincipalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MiddlePrincipalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MiddlePrincipalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MiddlePrincipalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MiddlePrincipalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MiddlePrincipalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MiddlePrincipalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MiddlePrincipalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MiddlePrincipalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MiddlePrincipalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MiddlePrincipalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MiddlePrincipalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MiddlePrincipalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MiddlePrincipalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MiddlePrincipalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MiddlePrincipalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MiddlePrincipalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MiddlePrincipalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MiddlePrincipalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MiddlePrincipalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MiddlePrincipalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#MiddlePrincipalStress.Mode)                                                                                                       | Gets or sets the Mode.                                                 |
| [`Ply`](#MiddlePrincipalStress.Ply)                                                                                                         | Gets or sets the Ply selection.                                        |
| [`Plies`](#MiddlePrincipalStress.Plies)                                                                                                     | Plies property.                                                        |
| [`EnvironmentSelection`](#MiddlePrincipalStress.EnvironmentSelection)                                                                       | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#MiddlePrincipalStress.HarmonicIndex)                                                                                     | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#MiddlePrincipalStress.CyclicMode)                                                                                           | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#MiddlePrincipalStress.IterationStep)                                                                                     | Gets or sets the IterationStep.                                        |
| [`Layer`](#MiddlePrincipalStress.Layer)                                                                                                     | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#MiddlePrincipalStress.LoadMultiplier)                                                                                   | Gets the LoadMultiplier.                                               |
| [`Probability`](#MiddlePrincipalStress.Probability)                                                                                         | Gets the Probability.                                                  |
| [`ReportedFrequency`](#MiddlePrincipalStress.ReportedFrequency)                                                                             | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#MiddlePrincipalStress.AverageRadiusOfCurvature)                                                               | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#MiddlePrincipalStress.BendingInside)                                                                                     | Gets the BendingInside.                                                |
| [`BendingOutside`](#MiddlePrincipalStress.BendingOutside)                                                                                   | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#MiddlePrincipalStress.MembraneBendingCenter)                                                                     | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#MiddlePrincipalStress.MembraneBendingInside)                                                                     | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#MiddlePrincipalStress.MembraneBendingOutside)                                                                   | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#MiddlePrincipalStress.Membrane)                                                                                               | Gets the Membrane.                                                     |
| [`PeakCenter`](#MiddlePrincipalStress.PeakCenter)                                                                                           | Gets the PeakCenter.                                                   |
| [`PeakInside`](#MiddlePrincipalStress.PeakInside)                                                                                           | Gets the PeakInside.                                                   |
| [`PeakOutside`](#MiddlePrincipalStress.PeakOutside)                                                                                         | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#MiddlePrincipalStress.SweepingPhase)                                                                                     | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#MiddlePrincipalStress.PhaseIncrement)                                                                                   | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#MiddlePrincipalStress.Frequency)                                                                                             | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#MiddlePrincipalStress.TotalCenter)                                                                                         | Gets the TotalCenter.                                                  |
| [`TotalInside`](#MiddlePrincipalStress.TotalInside)                                                                                         | Gets the TotalInside.                                                  |
| [`TotalOutside`](#MiddlePrincipalStress.TotalOutside)                                                                                       | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#MiddlePrincipalStress.Subtype)                                                                                                 | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#MiddlePrincipalStress.NormalOrientation)                                                                             | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#MiddlePrincipalStress.ScaleFactor)                                                                                         | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MiddlePrincipalStress.SubScopeBy)                                                                                           | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#MiddlePrincipalStress.Amplitude)                                                                                             | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#MiddlePrincipalStress.AverageAcrossBodies)                                                                         | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MiddlePrincipalStress.PlotData)                                                                                               | Gets the result table.                                                 |
| [`Location`](#MiddlePrincipalStress.Location)                                                                                               | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MiddlePrincipalStress.TimeForMinimumOfMinimumValues)                                                     | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MiddlePrincipalStress.TimeForMinimumOfMaximumValues)                                                     | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MiddlePrincipalStress.LoadStepForMinimumOfMinimumValues)                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MiddlePrincipalStress.LoadStepForMinimumOfMaximumValues)                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MiddlePrincipalStress.TimeForMaximumOfMinimumValues)                                                     | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MiddlePrincipalStress.TimeForMaximumOfMaximumValues)                                                     | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MiddlePrincipalStress.LoadStepForMaximumOfMinimumValues)                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MiddlePrincipalStress.LoadStepForMaximumOfMaximumValues)                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MiddlePrincipalStress.IsSolved)                                                                                               | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MiddlePrincipalStress.ScopingMethod)                                                                                     | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MiddlePrincipalStress.SetNumber)                                                                                             | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MiddlePrincipalStress.CombinationNumber)                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MiddlePrincipalStress.SolutionCombinationDriver)                                                             | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MiddlePrincipalStress.WaterfallPanelShowTextOnMosaic)                                                   | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MiddlePrincipalStress.CrackFrontNumber)                                                                               | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MiddlePrincipalStress.GlobalIDs)                                                                                             | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MiddlePrincipalStress.Identifier)                                                                                           | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MiddlePrincipalStress.IterationNumber)                                                                                 | Gets the IterationNumber.                                              |
| [`LoadStep`](#MiddlePrincipalStress.LoadStep)                                                                                               | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MiddlePrincipalStress.MaximumOccursOn)                                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MiddlePrincipalStress.MinimumOccursOn)                                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MiddlePrincipalStress.LoadStepNumber)                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MiddlePrincipalStress.SolverComponentIDs)                                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MiddlePrincipalStress.Substep)                                                                                                 | Gets the Substep.                                                      |
| [`Average`](#MiddlePrincipalStress.Average)                                                                                                 | Gets the Average.                                                      |
| [`Maximum`](#MiddlePrincipalStress.Maximum)                                                                                                 | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MiddlePrincipalStress.MaximumOfMaximumOverTime)                                                               | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MiddlePrincipalStress.MaximumOfMinimumOverTime)                                                               | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MiddlePrincipalStress.Minimum)                                                                                                 | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MiddlePrincipalStress.MinimumOfMaximumOverTime)                                                               | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MiddlePrincipalStress.MinimumOfMinimumOverTime)                                                               | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MiddlePrincipalStress.Time)                                                                                                       | Gets the Time.                                                         |
| [`DisplayTime`](#MiddlePrincipalStress.DisplayTime)                                                                                         | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MiddlePrincipalStress.DisplayOption)                                                                                     | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MiddlePrincipalStress.DpfEvaluation)                                                                                     | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MiddlePrincipalStress.By)                                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#MiddlePrincipalStress.ItemType)                                                                                               | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MiddlePrincipalStress.CalculateTimeHistory)                                                                       | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MiddlePrincipalStress.Suppressed)                                                                                           | Gets or sets the Suppressed.                                           |
| [`Children`](#MiddlePrincipalStress.Children)                                                                                               | Gets the list of children.                                             |
| [`Comments`](#MiddlePrincipalStress.Comments)                                                                                               | Gets the list of associated comments.                                  |
| [`Figures`](#MiddlePrincipalStress.Figures)                                                                                                 | Gets the list of associated figures.                                   |
| [`Images`](#MiddlePrincipalStress.Images)                                                                                                   | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MiddlePrincipalStress.Properties)                                                                                           | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MiddlePrincipalStress.VisibleProperties)                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import MiddlePrincipalStress
```

<a id="property-detail"></a>

## Property detail

<a id="MiddlePrincipalStress.InternalObject"></a>

### *property* MiddlePrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.DataModelObjectCategory"></a>

### *property* MiddlePrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Mode"></a>

### *property* MiddlePrincipalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Ply"></a>

### *property* MiddlePrincipalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Plies"></a>

### *property* MiddlePrincipalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.EnvironmentSelection"></a>

### *property* MiddlePrincipalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.HarmonicIndex"></a>

### *property* MiddlePrincipalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CyclicMode"></a>

### *property* MiddlePrincipalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.IterationStep"></a>

### *property* MiddlePrincipalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Layer"></a>

### *property* MiddlePrincipalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadMultiplier"></a>

### *property* MiddlePrincipalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Probability"></a>

### *property* MiddlePrincipalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ReportedFrequency"></a>

### *property* MiddlePrincipalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AverageRadiusOfCurvature"></a>

### *property* MiddlePrincipalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.BendingInside"></a>

### *property* MiddlePrincipalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.BendingOutside"></a>

### *property* MiddlePrincipalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MembraneBendingCenter"></a>

### *property* MiddlePrincipalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MembraneBendingInside"></a>

### *property* MiddlePrincipalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MembraneBendingOutside"></a>

### *property* MiddlePrincipalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Membrane"></a>

### *property* MiddlePrincipalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PeakCenter"></a>

### *property* MiddlePrincipalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PeakInside"></a>

### *property* MiddlePrincipalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PeakOutside"></a>

### *property* MiddlePrincipalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.SweepingPhase"></a>

### *property* MiddlePrincipalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PhaseIncrement"></a>

### *property* MiddlePrincipalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Frequency"></a>

### *property* MiddlePrincipalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TotalCenter"></a>

### *property* MiddlePrincipalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TotalInside"></a>

### *property* MiddlePrincipalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TotalOutside"></a>

### *property* MiddlePrincipalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Linearized2DBehavior"></a>

### *property* MiddlePrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Subtype"></a>

### *property* MiddlePrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.NormalOrientation"></a>

### *property* MiddlePrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ScaleFactor"></a>

### *property* MiddlePrincipalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Position"></a>

### *property* MiddlePrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.StressStrainType"></a>

### *property* MiddlePrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.SubScopeBy"></a>

### *property* MiddlePrincipalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ThroughThicknessBendingStress"></a>

### *property* MiddlePrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Amplitude"></a>

### *property* MiddlePrincipalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AverageAcrossBodies"></a>

### *property* MiddlePrincipalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PlotData"></a>

### *property* MiddlePrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Location"></a>

### *property* MiddlePrincipalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MiddlePrincipalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MiddlePrincipalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MiddlePrincipalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MiddlePrincipalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.IsSolved"></a>

### *property* MiddlePrincipalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CoordinateSystem"></a>

### *property* MiddlePrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ScopingMethod"></a>

### *property* MiddlePrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.SetNumber"></a>

### *property* MiddlePrincipalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CombinationNumber"></a>

### *property* MiddlePrincipalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.SolutionCombinationDriver"></a>

### *property* MiddlePrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Path"></a>

### *property* MiddlePrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Surface"></a>

### *property* MiddlePrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.NamedSelections"></a>

### *property* MiddlePrincipalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* MiddlePrincipalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CrackFrontNumber"></a>

### *property* MiddlePrincipalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.GlobalIDs"></a>

### *property* MiddlePrincipalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Identifier"></a>

### *property* MiddlePrincipalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.IterationNumber"></a>

### *property* MiddlePrincipalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadStep"></a>

### *property* MiddlePrincipalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MaximumOccursOn"></a>

### *property* MiddlePrincipalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MinimumOccursOn"></a>

### *property* MiddlePrincipalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.LoadStepNumber"></a>

### *property* MiddlePrincipalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.SolverComponentIDs"></a>

### *property* MiddlePrincipalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Substep"></a>

### *property* MiddlePrincipalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Average"></a>

### *property* MiddlePrincipalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Maximum"></a>

### *property* MiddlePrincipalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* MiddlePrincipalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* MiddlePrincipalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Minimum"></a>

### *property* MiddlePrincipalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* MiddlePrincipalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* MiddlePrincipalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Time"></a>

### *property* MiddlePrincipalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.DisplayTime"></a>

### *property* MiddlePrincipalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.GraphControlsXAxis"></a>

### *property* MiddlePrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.DisplayOption"></a>

### *property* MiddlePrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.DpfEvaluation"></a>

### *property* MiddlePrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.By"></a>

### *property* MiddlePrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ItemType"></a>

### *property* MiddlePrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CalculateTimeHistory"></a>

### *property* MiddlePrincipalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Suppressed"></a>

### *property* MiddlePrincipalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Children"></a>

### *property* MiddlePrincipalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Comments"></a>

### *property* MiddlePrincipalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Figures"></a>

### *property* MiddlePrincipalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Images"></a>

### *property* MiddlePrincipalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MiddlePrincipalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Properties"></a>

### *property* MiddlePrincipalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.VisibleProperties"></a>

### *property* MiddlePrincipalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MiddlePrincipalStress.ClearGeneratedData"></a>

### MiddlePrincipalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.EvaluateAllResults"></a>

### MiddlePrincipalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.FetchRemoteResults"></a>

### MiddlePrincipalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ExportToTextFile"></a>

### MiddlePrincipalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.ExportAnimation"></a>

### MiddlePrincipalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.DuplicateWithoutResults"></a>

### MiddlePrincipalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CreateResultsAtAllSets"></a>

### MiddlePrincipalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PromoteToNamedSelection"></a>

### MiddlePrincipalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CreateParameter"></a>

### MiddlePrincipalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AddAlert"></a>

### MiddlePrincipalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AddConvergence"></a>

### MiddlePrincipalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.RenameBasedOnDefinition"></a>

### MiddlePrincipalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Delete"></a>

### MiddlePrincipalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.GetChildren"></a>

### MiddlePrincipalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MiddlePrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AddComment"></a>

### MiddlePrincipalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AddFigure"></a>

### MiddlePrincipalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.AddImage"></a>

### MiddlePrincipalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Activate"></a>

### MiddlePrincipalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.CopyTo"></a>

### MiddlePrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.Duplicate"></a>

### MiddlePrincipalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.GroupAllSimilarChildren"></a>

### MiddlePrincipalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.GroupSimilarObjects"></a>

### MiddlePrincipalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PropertyByName"></a>

### MiddlePrincipalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.PropertyByAPIName"></a>

### MiddlePrincipalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.GetParameter"></a>

### MiddlePrincipalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MiddlePrincipalStress.RemoveParameter"></a>

### MiddlePrincipalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
