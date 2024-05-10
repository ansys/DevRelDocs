<a id="shellbottompeakstress"></a>

# ShellBottomPeakStress

<a id="ShellBottomPeakStress"></a>

### *class* ShellBottomPeakStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShellBottomPeakStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressResults import ShellBottomPeakStress
```

<a id="property-detail"></a>

## Property detail

<a id="ShellBottomPeakStress.NormalOrientation"></a>

### *property* ShellBottomPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType](../../../../../Mechanical/DataModel/Enums/ShellMBPOrientationType.md#ShellMBPOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.InternalObject"></a>

### *property* ShellBottomPeakStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ShellMBPType"></a>

### *property* ShellBottomPeakStress.ShellMBPType *: [Ansys.Mechanical.DataModel.Enums.ShellMBPType](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ShellMBPType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellMBPType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DataModelObjectCategory"></a>

### *property* ShellBottomPeakStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Mode"></a>

### *property* ShellBottomPeakStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Ply"></a>

### *property* ShellBottomPeakStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Plies"></a>

### *property* ShellBottomPeakStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.EnvironmentSelection"></a>

### *property* ShellBottomPeakStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.HarmonicIndex"></a>

### *property* ShellBottomPeakStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CyclicMode"></a>

### *property* ShellBottomPeakStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IterationStep"></a>

### *property* ShellBottomPeakStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Layer"></a>

### *property* ShellBottomPeakStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadMultiplier"></a>

### *property* ShellBottomPeakStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Probability"></a>

### *property* ShellBottomPeakStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ReportedFrequency"></a>

### *property* ShellBottomPeakStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AverageRadiusOfCurvature"></a>

### *property* ShellBottomPeakStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.BendingInside"></a>

### *property* ShellBottomPeakStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.BendingOutside"></a>

### *property* ShellBottomPeakStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MembraneBendingCenter"></a>

### *property* ShellBottomPeakStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MembraneBendingInside"></a>

### *property* ShellBottomPeakStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MembraneBendingOutside"></a>

### *property* ShellBottomPeakStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Membrane"></a>

### *property* ShellBottomPeakStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PeakCenter"></a>

### *property* ShellBottomPeakStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PeakInside"></a>

### *property* ShellBottomPeakStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PeakOutside"></a>

### *property* ShellBottomPeakStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SweepingPhase"></a>

### *property* ShellBottomPeakStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PhaseIncrement"></a>

### *property* ShellBottomPeakStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Frequency"></a>

### *property* ShellBottomPeakStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TotalCenter"></a>

### *property* ShellBottomPeakStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TotalInside"></a>

### *property* ShellBottomPeakStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TotalOutside"></a>

### *property* ShellBottomPeakStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Linearized2DBehavior"></a>

### *property* ShellBottomPeakStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Subtype"></a>

### *property* ShellBottomPeakStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ShellBottomPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ScaleFactor"></a>

### *property* ShellBottomPeakStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Position"></a>

### *property* ShellBottomPeakStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.StressStrainType"></a>

### *property* ShellBottomPeakStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SubScopeBy"></a>

### *property* ShellBottomPeakStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ThroughThicknessBendingStress"></a>

### *property* ShellBottomPeakStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Amplitude"></a>

### *property* ShellBottomPeakStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AverageAcrossBodies"></a>

### *property* ShellBottomPeakStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PlotData"></a>

### *property* ShellBottomPeakStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Location"></a>

### *property* ShellBottomPeakStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMinimumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMinimumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMaximumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMaximumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IsSolved"></a>

### *property* ShellBottomPeakStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CoordinateSystem"></a>

### *property* ShellBottomPeakStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ScopingMethod"></a>

### *property* ShellBottomPeakStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SetNumber"></a>

### *property* ShellBottomPeakStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CombinationNumber"></a>

### *property* ShellBottomPeakStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SolutionCombinationDriver"></a>

### *property* ShellBottomPeakStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Path"></a>

### *property* ShellBottomPeakStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Surface"></a>

### *property* ShellBottomPeakStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.NamedSelections"></a>

### *property* ShellBottomPeakStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* ShellBottomPeakStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CrackFrontNumber"></a>

### *property* ShellBottomPeakStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GlobalIDs"></a>

### *property* ShellBottomPeakStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Identifier"></a>

### *property* ShellBottomPeakStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IterationNumber"></a>

### *property* ShellBottomPeakStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStep"></a>

### *property* ShellBottomPeakStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOccursOn"></a>

### *property* ShellBottomPeakStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOccursOn"></a>

### *property* ShellBottomPeakStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepNumber"></a>

### *property* ShellBottomPeakStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SolverComponentIDs"></a>

### *property* ShellBottomPeakStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Substep"></a>

### *property* ShellBottomPeakStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Average"></a>

### *property* ShellBottomPeakStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Maximum"></a>

### *property* ShellBottomPeakStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOfMaximumOverTime"></a>

### *property* ShellBottomPeakStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOfMinimumOverTime"></a>

### *property* ShellBottomPeakStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Minimum"></a>

### *property* ShellBottomPeakStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOfMaximumOverTime"></a>

### *property* ShellBottomPeakStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOfMinimumOverTime"></a>

### *property* ShellBottomPeakStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Time"></a>

### *property* ShellBottomPeakStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DisplayTime"></a>

### *property* ShellBottomPeakStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GraphControlsXAxis"></a>

### *property* ShellBottomPeakStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DisplayOption"></a>

### *property* ShellBottomPeakStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DpfEvaluation"></a>

### *property* ShellBottomPeakStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.By"></a>

### *property* ShellBottomPeakStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ItemType"></a>

### *property* ShellBottomPeakStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CalculateTimeHistory"></a>

### *property* ShellBottomPeakStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Suppressed"></a>

### *property* ShellBottomPeakStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Children"></a>

### *property* ShellBottomPeakStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Comments"></a>

### *property* ShellBottomPeakStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Figures"></a>

### *property* ShellBottomPeakStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Images"></a>

### *property* ShellBottomPeakStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### *property* ShellBottomPeakStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Properties"></a>

### *property* ShellBottomPeakStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.VisibleProperties"></a>

### *property* ShellBottomPeakStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShellBottomPeakStress.ClearGeneratedData"></a>

### ShellBottomPeakStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.EvaluateAllResults"></a>

### ShellBottomPeakStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.FetchRemoteResults"></a>

### ShellBottomPeakStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportToTextFile"></a>

### ShellBottomPeakStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportAnimation"></a>

### ShellBottomPeakStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DuplicateWithoutResults"></a>

### ShellBottomPeakStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateResultsAtAllSets"></a>

### ShellBottomPeakStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PromoteToNamedSelection"></a>

### ShellBottomPeakStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateParameter"></a>

### ShellBottomPeakStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddAlert"></a>

### ShellBottomPeakStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddConvergence"></a>

### ShellBottomPeakStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RenameBasedOnDefinition"></a>

### ShellBottomPeakStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Delete"></a>

### ShellBottomPeakStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetChildren"></a>

### ShellBottomPeakStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### ShellBottomPeakStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddComment"></a>

### ShellBottomPeakStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddFigure"></a>

### ShellBottomPeakStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddImage"></a>

### ShellBottomPeakStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Activate"></a>

### ShellBottomPeakStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CopyTo"></a>

### ShellBottomPeakStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Duplicate"></a>

### ShellBottomPeakStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupAllSimilarChildren"></a>

### ShellBottomPeakStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupSimilarObjects"></a>

### ShellBottomPeakStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyByName"></a>

### ShellBottomPeakStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyByAPIName"></a>

### ShellBottomPeakStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetParameter"></a>

### ShellBottomPeakStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RemoveParameter"></a>

### ShellBottomPeakStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
