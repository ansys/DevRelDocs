# `MembraneStressEquivalent`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressEquivalent"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressEquivalent

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MembraneStressEquivalent.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MembraneStressEquivalent.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MembraneStressEquivalent.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MembraneStressEquivalent.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MembraneStressEquivalent.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MembraneStressEquivalent.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MembraneStressEquivalent.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MembraneStressEquivalent.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MembraneStressEquivalent.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MembraneStressEquivalent.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MembraneStressEquivalent.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MembraneStressEquivalent.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MembraneStressEquivalent.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MembraneStressEquivalent.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MembraneStressEquivalent.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MembraneStressEquivalent.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MembraneStressEquivalent.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MembraneStressEquivalent.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MembraneStressEquivalent.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MembraneStressEquivalent.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MembraneStressEquivalent.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MembraneStressEquivalent.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MembraneStressEquivalent.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MembraneStressEquivalent.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MembraneStressEquivalent.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MembraneStressEquivalent.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MembraneStressEquivalent.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#MembraneStressEquivalent.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#MembraneStressEquivalent.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#MembraneStressEquivalent.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`AverageRadiusOfCurvature`](#MembraneStressEquivalent.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#MembraneStressEquivalent.BendingInside)                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](#MembraneStressEquivalent.BendingOutside)                                       | Gets the BendingOutside.                                               |
| [`By`](#MembraneStressEquivalent.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#MembraneStressEquivalent.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#MembraneStressEquivalent.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#MembraneStressEquivalent.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#MembraneStressEquivalent.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#MembraneStressEquivalent.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#MembraneStressEquivalent.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#MembraneStressEquivalent.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#MembraneStressEquivalent.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#MembraneStressEquivalent.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#MembraneStressEquivalent.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#MembraneStressEquivalent.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#MembraneStressEquivalent.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#MembraneStressEquivalent.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#MembraneStressEquivalent.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#MembraneStressEquivalent.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#MembraneStressEquivalent.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#MembraneStressEquivalent.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#MembraneStressEquivalent.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#MembraneStressEquivalent.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#MembraneStressEquivalent.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#MembraneStressEquivalent.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#MembraneStressEquivalent.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#MembraneStressEquivalent.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#MembraneStressEquivalent.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`Layer`](#MembraneStressEquivalent.Layer)                                                         | Gets or sets the Layer.                                                |
| [`Linearized2DBehavior`](#MembraneStressEquivalent.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                 |
| [`LoadMultiplier`](#MembraneStressEquivalent.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#MembraneStressEquivalent.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#MembraneStressEquivalent.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#MembraneStressEquivalent.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MembraneStressEquivalent.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#MembraneStressEquivalent.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#MembraneStressEquivalent.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#MembraneStressEquivalent.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#MembraneStressEquivalent.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#MembraneStressEquivalent.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#MembraneStressEquivalent.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MembraneStressEquivalent.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Membrane`](#MembraneStressEquivalent.Membrane)                                                   | Gets the Membrane.                                                     |
| [`MembraneBendingCenter`](#MembraneStressEquivalent.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#MembraneStressEquivalent.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#MembraneStressEquivalent.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                       |
| [`Minimum`](#MembraneStressEquivalent.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#MembraneStressEquivalent.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#MembraneStressEquivalent.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MembraneStressEquivalent.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#MembraneStressEquivalent.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#MembraneStressEquivalent.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`NormalOrientation`](#MembraneStressEquivalent.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Path`](#MembraneStressEquivalent.Path)                                                           | Path property.                                                         |
| [`PeakCenter`](#MembraneStressEquivalent.PeakCenter)                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](#MembraneStressEquivalent.PeakInside)                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](#MembraneStressEquivalent.PeakOutside)                                             | Gets the PeakOutside.                                                  |
| [`PhaseIncrement`](#MembraneStressEquivalent.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#MembraneStressEquivalent.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#MembraneStressEquivalent.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#MembraneStressEquivalent.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#MembraneStressEquivalent.Position)                                                   | Gets or sets the Position.                                             |
| [`Probability`](#MembraneStressEquivalent.Probability)                                             | Gets the Probability.                                                  |
| [`Properties`](#MembraneStressEquivalent.Properties)                                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#MembraneStressEquivalent.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScaleFactor`](#MembraneStressEquivalent.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`ScopingMethod`](#MembraneStressEquivalent.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MembraneStressEquivalent.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#MembraneStressEquivalent.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#MembraneStressEquivalent.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`StressStrainType`](#MembraneStressEquivalent.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#MembraneStressEquivalent.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#MembraneStressEquivalent.Substep)                                                     | Gets the Substep.                                                      |
| [`Subtype`](#MembraneStressEquivalent.Subtype)                                                     | Gets or sets the Subtype.                                              |
| [`Suppressed`](#MembraneStressEquivalent.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#MembraneStressEquivalent.Surface)                                                     | Surface property.                                                      |
| [`SweepingPhase`](#MembraneStressEquivalent.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`ThroughThicknessBendingStress`](#MembraneStressEquivalent.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Time`](#MembraneStressEquivalent.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#MembraneStressEquivalent.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#MembraneStressEquivalent.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MembraneStressEquivalent.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#MembraneStressEquivalent.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TotalCenter`](#MembraneStressEquivalent.TotalCenter)                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](#MembraneStressEquivalent.TotalInside)                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](#MembraneStressEquivalent.TotalOutside)                                           | Gets the TotalOutside.                                                 |
| [`VisibleProperties`](#MembraneStressEquivalent.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallPanelShowTextOnMosaic`](#MembraneStressEquivalent.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |

<a id="property-detail"></a>

## Property detail

<a id="MembraneStressEquivalent.Amplitude"></a>

### *property* MembraneStressEquivalent.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Average"></a>

### *property* MembraneStressEquivalent.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AverageAcrossBodies"></a>

### *property* MembraneStressEquivalent.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AverageRadiusOfCurvature"></a>

### *property* MembraneStressEquivalent.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.BendingInside"></a>

### *property* MembraneStressEquivalent.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.BendingOutside"></a>

### *property* MembraneStressEquivalent.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.By"></a>

### *property* MembraneStressEquivalent.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CalculateTimeHistory"></a>

### *property* MembraneStressEquivalent.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Children"></a>

### *property* MembraneStressEquivalent.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CombinationNumber"></a>

### *property* MembraneStressEquivalent.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Comments"></a>

### *property* MembraneStressEquivalent.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CoordinateSystem"></a>

### *property* MembraneStressEquivalent.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CrackFrontNumber"></a>

### *property* MembraneStressEquivalent.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CyclicMode"></a>

### *property* MembraneStressEquivalent.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DataModelObjectCategory"></a>

### *property* MembraneStressEquivalent.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DisplayOption"></a>

### *property* MembraneStressEquivalent.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DisplayTime"></a>

### *property* MembraneStressEquivalent.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DpfEvaluation"></a>

### *property* MembraneStressEquivalent.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.EnvironmentSelection"></a>

### *property* MembraneStressEquivalent.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Figures"></a>

### *property* MembraneStressEquivalent.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Frequency"></a>

### *property* MembraneStressEquivalent.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GlobalIDs"></a>

### *property* MembraneStressEquivalent.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GraphControlsXAxis"></a>

### *property* MembraneStressEquivalent.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.HarmonicIndex"></a>

### *property* MembraneStressEquivalent.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Identifier"></a>

### *property* MembraneStressEquivalent.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Images"></a>

### *property* MembraneStressEquivalent.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.InternalObject"></a>

### *property* MembraneStressEquivalent.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.IsSolved"></a>

### *property* MembraneStressEquivalent.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ItemType"></a>

### *property* MembraneStressEquivalent.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.IterationNumber"></a>

### *property* MembraneStressEquivalent.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.IterationStep"></a>

### *property* MembraneStressEquivalent.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Layer"></a>

### *property* MembraneStressEquivalent.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Linearized2DBehavior"></a>

### *property* MembraneStressEquivalent.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadMultiplier"></a>

### *property* MembraneStressEquivalent.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStep"></a>

### *property* MembraneStressEquivalent.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMaximumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMaximumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMinimumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepForMinimumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.LoadStepNumber"></a>

### *property* MembraneStressEquivalent.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Location"></a>

### *property* MembraneStressEquivalent.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Maximum"></a>

### *property* MembraneStressEquivalent.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MaximumOccursOn"></a>

### *property* MembraneStressEquivalent.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MaximumOfMaximumOverTime"></a>

### *property* MembraneStressEquivalent.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MaximumOfMinimumOverTime"></a>

### *property* MembraneStressEquivalent.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Membrane"></a>

### *property* MembraneStressEquivalent.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MembraneBendingCenter"></a>

### *property* MembraneStressEquivalent.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MembraneBendingInside"></a>

### *property* MembraneStressEquivalent.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MembraneBendingOutside"></a>

### *property* MembraneStressEquivalent.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Minimum"></a>

### *property* MembraneStressEquivalent.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MinimumOccursOn"></a>

### *property* MembraneStressEquivalent.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MinimumOfMaximumOverTime"></a>

### *property* MembraneStressEquivalent.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.MinimumOfMinimumOverTime"></a>

### *property* MembraneStressEquivalent.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Mode"></a>

### *property* MembraneStressEquivalent.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.NamedSelections"></a>

### *property* MembraneStressEquivalent.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.NormalOrientation"></a>

### *property* MembraneStressEquivalent.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Path"></a>

### *property* MembraneStressEquivalent.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PeakCenter"></a>

### *property* MembraneStressEquivalent.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PeakInside"></a>

### *property* MembraneStressEquivalent.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PeakOutside"></a>

### *property* MembraneStressEquivalent.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PhaseIncrement"></a>

### *property* MembraneStressEquivalent.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Plies"></a>

### *property* MembraneStressEquivalent.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PlotData"></a>

### *property* MembraneStressEquivalent.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v242/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Ply"></a>

### *property* MembraneStressEquivalent.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Position"></a>

### *property* MembraneStressEquivalent.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Probability"></a>

### *property* MembraneStressEquivalent.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Properties"></a>

### *property* MembraneStressEquivalent.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ReportedFrequency"></a>

### *property* MembraneStressEquivalent.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ScaleFactor"></a>

### *property* MembraneStressEquivalent.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ScopingMethod"></a>

### *property* MembraneStressEquivalent.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SetNumber"></a>

### *property* MembraneStressEquivalent.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SolutionCombinationDriver"></a>

### *property* MembraneStressEquivalent.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SolverComponentIDs"></a>

### *property* MembraneStressEquivalent.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.StressStrainType"></a>

### *property* MembraneStressEquivalent.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SubScopeBy"></a>

### *property* MembraneStressEquivalent.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Substep"></a>

### *property* MembraneStressEquivalent.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Subtype"></a>

### *property* MembraneStressEquivalent.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Suppressed"></a>

### *property* MembraneStressEquivalent.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Surface"></a>

### *property* MembraneStressEquivalent.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.SweepingPhase"></a>

### *property* MembraneStressEquivalent.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ThroughThicknessBendingStress"></a>

### *property* MembraneStressEquivalent.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Time"></a>

### *property* MembraneStressEquivalent.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMaximumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMaximumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMinimumOfMaximumValues"></a>

### *property* MembraneStressEquivalent.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TimeForMinimumOfMinimumValues"></a>

### *property* MembraneStressEquivalent.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TotalCenter"></a>

### *property* MembraneStressEquivalent.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TotalInside"></a>

### *property* MembraneStressEquivalent.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.TotalOutside"></a>

### *property* MembraneStressEquivalent.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.VisibleProperties"></a>

### *property* MembraneStressEquivalent.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.WaterfallPanelShowTextOnMosaic"></a>

### *property* MembraneStressEquivalent.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MembraneStressEquivalent.Activate"></a>

### MembraneStressEquivalent.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddAlert"></a>

### MembraneStressEquivalent.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddComment"></a>

### MembraneStressEquivalent.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddConvergence"></a>

### MembraneStressEquivalent.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddFigure"></a>

### MembraneStressEquivalent.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.AddImage"></a>

### MembraneStressEquivalent.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ClearGeneratedData"></a>

### MembraneStressEquivalent.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CopyTo"></a>

### MembraneStressEquivalent.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CreateParameter"></a>

### MembraneStressEquivalent.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.CreateResultsAtAllSets"></a>

### MembraneStressEquivalent.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Delete"></a>

### MembraneStressEquivalent.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.Duplicate"></a>

### MembraneStressEquivalent.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.DuplicateWithoutResults"></a>

### MembraneStressEquivalent.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.EvaluateAllResults"></a>

### MembraneStressEquivalent.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ExportAnimation"></a>

### MembraneStressEquivalent.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.ExportToTextFile"></a>

### MembraneStressEquivalent.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.FetchRemoteResults"></a>

### MembraneStressEquivalent.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GetChildren"></a>

### MembraneStressEquivalent.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GetParameter"></a>

### MembraneStressEquivalent.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GroupAllSimilarChildren"></a>

### MembraneStressEquivalent.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.GroupSimilarObjects"></a>

### MembraneStressEquivalent.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PromoteToNamedSelection"></a>

### MembraneStressEquivalent.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PropertyByAPIName"></a>

### MembraneStressEquivalent.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.PropertyByName"></a>

### MembraneStressEquivalent.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.RemoveParameter"></a>

### MembraneStressEquivalent.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressEquivalent.RenameBasedOnDefinition"></a>

### MembraneStressEquivalent.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

