# `StressResult`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressResults.StressResult"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.StressResults.StressResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#StressResult.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#StressResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#StressResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#StressResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#StressResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StressResult.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#StressResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#StressResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#StressResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#StressResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#StressResult.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#StressResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#StressResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#StressResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#StressResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#StressResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#StressResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#StressResult.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#StressResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#StressResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#StressResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#StressResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#StressResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#StressResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#StressResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Amplitude`](#StressResult.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`Average`](#StressResult.Average)                                                     | Gets the Average.                                                      |
| [`AverageAcrossBodies`](#StressResult.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`AverageRadiusOfCurvature`](#StressResult.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                             |
| [`BendingInside`](#StressResult.BendingInside)                                         | Gets the BendingInside.                                                |
| [`BendingOutside`](#StressResult.BendingOutside)                                       | Gets the BendingOutside.                                               |
| [`By`](#StressResult.By)                                                               | Gets or sets the By.                                                   |
| [`CalculateTimeHistory`](#StressResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Children`](#StressResult.Children)                                                   | Gets the list of children.                                             |
| [`CombinationNumber`](#StressResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`Comments`](#StressResult.Comments)                                                   | Gets the list of associated comments.                                  |
| [`CoordinateSystem`](#StressResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`CrackFrontNumber`](#StressResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`CyclicMode`](#StressResult.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`DataModelObjectCategory`](#StressResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`DisplayOption`](#StressResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DisplayTime`](#StressResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`DpfEvaluation`](#StressResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`EnvironmentSelection`](#StressResult.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`Figures`](#StressResult.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Frequency`](#StressResult.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`GlobalIDs`](#StressResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`GraphControlsXAxis`](#StressResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`HarmonicIndex`](#StressResult.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`Identifier`](#StressResult.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`Images`](#StressResult.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#StressResult.InternalObject)                                       | Gets the internal object. For advanced usage only.                     |
| [`IsSolved`](#StressResult.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`ItemType`](#StressResult.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`IterationNumber`](#StressResult.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`IterationStep`](#StressResult.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`Layer`](#StressResult.Layer)                                                         | Gets or sets the Layer.                                                |
| [`Linearized2DBehavior`](#StressResult.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                 |
| [`LoadMultiplier`](#StressResult.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`LoadStep`](#StressResult.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#StressResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`LoadStepForMaximumOfMinimumValues`](#StressResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#StressResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`LoadStepForMinimumOfMinimumValues`](#StressResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepNumber`](#StressResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`Location`](#StressResult.Location)                                                   | Gets or sets the Location.                                             |
| [`Maximum`](#StressResult.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOccursOn`](#StressResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MaximumOfMaximumOverTime`](#StressResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#StressResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Membrane`](#StressResult.Membrane)                                                   | Gets the Membrane.                                                     |
| [`MembraneBendingCenter`](#StressResult.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                        |
| [`MembraneBendingInside`](#StressResult.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                        |
| [`MembraneBendingOutside`](#StressResult.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                       |
| [`Minimum`](#StressResult.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOccursOn`](#StressResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`MinimumOfMaximumOverTime`](#StressResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#StressResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Mode`](#StressResult.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`NamedSelections`](#StressResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`NormalOrientation`](#StressResult.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Path`](#StressResult.Path)                                                           | Path property.                                                         |
| [`PeakCenter`](#StressResult.PeakCenter)                                               | Gets the PeakCenter.                                                   |
| [`PeakInside`](#StressResult.PeakInside)                                               | Gets the PeakInside.                                                   |
| [`PeakOutside`](#StressResult.PeakOutside)                                             | Gets the PeakOutside.                                                  |
| [`PhaseIncrement`](#StressResult.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Plies`](#StressResult.Plies)                                                         | Plies property.                                                        |
| [`PlotData`](#StressResult.PlotData)                                                   | Gets the result table.                                                 |
| [`Ply`](#StressResult.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`Position`](#StressResult.Position)                                                   | Gets or sets the Position.                                             |
| [`Probability`](#StressResult.Probability)                                             | Gets the Probability.                                                  |
| [`Properties`](#StressResult.Properties)                                               | Gets the list of properties for this object.                           |
| [`ReportedFrequency`](#StressResult.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`ScaleFactor`](#StressResult.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`ScopingMethod`](#StressResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#StressResult.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`SolutionCombinationDriver`](#StressResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`SolverComponentIDs`](#StressResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`StressStrainType`](#StressResult.StressStrainType)                                   | Gets or sets the StressStrainType.                                     |
| [`SubScopeBy`](#StressResult.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                           |
| [`Substep`](#StressResult.Substep)                                                     | Gets the Substep.                                                      |
| [`Subtype`](#StressResult.Subtype)                                                     | Gets or sets the Subtype.                                              |
| [`Suppressed`](#StressResult.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Surface`](#StressResult.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#StressResult.SurfaceCoating)                                                                                                                                      | SurfaceCoating property.                                               |
| [`SweepingPhase`](#StressResult.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`ThroughThicknessBendingStress`](#StressResult.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                        |
| [`Time`](#StressResult.Time)                                                           | Gets the Time.                                                         |
| [`TimeForMaximumOfMaximumValues`](#StressResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`TimeForMaximumOfMinimumValues`](#StressResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#StressResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`TimeForMinimumOfMinimumValues`](#StressResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TotalCenter`](#StressResult.TotalCenter)                                             | Gets the TotalCenter.                                                  |
| [`TotalInside`](#StressResult.TotalInside)                                             | Gets the TotalInside.                                                  |
| [`TotalOutside`](#StressResult.TotalOutside)                                           | Gets the TotalOutside.                                                 |
| [`VisibleProperties`](#StressResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |
| [`WaterfallShowTextOnMosaic`](#StressResult.WaterfallShowTextOnMosaic)                                                                                                                | Gets or sets the Waterfall Mosaic Text Property.                       |

<a id="property-detail"></a>

## Property detail

<a id="StressResult.Amplitude"></a>

### *property* StressResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Average"></a>

### *property* StressResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AverageAcrossBodies"></a>

### *property* StressResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AverageRadiusOfCurvature"></a>

### *property* StressResult.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.BendingInside"></a>

### *property* StressResult.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.BendingOutside"></a>

### *property* StressResult.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.By"></a>

### *property* StressResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CalculateTimeHistory"></a>

### *property* StressResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Children"></a>

### *property* StressResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CombinationNumber"></a>

### *property* StressResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Comments"></a>

### *property* StressResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CoordinateSystem"></a>

### *property* StressResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CrackFrontNumber"></a>

### *property* StressResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CyclicMode"></a>

### *property* StressResult.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.DataModelObjectCategory"></a>

### *property* StressResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.DisplayOption"></a>

### *property* StressResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.DisplayTime"></a>

### *property* StressResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.DpfEvaluation"></a>

### *property* StressResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.EnvironmentSelection"></a>

### *property* StressResult.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Figures"></a>

### *property* StressResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Frequency"></a>

### *property* StressResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.GlobalIDs"></a>

### *property* StressResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.GraphControlsXAxis"></a>

### *property* StressResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.HarmonicIndex"></a>

### *property* StressResult.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Identifier"></a>

### *property* StressResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Images"></a>

### *property* StressResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.InternalObject"></a>

### *property* StressResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.IsSolved"></a>

### *property* StressResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ItemType"></a>

### *property* StressResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.IterationNumber"></a>

### *property* StressResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.IterationStep"></a>

### *property* StressResult.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Layer"></a>

### *property* StressResult.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Linearized2DBehavior"></a>

### *property* StressResult.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadMultiplier"></a>

### *property* StressResult.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadStep"></a>

### *property* StressResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* StressResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* StressResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* StressResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* StressResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.LoadStepNumber"></a>

### *property* StressResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Location"></a>

### *property* StressResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Maximum"></a>

### *property* StressResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MaximumOccursOn"></a>

### *property* StressResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MaximumOfMaximumOverTime"></a>

### *property* StressResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MaximumOfMinimumOverTime"></a>

### *property* StressResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Membrane"></a>

### *property* StressResult.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MembraneBendingCenter"></a>

### *property* StressResult.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MembraneBendingInside"></a>

### *property* StressResult.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MembraneBendingOutside"></a>

### *property* StressResult.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Minimum"></a>

### *property* StressResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MinimumOccursOn"></a>

### *property* StressResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MinimumOfMaximumOverTime"></a>

### *property* StressResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.MinimumOfMinimumOverTime"></a>

### *property* StressResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Mode"></a>

### *property* StressResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.NamedSelections"></a>

### *property* StressResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.NormalOrientation"></a>

### *property* StressResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Path"></a>

### *property* StressResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PeakCenter"></a>

### *property* StressResult.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PeakInside"></a>

### *property* StressResult.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PeakOutside"></a>

### *property* StressResult.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PhaseIncrement"></a>

### *property* StressResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Plies"></a>

### *property* StressResult.Plies *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/ImportedPliesCollection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PlotData"></a>

### *property* StressResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Ply"></a>

### *property* StressResult.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Position"></a>

### *property* StressResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Probability"></a>

### *property* StressResult.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Properties"></a>

### *property* StressResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ReportedFrequency"></a>

### *property* StressResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ScaleFactor"></a>

### *property* StressResult.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ScopingMethod"></a>

### *property* StressResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.SetNumber"></a>

### *property* StressResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.SolutionCombinationDriver"></a>

### *property* StressResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.SolverComponentIDs"></a>

### *property* StressResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.StressStrainType"></a>

### *property* StressResult.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.SubScopeBy"></a>

### *property* StressResult.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Substep"></a>

### *property* StressResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Subtype"></a>

### *property* StressResult.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Suppressed"></a>

### *property* StressResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Surface"></a>

### *property* StressResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.SurfaceCoating"></a>

### *property* StressResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.SweepingPhase"></a>

### *property* StressResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ThroughThicknessBendingStress"></a>

### *property* StressResult.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Time"></a>

### *property* StressResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TimeForMaximumOfMaximumValues"></a>

### *property* StressResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TimeForMaximumOfMinimumValues"></a>

### *property* StressResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TimeForMinimumOfMaximumValues"></a>

### *property* StressResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TimeForMinimumOfMinimumValues"></a>

### *property* StressResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TotalCenter"></a>

### *property* StressResult.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TotalInside"></a>

### *property* StressResult.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.TotalOutside"></a>

### *property* StressResult.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.VisibleProperties"></a>

### *property* StressResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.WaterfallShowTextOnMosaic"></a>

### *property* StressResult.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressResult.Activate"></a>

### StressResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AddAlert"></a>

### StressResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AddComment"></a>

### StressResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AddConvergence"></a>

### StressResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AddFigure"></a>

### StressResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.AddImage"></a>

### StressResult.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ClearGeneratedData"></a>

### StressResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CopyTo"></a>

### StressResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CreateParameter"></a>

### StressResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.CreateResultsAtAllSets"></a>

### StressResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Delete"></a>

### StressResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.Duplicate"></a>

### StressResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.DuplicateWithoutResults"></a>

### StressResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.EvaluateAllResults"></a>

### StressResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ExportAnimation"></a>

### StressResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.ExportToTextFile"></a>

### StressResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.FetchRemoteResults"></a>

### StressResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.GetChildren"></a>

### StressResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.GetParameter"></a>

### StressResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.GroupAllSimilarChildren"></a>

### StressResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.GroupSimilarObjects"></a>

### StressResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PromoteToNamedSelection"></a>

### StressResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PropertyByAPIName"></a>

### StressResult.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressResult.PropertyByName"></a>

### StressResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.RemoveParameter"></a>

### StressResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressResult.RenameBasedOnDefinition"></a>

### StressResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

