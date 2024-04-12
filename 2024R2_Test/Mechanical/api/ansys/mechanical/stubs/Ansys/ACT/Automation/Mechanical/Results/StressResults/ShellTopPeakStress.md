<a id="shelltoppeakstress"></a>

# ShellTopPeakStress

<a id="ShellTopPeakStress"></a>

### *class* ShellTopPeakStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShellTopPeakStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ShellTopPeakStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ShellTopPeakStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ShellTopPeakStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ShellTopPeakStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ShellTopPeakStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ShellTopPeakStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ShellTopPeakStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ShellTopPeakStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ShellTopPeakStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ShellTopPeakStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ShellTopPeakStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ShellTopPeakStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ShellTopPeakStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id2)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id2)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ShellTopPeakStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ShellTopPeakStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ShellTopPeakStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ShellTopPeakStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ShellTopPeakStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ShellTopPeakStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ShellTopPeakStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ShellTopPeakStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ShellTopPeakStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ShellTopPeakStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ShellTopPeakStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ShellTopPeakStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`NormalOrientation`](#id0)                                                                                                                 | Gets or sets the NormalOrientation.                                    |
| [`InternalObject`](#id1)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`ShellMBPType`](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ShellMBPType)                                                    | Gets the ShellMBPType.                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                           |
| [`Mode`](#ShellTopPeakStress.Mode)                                                                                                          | Gets or sets the Mode.                                                 |
| [`Ply`](#ShellTopPeakStress.Ply)                                                                                                            | Gets or sets the Ply selection.                                        |
| [`Plies`](#ShellTopPeakStress.Plies)                                                                                                        | Plies property.                                                        |
| [`EnvironmentSelection`](#ShellTopPeakStress.EnvironmentSelection)                                                                          | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#ShellTopPeakStress.HarmonicIndex)                                                                                        | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#ShellTopPeakStress.CyclicMode)                                                                                              | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#ShellTopPeakStress.IterationStep)                                                                                        | Gets or sets the IterationStep.                                        |
| [`Layer`](#ShellTopPeakStress.Layer)                                                                                                        | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#ShellTopPeakStress.LoadMultiplier)                                                                                      | Gets the LoadMultiplier.                                               |
| [`Probability`](#ShellTopPeakStress.Probability)                                                                                            | Gets the Probability.                                                  |
| [`ReportedFrequency`](#ShellTopPeakStress.ReportedFrequency)                                                                                | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#ShellTopPeakStress.AverageRadiusOfCurvature)                                                                  | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#ShellTopPeakStress.BendingInside)                                                                                        | Gets the BendingInside.                                                |
| [`BendingOutside`](#ShellTopPeakStress.BendingOutside)                                                                                      | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#ShellTopPeakStress.MembraneBendingCenter)                                                                        | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#ShellTopPeakStress.MembraneBendingInside)                                                                        | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#ShellTopPeakStress.MembraneBendingOutside)                                                                      | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#ShellTopPeakStress.Membrane)                                                                                                  | Gets the Membrane.                                                     |
| [`PeakCenter`](#ShellTopPeakStress.PeakCenter)                                                                                              | Gets the PeakCenter.                                                   |
| [`PeakInside`](#ShellTopPeakStress.PeakInside)                                                                                              | Gets the PeakInside.                                                   |
| [`PeakOutside`](#ShellTopPeakStress.PeakOutside)                                                                                            | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#ShellTopPeakStress.SweepingPhase)                                                                                        | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#ShellTopPeakStress.PhaseIncrement)                                                                                      | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#ShellTopPeakStress.Frequency)                                                                                                | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#ShellTopPeakStress.TotalCenter)                                                                                            | Gets the TotalCenter.                                                  |
| [`TotalInside`](#ShellTopPeakStress.TotalInside)                                                                                            | Gets the TotalInside.                                                  |
| [`TotalOutside`](#ShellTopPeakStress.TotalOutside)                                                                                          | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior)                            | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#ShellTopPeakStress.Subtype)                                                                                                    | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#id0)                                                                                                                 | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#ShellTopPeakStress.ScaleFactor)                                                                                            | Gets or sets the ScaleFactor.                                          |
| [`Position`](../ProbeResults/Position.md#Position)                                                                                          | Gets or sets the Position.                                             |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                                        | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#ShellTopPeakStress.SubScopeBy)                                                                                              | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#ShellTopPeakStress.Amplitude)                                                                                                | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#ShellTopPeakStress.AverageAcrossBodies)                                                                            | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#ShellTopPeakStress.PlotData)                                                                                                  | Gets the result table.                                                 |
| [`Location`](#ShellTopPeakStress.Location)                                                                                                  | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ShellTopPeakStress.TimeForMinimumOfMinimumValues)                                                        | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ShellTopPeakStress.TimeForMinimumOfMaximumValues)                                                        | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ShellTopPeakStress.LoadStepForMinimumOfMinimumValues)                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ShellTopPeakStress.LoadStepForMinimumOfMaximumValues)                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ShellTopPeakStress.TimeForMaximumOfMinimumValues)                                                        | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ShellTopPeakStress.TimeForMaximumOfMaximumValues)                                                        | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ShellTopPeakStress.LoadStepForMaximumOfMinimumValues)                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ShellTopPeakStress.LoadStepForMaximumOfMaximumValues)                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ShellTopPeakStress.IsSolved)                                                                                                  | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                               | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ShellTopPeakStress.ScopingMethod)                                                                                        | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ShellTopPeakStress.SetNumber)                                                                                                | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ShellTopPeakStress.CombinationNumber)                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ShellTopPeakStress.SolutionCombinationDriver)                                                                | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                                | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                                       | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                               | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ShellTopPeakStress.WaterfallPanelShowTextOnMosaic)                                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ShellTopPeakStress.CrackFrontNumber)                                                                                  | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ShellTopPeakStress.GlobalIDs)                                                                                                | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ShellTopPeakStress.Identifier)                                                                                              | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ShellTopPeakStress.IterationNumber)                                                                                    | Gets the IterationNumber.                                              |
| [`LoadStep`](#ShellTopPeakStress.LoadStep)                                                                                                  | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ShellTopPeakStress.MaximumOccursOn)                                                                                    | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ShellTopPeakStress.MinimumOccursOn)                                                                                    | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ShellTopPeakStress.LoadStepNumber)                                                                                      | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ShellTopPeakStress.SolverComponentIDs)                                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ShellTopPeakStress.Substep)                                                                                                    | Gets the Substep.                                                      |
| [`Average`](#ShellTopPeakStress.Average)                                                                                                    | Gets the Average.                                                      |
| [`Maximum`](#ShellTopPeakStress.Maximum)                                                                                                    | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ShellTopPeakStress.MaximumOfMaximumOverTime)                                                                  | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ShellTopPeakStress.MaximumOfMinimumOverTime)                                                                  | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ShellTopPeakStress.Minimum)                                                                                                    | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ShellTopPeakStress.MinimumOfMaximumOverTime)                                                                  | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ShellTopPeakStress.MinimumOfMinimumOverTime)                                                                  | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ShellTopPeakStress.Time)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#ShellTopPeakStress.DisplayTime)                                                                                            | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                                  | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ShellTopPeakStress.DisplayOption)                                                                                        | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ShellTopPeakStress.DpfEvaluation)                                                                                        | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ShellTopPeakStress.By)                                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#ShellTopPeakStress.ItemType)                                                                                                  | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ShellTopPeakStress.CalculateTimeHistory)                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ShellTopPeakStress.Suppressed)                                                                                              | Gets or sets the Suppressed.                                           |
| [`Children`](#ShellTopPeakStress.Children)                                                                                                  | Gets the list of children.                                             |
| [`Comments`](#ShellTopPeakStress.Comments)                                                                                                  | Gets the list of associated comments.                                  |
| [`Figures`](#ShellTopPeakStress.Figures)                                                                                                    | Gets the list of associated figures.                                   |
| [`Images`](#ShellTopPeakStress.Images)                                                                                                      | Gets the list of associated images.                                    |
| [`InternalObject`](#id1)                                                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ShellTopPeakStress.Properties)                                                                                              | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ShellTopPeakStress.VisibleProperties)                                                                                | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import ShellTopPeakStress
```

<a id="property-detail"></a>

## Property detail

<a id="ShellTopPeakStress.NormalOrientation"></a>

### *property* ShellTopPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType](../../../../../Mechanical/DataModel/Enums/ShellMBPOrientationType.md#ShellMBPOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.InternalObject"></a>

### *property* ShellTopPeakStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ShellMBPType"></a>

### *property* ShellTopPeakStress.ShellMBPType *: [Ansys.Mechanical.DataModel.Enums.ShellMBPType](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ShellMBPType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellMBPType.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DataModelObjectCategory"></a>

### *property* ShellTopPeakStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Mode"></a>

### *property* ShellTopPeakStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Ply"></a>

### *property* ShellTopPeakStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Plies"></a>

### *property* ShellTopPeakStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.EnvironmentSelection"></a>

### *property* ShellTopPeakStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.HarmonicIndex"></a>

### *property* ShellTopPeakStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CyclicMode"></a>

### *property* ShellTopPeakStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.IterationStep"></a>

### *property* ShellTopPeakStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Layer"></a>

### *property* ShellTopPeakStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadMultiplier"></a>

### *property* ShellTopPeakStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Probability"></a>

### *property* ShellTopPeakStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ReportedFrequency"></a>

### *property* ShellTopPeakStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AverageRadiusOfCurvature"></a>

### *property* ShellTopPeakStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.BendingInside"></a>

### *property* ShellTopPeakStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.BendingOutside"></a>

### *property* ShellTopPeakStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MembraneBendingCenter"></a>

### *property* ShellTopPeakStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MembraneBendingInside"></a>

### *property* ShellTopPeakStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MembraneBendingOutside"></a>

### *property* ShellTopPeakStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Membrane"></a>

### *property* ShellTopPeakStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PeakCenter"></a>

### *property* ShellTopPeakStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PeakInside"></a>

### *property* ShellTopPeakStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PeakOutside"></a>

### *property* ShellTopPeakStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SweepingPhase"></a>

### *property* ShellTopPeakStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PhaseIncrement"></a>

### *property* ShellTopPeakStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Frequency"></a>

### *property* ShellTopPeakStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TotalCenter"></a>

### *property* ShellTopPeakStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TotalInside"></a>

### *property* ShellTopPeakStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TotalOutside"></a>

### *property* ShellTopPeakStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Linearized2DBehavior"></a>

### *property* ShellTopPeakStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Subtype"></a>

### *property* ShellTopPeakStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ShellTopPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ScaleFactor"></a>

### *property* ShellTopPeakStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Position"></a>

### *property* ShellTopPeakStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.StressStrainType"></a>

### *property* ShellTopPeakStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SubScopeBy"></a>

### *property* ShellTopPeakStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ThroughThicknessBendingStress"></a>

### *property* ShellTopPeakStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Amplitude"></a>

### *property* ShellTopPeakStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AverageAcrossBodies"></a>

### *property* ShellTopPeakStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PlotData"></a>

### *property* ShellTopPeakStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Location"></a>

### *property* ShellTopPeakStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMinimumOfMinimumValues"></a>

### *property* ShellTopPeakStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMinimumOfMaximumValues"></a>

### *property* ShellTopPeakStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMaximumOfMinimumValues"></a>

### *property* ShellTopPeakStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMaximumOfMaximumValues"></a>

### *property* ShellTopPeakStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.IsSolved"></a>

### *property* ShellTopPeakStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CoordinateSystem"></a>

### *property* ShellTopPeakStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ScopingMethod"></a>

### *property* ShellTopPeakStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SetNumber"></a>

### *property* ShellTopPeakStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CombinationNumber"></a>

### *property* ShellTopPeakStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SolutionCombinationDriver"></a>

### *property* ShellTopPeakStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Path"></a>

### *property* ShellTopPeakStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Surface"></a>

### *property* ShellTopPeakStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.NamedSelections"></a>

### *property* ShellTopPeakStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* ShellTopPeakStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CrackFrontNumber"></a>

### *property* ShellTopPeakStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GlobalIDs"></a>

### *property* ShellTopPeakStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Identifier"></a>

### *property* ShellTopPeakStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.IterationNumber"></a>

### *property* ShellTopPeakStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStep"></a>

### *property* ShellTopPeakStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MaximumOccursOn"></a>

### *property* ShellTopPeakStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MinimumOccursOn"></a>

### *property* ShellTopPeakStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepNumber"></a>

### *property* ShellTopPeakStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SolverComponentIDs"></a>

### *property* ShellTopPeakStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Substep"></a>

### *property* ShellTopPeakStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Average"></a>

### *property* ShellTopPeakStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Maximum"></a>

### *property* ShellTopPeakStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MaximumOfMaximumOverTime"></a>

### *property* ShellTopPeakStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MaximumOfMinimumOverTime"></a>

### *property* ShellTopPeakStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Minimum"></a>

### *property* ShellTopPeakStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MinimumOfMaximumOverTime"></a>

### *property* ShellTopPeakStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MinimumOfMinimumOverTime"></a>

### *property* ShellTopPeakStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Time"></a>

### *property* ShellTopPeakStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DisplayTime"></a>

### *property* ShellTopPeakStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GraphControlsXAxis"></a>

### *property* ShellTopPeakStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DisplayOption"></a>

### *property* ShellTopPeakStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DpfEvaluation"></a>

### *property* ShellTopPeakStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.By"></a>

### *property* ShellTopPeakStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ItemType"></a>

### *property* ShellTopPeakStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CalculateTimeHistory"></a>

### *property* ShellTopPeakStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Suppressed"></a>

### *property* ShellTopPeakStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Children"></a>

### *property* ShellTopPeakStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Comments"></a>

### *property* ShellTopPeakStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Figures"></a>

### *property* ShellTopPeakStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Images"></a>

### *property* ShellTopPeakStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### *property* ShellTopPeakStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Properties"></a>

### *property* ShellTopPeakStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.VisibleProperties"></a>

### *property* ShellTopPeakStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShellTopPeakStress.ClearGeneratedData"></a>

### ShellTopPeakStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.EvaluateAllResults"></a>

### ShellTopPeakStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.FetchRemoteResults"></a>

### ShellTopPeakStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ExportToTextFile"></a>

### ShellTopPeakStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ExportAnimation"></a>

### ShellTopPeakStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DuplicateWithoutResults"></a>

### ShellTopPeakStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CreateResultsAtAllSets"></a>

### ShellTopPeakStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PromoteToNamedSelection"></a>

### ShellTopPeakStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CreateParameter"></a>

### ShellTopPeakStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddAlert"></a>

### ShellTopPeakStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddConvergence"></a>

### ShellTopPeakStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.RenameBasedOnDefinition"></a>

### ShellTopPeakStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Delete"></a>

### ShellTopPeakStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GetChildren"></a>

### ShellTopPeakStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ShellTopPeakStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddComment"></a>

### ShellTopPeakStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddFigure"></a>

### ShellTopPeakStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddImage"></a>

### ShellTopPeakStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Activate"></a>

### ShellTopPeakStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CopyTo"></a>

### ShellTopPeakStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Duplicate"></a>

### ShellTopPeakStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GroupAllSimilarChildren"></a>

### ShellTopPeakStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GroupSimilarObjects"></a>

### ShellTopPeakStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PropertyByName"></a>

### ShellTopPeakStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PropertyByAPIName"></a>

### ShellTopPeakStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GetParameter"></a>

### ShellTopPeakStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.RemoveParameter"></a>

### ShellTopPeakStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
