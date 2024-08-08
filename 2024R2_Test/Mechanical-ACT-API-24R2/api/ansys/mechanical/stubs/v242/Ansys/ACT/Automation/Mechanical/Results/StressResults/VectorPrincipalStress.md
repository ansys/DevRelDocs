# `VectorPrincipalStress`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressResults.VectorPrincipalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a VectorPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#VectorPrincipalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#VectorPrincipalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#VectorPrincipalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#VectorPrincipalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#VectorPrincipalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#VectorPrincipalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#VectorPrincipalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#VectorPrincipalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#VectorPrincipalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#VectorPrincipalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#VectorPrincipalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#VectorPrincipalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#VectorPrincipalStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VectorPrincipalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VectorPrincipalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorPrincipalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VectorPrincipalStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VectorPrincipalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VectorPrincipalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VectorPrincipalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorPrincipalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VectorPrincipalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VectorPrincipalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#VectorPrincipalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VectorPrincipalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                        | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#VectorPrincipalStress.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](#VectorPrincipalStress.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`Ply`](#VectorPrincipalStress.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Plies`](#VectorPrincipalStress.Plies)                                                         | Plies property.                                                        |
| [`EnvironmentSelection`](#VectorPrincipalStress.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`HarmonicIndex`](#VectorPrincipalStress.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#VectorPrincipalStress.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#VectorPrincipalStress.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`Layer`](#VectorPrincipalStress.Layer)                                                         | Gets or sets the Layer.                                                |
| [`LoadMultiplier`](#VectorPrincipalStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](#VectorPrincipalStress.Probability)                                             | Gets the Probability.                                                  |
| [`ReportedFrequency`](#VectorPrincipalStress.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`AverageRadiusOfCurvature`](#VectorPrincipalStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#VectorPrincipalStress.BendingInside)                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](#VectorPrincipalStress.BendingOutside)                                       | Gets the BendingOutside.                                               |
| [`MembraneBendingCenter`](#VectorPrincipalStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#VectorPrincipalStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#VectorPrincipalStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                       |
| [`Membrane`](#VectorPrincipalStress.Membrane)                                                   | Gets the Membrane.                                                     |
| [`PeakCenter`](#VectorPrincipalStress.PeakCenter)                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](#VectorPrincipalStress.PeakInside)                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](#VectorPrincipalStress.PeakOutside)                                             | Gets the PeakOutside.                                                  |
| [`SweepingPhase`](#VectorPrincipalStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#VectorPrincipalStress.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#VectorPrincipalStress.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`TotalCenter`](#VectorPrincipalStress.TotalCenter)                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](#VectorPrincipalStress.TotalInside)                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](#VectorPrincipalStress.TotalOutside)                                           | Gets the TotalOutside.                                                 |
| [`Linearized2DBehavior`](#VectorPrincipalStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                 |
| [`Subtype`](#VectorPrincipalStress.Subtype)                                                     | Gets or sets the Subtype.                                              |
| [`NormalOrientation`](#VectorPrincipalStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`ScaleFactor`](#VectorPrincipalStress.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`Position`](#VectorPrincipalStress.Position)                                                   | Gets or sets the Position.                                             |
| [`StressStrainType`](#VectorPrincipalStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#VectorPrincipalStress.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`ThroughThicknessBendingStress`](#VectorPrincipalStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Amplitude`](#VectorPrincipalStress.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#VectorPrincipalStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#VectorPrincipalStress.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#VectorPrincipalStress.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#VectorPrincipalStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VectorPrincipalStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#VectorPrincipalStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VectorPrincipalStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#VectorPrincipalStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#VectorPrincipalStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#VectorPrincipalStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#VectorPrincipalStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#VectorPrincipalStress.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#VectorPrincipalStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#VectorPrincipalStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VectorPrincipalStress.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#VectorPrincipalStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#VectorPrincipalStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#VectorPrincipalStress.Path)                                                           | Path property.                                                         |
| [`Surface`](#VectorPrincipalStress.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#VectorPrincipalStress.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#VectorPrincipalStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#VectorPrincipalStress.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#VectorPrincipalStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#VectorPrincipalStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#VectorPrincipalStress.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#VectorPrincipalStress.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#VectorPrincipalStress.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#VectorPrincipalStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#VectorPrincipalStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#VectorPrincipalStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#VectorPrincipalStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VectorPrincipalStress.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#VectorPrincipalStress.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#VectorPrincipalStress.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#VectorPrincipalStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VectorPrincipalStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VectorPrincipalStress.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#VectorPrincipalStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VectorPrincipalStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#VectorPrincipalStress.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#VectorPrincipalStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#VectorPrincipalStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#VectorPrincipalStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#VectorPrincipalStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#VectorPrincipalStress.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#VectorPrincipalStress.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#VectorPrincipalStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#VectorPrincipalStress.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#VectorPrincipalStress.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#VectorPrincipalStress.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#VectorPrincipalStress.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#VectorPrincipalStress.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                        | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#VectorPrincipalStress.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#VectorPrincipalStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="VectorPrincipalStress.InternalObject"></a>

### *property* VectorPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.DataModelObjectCategory"></a>

### *property* VectorPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Mode"></a>

### *property* VectorPrincipalStress.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Ply"></a>

### *property* VectorPrincipalStress.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Plies"></a>

### *property* VectorPrincipalStress.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.EnvironmentSelection"></a>

### *property* VectorPrincipalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.HarmonicIndex"></a>

### *property* VectorPrincipalStress.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CyclicMode"></a>

### *property* VectorPrincipalStress.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.IterationStep"></a>

### *property* VectorPrincipalStress.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Layer"></a>

### *property* VectorPrincipalStress.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadMultiplier"></a>

### *property* VectorPrincipalStress.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Probability"></a>

### *property* VectorPrincipalStress.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ReportedFrequency"></a>

### *property* VectorPrincipalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AverageRadiusOfCurvature"></a>

### *property* VectorPrincipalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.BendingInside"></a>

### *property* VectorPrincipalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.BendingOutside"></a>

### *property* VectorPrincipalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MembraneBendingCenter"></a>

### *property* VectorPrincipalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MembraneBendingInside"></a>

### *property* VectorPrincipalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MembraneBendingOutside"></a>

### *property* VectorPrincipalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Membrane"></a>

### *property* VectorPrincipalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PeakCenter"></a>

### *property* VectorPrincipalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PeakInside"></a>

### *property* VectorPrincipalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PeakOutside"></a>

### *property* VectorPrincipalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.SweepingPhase"></a>

### *property* VectorPrincipalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PhaseIncrement"></a>

### *property* VectorPrincipalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Frequency"></a>

### *property* VectorPrincipalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TotalCenter"></a>

### *property* VectorPrincipalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TotalInside"></a>

### *property* VectorPrincipalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TotalOutside"></a>

### *property* VectorPrincipalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Linearized2DBehavior"></a>

### *property* VectorPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Subtype"></a>

### *property* VectorPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.NormalOrientation"></a>

### *property* VectorPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ScaleFactor"></a>

### *property* VectorPrincipalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Position"></a>

### *property* VectorPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.StressStrainType"></a>

### *property* VectorPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.SubScopeBy"></a>

### *property* VectorPrincipalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ThroughThicknessBendingStress"></a>

### *property* VectorPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Amplitude"></a>

### *property* VectorPrincipalStress.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AverageAcrossBodies"></a>

### *property* VectorPrincipalStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PlotData"></a>

### *property* VectorPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Location"></a>

### *property* VectorPrincipalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* VectorPrincipalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* VectorPrincipalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorPrincipalStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorPrincipalStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* VectorPrincipalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* VectorPrincipalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorPrincipalStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorPrincipalStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.IsSolved"></a>

### *property* VectorPrincipalStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CoordinateSystem"></a>

### *property* VectorPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ScopingMethod"></a>

### *property* VectorPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.SetNumber"></a>

### *property* VectorPrincipalStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CombinationNumber"></a>

### *property* VectorPrincipalStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.SolutionCombinationDriver"></a>

### *property* VectorPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Path"></a>

### *property* VectorPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Surface"></a>

### *property* VectorPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.SurfaceCoating"></a>

### *property* VectorPrincipalStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.NamedSelections"></a>

### *property* VectorPrincipalStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.WaterfallShowTextOnMosaic"></a>

### *property* VectorPrincipalStress.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CrackFrontNumber"></a>

### *property* VectorPrincipalStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.GlobalIDs"></a>

### *property* VectorPrincipalStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Identifier"></a>

### *property* VectorPrincipalStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.IterationNumber"></a>

### *property* VectorPrincipalStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadStep"></a>

### *property* VectorPrincipalStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MaximumOccursOn"></a>

### *property* VectorPrincipalStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MinimumOccursOn"></a>

### *property* VectorPrincipalStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.LoadStepNumber"></a>

### *property* VectorPrincipalStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.SolverComponentIDs"></a>

### *property* VectorPrincipalStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Substep"></a>

### *property* VectorPrincipalStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Average"></a>

### *property* VectorPrincipalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Maximum"></a>

### *property* VectorPrincipalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* VectorPrincipalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* VectorPrincipalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Minimum"></a>

### *property* VectorPrincipalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* VectorPrincipalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* VectorPrincipalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Time"></a>

### *property* VectorPrincipalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.DisplayTime"></a>

### *property* VectorPrincipalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.GraphControlsXAxis"></a>

### *property* VectorPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.DisplayOption"></a>

### *property* VectorPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.DpfEvaluation"></a>

### *property* VectorPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.By"></a>

### *property* VectorPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ItemType"></a>

### *property* VectorPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CalculateTimeHistory"></a>

### *property* VectorPrincipalStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Suppressed"></a>

### *property* VectorPrincipalStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Children"></a>

### *property* VectorPrincipalStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Comments"></a>

### *property* VectorPrincipalStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Figures"></a>

### *property* VectorPrincipalStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Images"></a>

### *property* VectorPrincipalStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* VectorPrincipalStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Properties"></a>

### *property* VectorPrincipalStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.VisibleProperties"></a>

### *property* VectorPrincipalStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorPrincipalStress.ClearGeneratedData"></a>

### VectorPrincipalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.EvaluateAllResults"></a>

### VectorPrincipalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.FetchRemoteResults"></a>

### VectorPrincipalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ExportToTextFile"></a>

### VectorPrincipalStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.ExportAnimation"></a>

### VectorPrincipalStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.DuplicateWithoutResults"></a>

### VectorPrincipalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CreateResultsAtAllSets"></a>

### VectorPrincipalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PromoteToNamedSelection"></a>

### VectorPrincipalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CreateParameter"></a>

### VectorPrincipalStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AddAlert"></a>

### VectorPrincipalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AddConvergence"></a>

### VectorPrincipalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.RenameBasedOnDefinition"></a>

### VectorPrincipalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Delete"></a>

### VectorPrincipalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.GetChildren"></a>

### VectorPrincipalStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### VectorPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AddComment"></a>

### VectorPrincipalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AddFigure"></a>

### VectorPrincipalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.AddImage"></a>

### VectorPrincipalStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Activate"></a>

### VectorPrincipalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.CopyTo"></a>

### VectorPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.Duplicate"></a>

### VectorPrincipalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.GroupAllSimilarChildren"></a>

### VectorPrincipalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.GroupSimilarObjects"></a>

### VectorPrincipalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PropertyByName"></a>

### VectorPrincipalStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.PropertyByAPIName"></a>

### VectorPrincipalStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.GetParameter"></a>

### VectorPrincipalStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorPrincipalStress.RemoveParameter"></a>

### VectorPrincipalStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

