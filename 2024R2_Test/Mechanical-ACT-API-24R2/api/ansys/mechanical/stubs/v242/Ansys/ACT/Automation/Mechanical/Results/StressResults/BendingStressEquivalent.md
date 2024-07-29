# `BendingStressEquivalent`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressEquivalent

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BendingStressEquivalent.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BendingStressEquivalent.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#BendingStressEquivalent.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#BendingStressEquivalent.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#BendingStressEquivalent.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#BendingStressEquivalent.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#BendingStressEquivalent.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#BendingStressEquivalent.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#BendingStressEquivalent.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#BendingStressEquivalent.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#BendingStressEquivalent.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#BendingStressEquivalent.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#BendingStressEquivalent.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BendingStressEquivalent.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BendingStressEquivalent.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BendingStressEquivalent.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BendingStressEquivalent.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BendingStressEquivalent.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BendingStressEquivalent.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BendingStressEquivalent.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BendingStressEquivalent.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BendingStressEquivalent.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BendingStressEquivalent.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BendingStressEquivalent.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#BendingStressEquivalent.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BendingStressEquivalent.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#BendingStressEquivalent.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Mode`](#BendingStressEquivalent.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#BendingStressEquivalent.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#BendingStressEquivalent.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](#BendingStressEquivalent.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#BendingStressEquivalent.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#BendingStressEquivalent.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#BendingStressEquivalent.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`Layer`](#BendingStressEquivalent.Layer)                                                         | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#BendingStressEquivalent.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](#BendingStressEquivalent.Probability)                                             | Gets the Probability.                                                  |
| [`ReportedFrequency`](#BendingStressEquivalent.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#BendingStressEquivalent.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#BendingStressEquivalent.BendingInside)                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](#BendingStressEquivalent.BendingOutside)                                       | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#BendingStressEquivalent.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#BendingStressEquivalent.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#BendingStressEquivalent.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#BendingStressEquivalent.Membrane)                                                   | Gets the Membrane.                                                     |
| [`PeakCenter`](#BendingStressEquivalent.PeakCenter)                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](#BendingStressEquivalent.PeakInside)                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](#BendingStressEquivalent.PeakOutside)                                             | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#BendingStressEquivalent.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#BendingStressEquivalent.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#BendingStressEquivalent.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#BendingStressEquivalent.TotalCenter)                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](#BendingStressEquivalent.TotalInside)                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](#BendingStressEquivalent.TotalOutside)                                           | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](#BendingStressEquivalent.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#BendingStressEquivalent.Subtype)                                                     | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#BendingStressEquivalent.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#BendingStressEquivalent.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](#BendingStressEquivalent.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](#BendingStressEquivalent.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#BendingStressEquivalent.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](#BendingStressEquivalent.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#BendingStressEquivalent.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#BendingStressEquivalent.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#BendingStressEquivalent.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#BendingStressEquivalent.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#BendingStressEquivalent.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#BendingStressEquivalent.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#BendingStressEquivalent.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#BendingStressEquivalent.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#BendingStressEquivalent.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#BendingStressEquivalent.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#BendingStressEquivalent.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#BendingStressEquivalent.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#BendingStressEquivalent.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#BendingStressEquivalent.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#BendingStressEquivalent.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#BendingStressEquivalent.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#BendingStressEquivalent.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#BendingStressEquivalent.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#BendingStressEquivalent.Path)                                                           | Path property.                                                         |
| [`Surface`](#BendingStressEquivalent.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#BendingStressEquivalent.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#BendingStressEquivalent.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#BendingStressEquivalent.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#BendingStressEquivalent.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#BendingStressEquivalent.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#BendingStressEquivalent.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#BendingStressEquivalent.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#BendingStressEquivalent.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#BendingStressEquivalent.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#BendingStressEquivalent.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#BendingStressEquivalent.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#BendingStressEquivalent.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#BendingStressEquivalent.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#BendingStressEquivalent.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#BendingStressEquivalent.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#BendingStressEquivalent.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#BendingStressEquivalent.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#BendingStressEquivalent.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#BendingStressEquivalent.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#BendingStressEquivalent.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#BendingStressEquivalent.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#BendingStressEquivalent.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#BendingStressEquivalent.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#BendingStressEquivalent.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#BendingStressEquivalent.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#BendingStressEquivalent.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#BendingStressEquivalent.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#BendingStressEquivalent.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#BendingStressEquivalent.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#BendingStressEquivalent.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#BendingStressEquivalent.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#BendingStressEquivalent.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#BendingStressEquivalent.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#BendingStressEquivalent.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#BendingStressEquivalent.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="BendingStressEquivalent.InternalObject"></a>

### *property* BendingStressEquivalent.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DataModelObjectCategory"></a>

### *property* BendingStressEquivalent.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Mode"></a>

### *property* BendingStressEquivalent.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Ply"></a>

### *property* BendingStressEquivalent.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Plies"></a>

### *property* BendingStressEquivalent.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.EnvironmentSelection"></a>

### *property* BendingStressEquivalent.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.HarmonicIndex"></a>

### *property* BendingStressEquivalent.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CyclicMode"></a>

### *property* BendingStressEquivalent.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.IterationStep"></a>

### *property* BendingStressEquivalent.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Layer"></a>

### *property* BendingStressEquivalent.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadMultiplier"></a>

### *property* BendingStressEquivalent.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Probability"></a>

### *property* BendingStressEquivalent.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ReportedFrequency"></a>

### *property* BendingStressEquivalent.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AverageRadiusOfCurvature"></a>

### *property* BendingStressEquivalent.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.BendingInside"></a>

### *property* BendingStressEquivalent.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.BendingOutside"></a>

### *property* BendingStressEquivalent.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MembraneBendingCenter"></a>

### *property* BendingStressEquivalent.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MembraneBendingInside"></a>

### *property* BendingStressEquivalent.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MembraneBendingOutside"></a>

### *property* BendingStressEquivalent.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Membrane"></a>

### *property* BendingStressEquivalent.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PeakCenter"></a>

### *property* BendingStressEquivalent.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PeakInside"></a>

### *property* BendingStressEquivalent.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PeakOutside"></a>

### *property* BendingStressEquivalent.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SweepingPhase"></a>

### *property* BendingStressEquivalent.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PhaseIncrement"></a>

### *property* BendingStressEquivalent.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Frequency"></a>

### *property* BendingStressEquivalent.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TotalCenter"></a>

### *property* BendingStressEquivalent.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TotalInside"></a>

### *property* BendingStressEquivalent.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TotalOutside"></a>

### *property* BendingStressEquivalent.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Linearized2DBehavior"></a>

### *property* BendingStressEquivalent.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Subtype"></a>

### *property* BendingStressEquivalent.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.NormalOrientation"></a>

### *property* BendingStressEquivalent.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ScaleFactor"></a>

### *property* BendingStressEquivalent.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Position"></a>

### *property* BendingStressEquivalent.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.StressStrainType"></a>

### *property* BendingStressEquivalent.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SubScopeBy"></a>

### *property* BendingStressEquivalent.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ThroughThicknessBendingStress"></a>

### *property* BendingStressEquivalent.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Amplitude"></a>

### *property* BendingStressEquivalent.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AverageAcrossBodies"></a>

### *property* BendingStressEquivalent.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PlotData"></a>

### *property* BendingStressEquivalent.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Location"></a>

### *property* BendingStressEquivalent.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMinimumOfMinimumValues"></a>

### *property* BendingStressEquivalent.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMinimumOfMaximumValues"></a>

### *property* BendingStressEquivalent.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMinimumOfMinimumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMinimumOfMaximumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMaximumOfMinimumValues"></a>

### *property* BendingStressEquivalent.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMaximumOfMaximumValues"></a>

### *property* BendingStressEquivalent.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMaximumOfMinimumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMaximumOfMaximumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.IsSolved"></a>

### *property* BendingStressEquivalent.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CoordinateSystem"></a>

### *property* BendingStressEquivalent.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ScopingMethod"></a>

### *property* BendingStressEquivalent.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SetNumber"></a>

### *property* BendingStressEquivalent.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CombinationNumber"></a>

### *property* BendingStressEquivalent.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SolutionCombinationDriver"></a>

### *property* BendingStressEquivalent.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Path"></a>

### *property* BendingStressEquivalent.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Surface"></a>

### *property* BendingStressEquivalent.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SurfaceCoating"></a>

### *property* BendingStressEquivalent.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.NamedSelections"></a>

### *property* BendingStressEquivalent.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.WaterfallShowTextOnMosaic"></a>

### *property* BendingStressEquivalent.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CrackFrontNumber"></a>

### *property* BendingStressEquivalent.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GlobalIDs"></a>

### *property* BendingStressEquivalent.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Identifier"></a>

### *property* BendingStressEquivalent.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.IterationNumber"></a>

### *property* BendingStressEquivalent.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStep"></a>

### *property* BendingStressEquivalent.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MaximumOccursOn"></a>

### *property* BendingStressEquivalent.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MinimumOccursOn"></a>

### *property* BendingStressEquivalent.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepNumber"></a>

### *property* BendingStressEquivalent.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SolverComponentIDs"></a>

### *property* BendingStressEquivalent.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Substep"></a>

### *property* BendingStressEquivalent.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Average"></a>

### *property* BendingStressEquivalent.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Maximum"></a>

### *property* BendingStressEquivalent.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MaximumOfMaximumOverTime"></a>

### *property* BendingStressEquivalent.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MaximumOfMinimumOverTime"></a>

### *property* BendingStressEquivalent.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Minimum"></a>

### *property* BendingStressEquivalent.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MinimumOfMaximumOverTime"></a>

### *property* BendingStressEquivalent.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MinimumOfMinimumOverTime"></a>

### *property* BendingStressEquivalent.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Time"></a>

### *property* BendingStressEquivalent.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DisplayTime"></a>

### *property* BendingStressEquivalent.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GraphControlsXAxis"></a>

### *property* BendingStressEquivalent.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DisplayOption"></a>

### *property* BendingStressEquivalent.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DpfEvaluation"></a>

### *property* BendingStressEquivalent.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.By"></a>

### *property* BendingStressEquivalent.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ItemType"></a>

### *property* BendingStressEquivalent.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CalculateTimeHistory"></a>

### *property* BendingStressEquivalent.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Suppressed"></a>

### *property* BendingStressEquivalent.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Children"></a>

### *property* BendingStressEquivalent.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Comments"></a>

### *property* BendingStressEquivalent.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Figures"></a>

### *property* BendingStressEquivalent.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Images"></a>

### *property* BendingStressEquivalent.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BendingStressEquivalent.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Properties"></a>

### *property* BendingStressEquivalent.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.VisibleProperties"></a>

### *property* BendingStressEquivalent.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BendingStressEquivalent.ClearGeneratedData"></a>

### BendingStressEquivalent.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.EvaluateAllResults"></a>

### BendingStressEquivalent.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.FetchRemoteResults"></a>

### BendingStressEquivalent.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ExportToTextFile"></a>

### BendingStressEquivalent.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ExportAnimation"></a>

### BendingStressEquivalent.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DuplicateWithoutResults"></a>

### BendingStressEquivalent.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CreateResultsAtAllSets"></a>

### BendingStressEquivalent.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PromoteToNamedSelection"></a>

### BendingStressEquivalent.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CreateParameter"></a>

### BendingStressEquivalent.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddAlert"></a>

### BendingStressEquivalent.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddConvergence"></a>

### BendingStressEquivalent.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.RenameBasedOnDefinition"></a>

### BendingStressEquivalent.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Delete"></a>

### BendingStressEquivalent.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GetChildren"></a>

### BendingStressEquivalent.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BendingStressEquivalent.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddComment"></a>

### BendingStressEquivalent.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddFigure"></a>

### BendingStressEquivalent.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddImage"></a>

### BendingStressEquivalent.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Activate"></a>

### BendingStressEquivalent.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CopyTo"></a>

### BendingStressEquivalent.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Duplicate"></a>

### BendingStressEquivalent.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GroupAllSimilarChildren"></a>

### BendingStressEquivalent.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GroupSimilarObjects"></a>

### BendingStressEquivalent.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PropertyByName"></a>

### BendingStressEquivalent.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PropertyByAPIName"></a>

### BendingStressEquivalent.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GetParameter"></a>

### BendingStressEquivalent.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.RemoveParameter"></a>

### BendingStressEquivalent.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

