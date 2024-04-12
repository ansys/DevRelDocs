<a id="stressintensity"></a>

# StressIntensity

<a id="StressIntensity"></a>

### *class* StressIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressIntensity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ClearGeneratedData`](#StressIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#StressIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#StressIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#StressIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#StressIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#StressIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#StressIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#StressIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#StressIntensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#StressIntensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#StressIntensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#StressIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#StressIntensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#StressIntensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#StressIntensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StressIntensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#StressIntensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#StressIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#StressIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#StressIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#StressIntensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#StressIntensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#StressIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#StressIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#StressIntensity.Mode)                                                                                                             | Gets or sets the Mode.                                                 |
| [`Ply`](#StressIntensity.Ply)                                                                                                               | Gets or sets the Ply selection.                                        |
| [`Plies`](#StressIntensity.Plies)                                                                                                           | Plies property.                                                        |
| [`EnvironmentSelection`](#StressIntensity.EnvironmentSelection)                                                                             | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#StressIntensity.HarmonicIndex)                                                                                           | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#StressIntensity.CyclicMode)                                                                                                 | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#StressIntensity.IterationStep)                                                                                           | Gets or sets the IterationStep.                                        |
| [`Layer`](#StressIntensity.Layer)                                                                                                           | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#StressIntensity.LoadMultiplier)                                                                                         | Gets the LoadMultiplier.                                               |
| [`Probability`](#StressIntensity.Probability)                                                                                               | Gets the Probability.                                                  |
| [`ReportedFrequency`](#StressIntensity.ReportedFrequency)                                                                                   | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#StressIntensity.AverageRadiusOfCurvature)                                                                     | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#StressIntensity.BendingInside)                                                                                           | Gets the BendingInside.                                                |
| [`BendingOutside`](#StressIntensity.BendingOutside)                                                                                         | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#StressIntensity.MembraneBendingCenter)                                                                           | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#StressIntensity.MembraneBendingInside)                                                                           | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#StressIntensity.MembraneBendingOutside)                                                                         | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#StressIntensity.Membrane)                                                                                                     | Gets the Membrane.                                                     |
| [`PeakCenter`](#StressIntensity.PeakCenter)                                                                                                 | Gets the PeakCenter.                                                   |
| [`PeakInside`](#StressIntensity.PeakInside)                                                                                                 | Gets the PeakInside.                                                   |
| [`PeakOutside`](#StressIntensity.PeakOutside)                                                                                               | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#StressIntensity.SweepingPhase)                                                                                           | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#StressIntensity.PhaseIncrement)                                                                                         | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#StressIntensity.Frequency)                                                                                                   | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#StressIntensity.TotalCenter)                                                                                               | Gets the TotalCenter.                                                  |
| [`TotalInside`](#StressIntensity.TotalInside)                                                                                               | Gets the TotalInside.                                                  |
| [`TotalOutside`](#StressIntensity.TotalOutside)                                                                                             | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#StressIntensity.Subtype)                                                                                                       | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#StressIntensity.NormalOrientation)                                                                                   | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#StressIntensity.ScaleFactor)                                                                                               | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#StressIntensity.SubScopeBy)                                                                                                 | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#StressIntensity.Amplitude)                                                                                                   | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#StressIntensity.AverageAcrossBodies)                                                                               | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#StressIntensity.PlotData)                                                                                                     | Gets the result table.                                                 |
| [`Location`](#StressIntensity.Location)                                                                                                     | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#StressIntensity.TimeForMinimumOfMinimumValues)                                                           | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#StressIntensity.TimeForMinimumOfMaximumValues)                                                           | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#StressIntensity.LoadStepForMinimumOfMinimumValues)                                                   | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#StressIntensity.LoadStepForMinimumOfMaximumValues)                                                   | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#StressIntensity.TimeForMaximumOfMinimumValues)                                                           | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#StressIntensity.TimeForMaximumOfMaximumValues)                                                           | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#StressIntensity.LoadStepForMaximumOfMinimumValues)                                                   | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#StressIntensity.LoadStepForMaximumOfMaximumValues)                                                   | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#StressIntensity.IsSolved)                                                                                                     | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#StressIntensity.ScopingMethod)                                                                                           | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#StressIntensity.SetNumber)                                                                                                   | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#StressIntensity.CombinationNumber)                                                                                   | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#StressIntensity.SolutionCombinationDriver)                                                                   | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#StressIntensity.WaterfallPanelShowTextOnMosaic)                                                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#StressIntensity.CrackFrontNumber)                                                                                     | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#StressIntensity.GlobalIDs)                                                                                                   | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#StressIntensity.Identifier)                                                                                                 | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#StressIntensity.IterationNumber)                                                                                       | Gets the IterationNumber.                                              |
| [`LoadStep`](#StressIntensity.LoadStep)                                                                                                     | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#StressIntensity.MaximumOccursOn)                                                                                       | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#StressIntensity.MinimumOccursOn)                                                                                       | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#StressIntensity.LoadStepNumber)                                                                                         | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#StressIntensity.SolverComponentIDs)                                                                                 | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#StressIntensity.Substep)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#StressIntensity.Average)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#StressIntensity.Maximum)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#StressIntensity.MaximumOfMaximumOverTime)                                                                     | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#StressIntensity.MaximumOfMinimumOverTime)                                                                     | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#StressIntensity.Minimum)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#StressIntensity.MinimumOfMaximumOverTime)                                                                     | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#StressIntensity.MinimumOfMinimumOverTime)                                                                     | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#StressIntensity.Time)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#StressIntensity.DisplayTime)                                                                                               | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#StressIntensity.DisplayOption)                                                                                           | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#StressIntensity.DpfEvaluation)                                                                                           | Gets or sets the DpfEvaluation.                                        |
| [`By`](#StressIntensity.By)                                                                                                                 | Gets or sets the By.                                                   |
| [`ItemType`](#StressIntensity.ItemType)                                                                                                     | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#StressIntensity.CalculateTimeHistory)                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#StressIntensity.Suppressed)                                                                                                 | Gets or sets the Suppressed.                                           |
| [`Children`](#StressIntensity.Children)                                                                                                     | Gets the list of children.                                             |
| [`Comments`](#StressIntensity.Comments)                                                                                                     | Gets the list of associated comments.                                  |
| [`Figures`](#StressIntensity.Figures)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#StressIntensity.Images)                                                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#StressIntensity.Properties)                                                                                                 | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#StressIntensity.VisibleProperties)                                                                                   | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import StressIntensity
```

<a id="property-detail"></a>

## Property detail

<a id="StressIntensity.InternalObject"></a>

### *property* StressIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.DataModelObjectCategory"></a>

### *property* StressIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Mode"></a>

### *property* StressIntensity.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Ply"></a>

### *property* StressIntensity.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Plies"></a>

### *property* StressIntensity.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.EnvironmentSelection"></a>

### *property* StressIntensity.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.HarmonicIndex"></a>

### *property* StressIntensity.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CyclicMode"></a>

### *property* StressIntensity.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.IterationStep"></a>

### *property* StressIntensity.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Layer"></a>

### *property* StressIntensity.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadMultiplier"></a>

### *property* StressIntensity.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Probability"></a>

### *property* StressIntensity.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ReportedFrequency"></a>

### *property* StressIntensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AverageRadiusOfCurvature"></a>

### *property* StressIntensity.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.BendingInside"></a>

### *property* StressIntensity.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.BendingOutside"></a>

### *property* StressIntensity.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MembraneBendingCenter"></a>

### *property* StressIntensity.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MembraneBendingInside"></a>

### *property* StressIntensity.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MembraneBendingOutside"></a>

### *property* StressIntensity.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Membrane"></a>

### *property* StressIntensity.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PeakCenter"></a>

### *property* StressIntensity.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PeakInside"></a>

### *property* StressIntensity.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PeakOutside"></a>

### *property* StressIntensity.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.SweepingPhase"></a>

### *property* StressIntensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PhaseIncrement"></a>

### *property* StressIntensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Frequency"></a>

### *property* StressIntensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TotalCenter"></a>

### *property* StressIntensity.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TotalInside"></a>

### *property* StressIntensity.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TotalOutside"></a>

### *property* StressIntensity.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Linearized2DBehavior"></a>

### *property* StressIntensity.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Subtype"></a>

### *property* StressIntensity.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.NormalOrientation"></a>

### *property* StressIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ScaleFactor"></a>

### *property* StressIntensity.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Position"></a>

### *property* StressIntensity.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.StressStrainType"></a>

### *property* StressIntensity.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.SubScopeBy"></a>

### *property* StressIntensity.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ThroughThicknessBendingStress"></a>

### *property* StressIntensity.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Amplitude"></a>

### *property* StressIntensity.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AverageAcrossBodies"></a>

### *property* StressIntensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PlotData"></a>

### *property* StressIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Location"></a>

### *property* StressIntensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* StressIntensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* StressIntensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* StressIntensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* StressIntensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* StressIntensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* StressIntensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* StressIntensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* StressIntensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.IsSolved"></a>

### *property* StressIntensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CoordinateSystem"></a>

### *property* StressIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ScopingMethod"></a>

### *property* StressIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.SetNumber"></a>

### *property* StressIntensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CombinationNumber"></a>

### *property* StressIntensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.SolutionCombinationDriver"></a>

### *property* StressIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Path"></a>

### *property* StressIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Surface"></a>

### *property* StressIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.NamedSelections"></a>

### *property* StressIntensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.WaterfallPanelShowTextOnMosaic"></a>

### *property* StressIntensity.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CrackFrontNumber"></a>

### *property* StressIntensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.GlobalIDs"></a>

### *property* StressIntensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Identifier"></a>

### *property* StressIntensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.IterationNumber"></a>

### *property* StressIntensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadStep"></a>

### *property* StressIntensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MaximumOccursOn"></a>

### *property* StressIntensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MinimumOccursOn"></a>

### *property* StressIntensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.LoadStepNumber"></a>

### *property* StressIntensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.SolverComponentIDs"></a>

### *property* StressIntensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Substep"></a>

### *property* StressIntensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Average"></a>

### *property* StressIntensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Maximum"></a>

### *property* StressIntensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MaximumOfMaximumOverTime"></a>

### *property* StressIntensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MaximumOfMinimumOverTime"></a>

### *property* StressIntensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Minimum"></a>

### *property* StressIntensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MinimumOfMaximumOverTime"></a>

### *property* StressIntensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.MinimumOfMinimumOverTime"></a>

### *property* StressIntensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Time"></a>

### *property* StressIntensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.DisplayTime"></a>

### *property* StressIntensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.GraphControlsXAxis"></a>

### *property* StressIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.DisplayOption"></a>

### *property* StressIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.DpfEvaluation"></a>

### *property* StressIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.By"></a>

### *property* StressIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ItemType"></a>

### *property* StressIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CalculateTimeHistory"></a>

### *property* StressIntensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Suppressed"></a>

### *property* StressIntensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Children"></a>

### *property* StressIntensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Comments"></a>

### *property* StressIntensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Figures"></a>

### *property* StressIntensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Images"></a>

### *property* StressIntensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StressIntensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Properties"></a>

### *property* StressIntensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.VisibleProperties"></a>

### *property* StressIntensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressIntensity.ClearGeneratedData"></a>

### StressIntensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.EvaluateAllResults"></a>

### StressIntensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.FetchRemoteResults"></a>

### StressIntensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ExportToTextFile"></a>

### StressIntensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.ExportAnimation"></a>

### StressIntensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.DuplicateWithoutResults"></a>

### StressIntensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CreateResultsAtAllSets"></a>

### StressIntensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PromoteToNamedSelection"></a>

### StressIntensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CreateParameter"></a>

### StressIntensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AddAlert"></a>

### StressIntensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AddConvergence"></a>

### StressIntensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.RenameBasedOnDefinition"></a>

### StressIntensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Delete"></a>

### StressIntensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.GetChildren"></a>

### StressIntensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StressIntensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AddComment"></a>

### StressIntensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AddFigure"></a>

### StressIntensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.AddImage"></a>

### StressIntensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Activate"></a>

### StressIntensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.CopyTo"></a>

### StressIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.Duplicate"></a>

### StressIntensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.GroupAllSimilarChildren"></a>

### StressIntensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.GroupSimilarObjects"></a>

### StressIntensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PropertyByName"></a>

### StressIntensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.PropertyByAPIName"></a>

### StressIntensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.GetParameter"></a>

### StressIntensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressIntensity.RemoveParameter"></a>

### StressIntensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
