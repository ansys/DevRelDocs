<a id="directionalstress"></a>

# DirectionalStress

<a id="DirectionalStress"></a>

### *class* DirectionalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectionalStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ClearGeneratedData`](#DirectionalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#DirectionalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#DirectionalStress.Mode)                                                                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#DirectionalStress.Ply)                                                                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#DirectionalStress.Plies)                                                                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](#DirectionalStress.EnvironmentSelection)                                                                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#DirectionalStress.HarmonicIndex)                                                                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#DirectionalStress.CyclicMode)                                                                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#DirectionalStress.IterationStep)                                                                                         | Gets or sets the IterationStep.                                        |
| [`Layer`](#DirectionalStress.Layer)                                                                                                         | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#DirectionalStress.LoadMultiplier)                                                                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](#DirectionalStress.Probability)                                                                                             | Gets the Probability.                                                  |
| [`ReportedFrequency`](#DirectionalStress.ReportedFrequency)                                                                                 | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#DirectionalStress.AverageRadiusOfCurvature)                                                                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#DirectionalStress.BendingInside)                                                                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](#DirectionalStress.BendingOutside)                                                                                       | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#DirectionalStress.MembraneBendingCenter)                                                                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#DirectionalStress.MembraneBendingInside)                                                                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#DirectionalStress.MembraneBendingOutside)                                                                       | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#DirectionalStress.Membrane)                                                                                                   | Gets the Membrane.                                                     |
| [`PeakCenter`](#DirectionalStress.PeakCenter)                                                                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](#DirectionalStress.PeakInside)                                                                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](#DirectionalStress.PeakOutside)                                                                                             | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#DirectionalStress.SweepingPhase)                                                                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalStress.PhaseIncrement)                                                                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalStress.Frequency)                                                                                                 | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#DirectionalStress.TotalCenter)                                                                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](#DirectionalStress.TotalInside)                                                                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](#DirectionalStress.TotalOutside)                                                                                           | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#DirectionalStress.Subtype)                                                                                                     | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#DirectionalStress.NormalOrientation)                                                                                 | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#DirectionalStress.ScaleFactor)                                                                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#DirectionalStress.SubScopeBy)                                                                                               | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#DirectionalStress.Amplitude)                                                                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#DirectionalStress.AverageAcrossBodies)                                                                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalStress.PlotData)                                                                                                   | Gets the result table.                                                 |
| [`Location`](#DirectionalStress.Location)                                                                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalStress.TimeForMinimumOfMinimumValues)                                                         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalStress.TimeForMinimumOfMaximumValues)                                                         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalStress.LoadStepForMinimumOfMinimumValues)                                                 | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalStress.LoadStepForMinimumOfMaximumValues)                                                 | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalStress.TimeForMaximumOfMinimumValues)                                                         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalStress.TimeForMaximumOfMaximumValues)                                                         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalStress.LoadStepForMaximumOfMinimumValues)                                                 | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalStress.LoadStepForMaximumOfMaximumValues)                                                 | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalStress.IsSolved)                                                                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalStress.ScopingMethod)                                                                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalStress.SetNumber)                                                                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalStress.CombinationNumber)                                                                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalStress.SolutionCombinationDriver)                                                                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectionalStress.WaterfallPanelShowTextOnMosaic)                                                       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectionalStress.CrackFrontNumber)                                                                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalStress.GlobalIDs)                                                                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalStress.Identifier)                                                                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalStress.IterationNumber)                                                                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalStress.LoadStep)                                                                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalStress.MaximumOccursOn)                                                                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalStress.MinimumOccursOn)                                                                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalStress.LoadStepNumber)                                                                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalStress.SolverComponentIDs)                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalStress.Substep)                                                                                                     | Gets the Substep.                                                      |
| [`Average`](#DirectionalStress.Average)                                                                                                     | Gets the Average.                                                      |
| [`Maximum`](#DirectionalStress.Maximum)                                                                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalStress.MaximumOfMaximumOverTime)                                                                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalStress.MaximumOfMinimumOverTime)                                                                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalStress.Minimum)                                                                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalStress.MinimumOfMaximumOverTime)                                                                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalStress.MinimumOfMinimumOverTime)                                                                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalStress.Time)                                                                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalStress.DisplayTime)                                                                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalStress.DisplayOption)                                                                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalStress.DpfEvaluation)                                                                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalStress.By)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalStress.ItemType)                                                                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalStress.CalculateTimeHistory)                                                                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalStress.Suppressed)                                                                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalStress.Children)                                                                                                   | Gets the list of children.                                             |
| [`Comments`](#DirectionalStress.Comments)                                                                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalStress.Figures)                                                                                                     | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalStress.Images)                                                                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalStress.Properties)                                                                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalStress.VisibleProperties)                                                                                 | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import DirectionalStress
```

<a id="property-detail"></a>

## Property detail

<a id="DirectionalStress.InternalObject"></a>

### *property* DirectionalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.DataModelObjectCategory"></a>

### *property* DirectionalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Mode"></a>

### *property* DirectionalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Ply"></a>

### *property* DirectionalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Plies"></a>

### *property* DirectionalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.EnvironmentSelection"></a>

### *property* DirectionalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.HarmonicIndex"></a>

### *property* DirectionalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CyclicMode"></a>

### *property* DirectionalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.IterationStep"></a>

### *property* DirectionalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Layer"></a>

### *property* DirectionalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadMultiplier"></a>

### *property* DirectionalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Probability"></a>

### *property* DirectionalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ReportedFrequency"></a>

### *property* DirectionalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AverageRadiusOfCurvature"></a>

### *property* DirectionalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.BendingInside"></a>

### *property* DirectionalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.BendingOutside"></a>

### *property* DirectionalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MembraneBendingCenter"></a>

### *property* DirectionalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MembraneBendingInside"></a>

### *property* DirectionalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MembraneBendingOutside"></a>

### *property* DirectionalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Membrane"></a>

### *property* DirectionalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PeakCenter"></a>

### *property* DirectionalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PeakInside"></a>

### *property* DirectionalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PeakOutside"></a>

### *property* DirectionalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.SweepingPhase"></a>

### *property* DirectionalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PhaseIncrement"></a>

### *property* DirectionalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Frequency"></a>

### *property* DirectionalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TotalCenter"></a>

### *property* DirectionalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TotalInside"></a>

### *property* DirectionalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TotalOutside"></a>

### *property* DirectionalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Linearized2DBehavior"></a>

### *property* DirectionalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Subtype"></a>

### *property* DirectionalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.NormalOrientation"></a>

### *property* DirectionalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ScaleFactor"></a>

### *property* DirectionalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Position"></a>

### *property* DirectionalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.StressStrainType"></a>

### *property* DirectionalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.SubScopeBy"></a>

### *property* DirectionalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ThroughThicknessBendingStress"></a>

### *property* DirectionalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Amplitude"></a>

### *property* DirectionalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AverageAcrossBodies"></a>

### *property* DirectionalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PlotData"></a>

### *property* DirectionalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Location"></a>

### *property* DirectionalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.IsSolved"></a>

### *property* DirectionalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CoordinateSystem"></a>

### *property* DirectionalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ScopingMethod"></a>

### *property* DirectionalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.SetNumber"></a>

### *property* DirectionalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CombinationNumber"></a>

### *property* DirectionalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.SolutionCombinationDriver"></a>

### *property* DirectionalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Path"></a>

### *property* DirectionalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Surface"></a>

### *property* DirectionalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.NamedSelections"></a>

### *property* DirectionalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectionalStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CrackFrontNumber"></a>

### *property* DirectionalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.GlobalIDs"></a>

### *property* DirectionalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Identifier"></a>

### *property* DirectionalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.IterationNumber"></a>

### *property* DirectionalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadStep"></a>

### *property* DirectionalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MaximumOccursOn"></a>

### *property* DirectionalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MinimumOccursOn"></a>

### *property* DirectionalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.LoadStepNumber"></a>

### *property* DirectionalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.SolverComponentIDs"></a>

### *property* DirectionalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Substep"></a>

### *property* DirectionalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Average"></a>

### *property* DirectionalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Maximum"></a>

### *property* DirectionalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MaximumOfMaximumOverTime"></a>

### *property* DirectionalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MaximumOfMinimumOverTime"></a>

### *property* DirectionalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Minimum"></a>

### *property* DirectionalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MinimumOfMaximumOverTime"></a>

### *property* DirectionalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.MinimumOfMinimumOverTime"></a>

### *property* DirectionalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Time"></a>

### *property* DirectionalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.DisplayTime"></a>

### *property* DirectionalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.GraphControlsXAxis"></a>

### *property* DirectionalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.DisplayOption"></a>

### *property* DirectionalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.DpfEvaluation"></a>

### *property* DirectionalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.By"></a>

### *property* DirectionalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ItemType"></a>

### *property* DirectionalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CalculateTimeHistory"></a>

### *property* DirectionalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Suppressed"></a>

### *property* DirectionalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Children"></a>

### *property* DirectionalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Comments"></a>

### *property* DirectionalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Figures"></a>

### *property* DirectionalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Images"></a>

### *property* DirectionalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Properties"></a>

### *property* DirectionalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.VisibleProperties"></a>

### *property* DirectionalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalStress.ClearGeneratedData"></a>

### DirectionalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.EvaluateAllResults"></a>

### DirectionalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.FetchRemoteResults"></a>

### DirectionalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ExportToTextFile"></a>

### DirectionalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.ExportAnimation"></a>

### DirectionalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.DuplicateWithoutResults"></a>

### DirectionalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CreateResultsAtAllSets"></a>

### DirectionalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PromoteToNamedSelection"></a>

### DirectionalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CreateParameter"></a>

### DirectionalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AddAlert"></a>

### DirectionalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AddConvergence"></a>

### DirectionalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.RenameBasedOnDefinition"></a>

### DirectionalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Delete"></a>

### DirectionalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.GetChildren"></a>

### DirectionalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AddComment"></a>

### DirectionalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AddFigure"></a>

### DirectionalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.AddImage"></a>

### DirectionalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Activate"></a>

### DirectionalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.CopyTo"></a>

### DirectionalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.Duplicate"></a>

### DirectionalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.GroupAllSimilarChildren"></a>

### DirectionalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.GroupSimilarObjects"></a>

### DirectionalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PropertyByName"></a>

### DirectionalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.PropertyByAPIName"></a>

### DirectionalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.GetParameter"></a>

### DirectionalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalStress.RemoveParameter"></a>

### DirectionalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
