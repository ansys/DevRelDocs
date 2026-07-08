# `BendingStressEquivalent`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressEquivalent"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressEquivalent

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BendingStressEquivalent.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BendingStressEquivalent.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#BendingStressEquivalent.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#BendingStressEquivalent.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#BendingStressEquivalent.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#BendingStressEquivalent.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BendingStressEquivalent.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#BendingStressEquivalent.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#BendingStressEquivalent.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BendingStressEquivalent.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#BendingStressEquivalent.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#BendingStressEquivalent.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BendingStressEquivalent.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#BendingStressEquivalent.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BendingStressEquivalent.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#BendingStressEquivalent.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#BendingStressEquivalent.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#BendingStressEquivalent.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#BendingStressEquivalent.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BendingStressEquivalent.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BendingStressEquivalent.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BendingStressEquivalent.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#BendingStressEquivalent.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#BendingStressEquivalent.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BendingStressEquivalent.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BendingStressEquivalent.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#BendingStressEquivalent.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#BendingStressEquivalent.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#BendingStressEquivalent.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#BendingStressEquivalent.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#BendingStressEquivalent.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#BendingStressEquivalent.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#BendingStressEquivalent.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#BendingStressEquivalent.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#BendingStressEquivalent.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#BendingStressEquivalent.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#BendingStressEquivalent.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#BendingStressEquivalent.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#BendingStressEquivalent.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#BendingStressEquivalent.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#BendingStressEquivalent.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#BendingStressEquivalent.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#BendingStressEquivalent.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#BendingStressEquivalent.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#BendingStressEquivalent.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#BendingStressEquivalent.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#BendingStressEquivalent.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#BendingStressEquivalent.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#BendingStressEquivalent.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#BendingStressEquivalent.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#BendingStressEquivalent.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#BendingStressEquivalent.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#BendingStressEquivalent.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#BendingStressEquivalent.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#BendingStressEquivalent.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#BendingStressEquivalent.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#BendingStressEquivalent.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#BendingStressEquivalent.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#BendingStressEquivalent.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#BendingStressEquivalent.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#BendingStressEquivalent.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#BendingStressEquivalent.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#BendingStressEquivalent.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#BendingStressEquivalent.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#BendingStressEquivalent.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#BendingStressEquivalent.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#BendingStressEquivalent.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#BendingStressEquivalent.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#BendingStressEquivalent.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#BendingStressEquivalent.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#BendingStressEquivalent.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#BendingStressEquivalent.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#BendingStressEquivalent.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#BendingStressEquivalent.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#BendingStressEquivalent.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#BendingStressEquivalent.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#BendingStressEquivalent.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#BendingStressEquivalent.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#BendingStressEquivalent.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#BendingStressEquivalent.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#BendingStressEquivalent.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#BendingStressEquivalent.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#BendingStressEquivalent.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#BendingStressEquivalent.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#BendingStressEquivalent.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#BendingStressEquivalent.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#BendingStressEquivalent.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#BendingStressEquivalent.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#BendingStressEquivalent.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#BendingStressEquivalent.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#BendingStressEquivalent.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#BendingStressEquivalent.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#BendingStressEquivalent.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#BendingStressEquivalent.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#BendingStressEquivalent.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#BendingStressEquivalent.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#BendingStressEquivalent.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScopingMethod`](#BendingStressEquivalent.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#BendingStressEquivalent.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#BendingStressEquivalent.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#BendingStressEquivalent.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#BendingStressEquivalent.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#BendingStressEquivalent.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#BendingStressEquivalent.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#BendingStressEquivalent.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#BendingStressEquivalent.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#BendingStressEquivalent.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#BendingStressEquivalent.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#BendingStressEquivalent.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#BendingStressEquivalent.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#BendingStressEquivalent.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#BendingStressEquivalent.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#BendingStressEquivalent.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#BendingStressEquivalent.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#BendingStressEquivalent.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#BendingStressEquivalent.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#BendingStressEquivalent.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#BendingStressEquivalent.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#BendingStressEquivalent.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#BendingStressEquivalent.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="BendingStressEquivalent.Amplitude"></a>

### *property* BendingStressEquivalent.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Average"></a>

### *property* BendingStressEquivalent.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AverageAcrossBodies"></a>

### *property* BendingStressEquivalent.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

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

<a id="BendingStressEquivalent.By"></a>

### *property* BendingStressEquivalent.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CalculateTimeHistory"></a>

### *property* BendingStressEquivalent.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Children"></a>

### *property* BendingStressEquivalent.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CombinationNumber"></a>

### *property* BendingStressEquivalent.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Comments"></a>

### *property* BendingStressEquivalent.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CoordinateSystem"></a>

### *property* BendingStressEquivalent.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CrackFrontNumber"></a>

### *property* BendingStressEquivalent.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CyclicMode"></a>

### *property* BendingStressEquivalent.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DataModelObjectCategory"></a>

### *property* BendingStressEquivalent.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DisplayOption"></a>

### *property* BendingStressEquivalent.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DisplayTime"></a>

### *property* BendingStressEquivalent.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DpfEvaluation"></a>

### *property* BendingStressEquivalent.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.EnvironmentSelection"></a>

### *property* BendingStressEquivalent.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Figures"></a>

### *property* BendingStressEquivalent.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Frequency"></a>

### *property* BendingStressEquivalent.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GlobalIDs"></a>

### *property* BendingStressEquivalent.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GraphControlsXAxis"></a>

### *property* BendingStressEquivalent.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.HarmonicIndex"></a>

### *property* BendingStressEquivalent.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Identifier"></a>

### *property* BendingStressEquivalent.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Images"></a>

### *property* BendingStressEquivalent.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.InternalObject"></a>

### *property* BendingStressEquivalent.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.IsSolved"></a>

### *property* BendingStressEquivalent.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ItemType"></a>

### *property* BendingStressEquivalent.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.IterationNumber"></a>

### *property* BendingStressEquivalent.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.IterationStep"></a>

### *property* BendingStressEquivalent.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Layer"></a>

### *property* BendingStressEquivalent.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Linearized2DBehavior"></a>

### *property* BendingStressEquivalent.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadMultiplier"></a>

### *property* BendingStressEquivalent.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStep"></a>

### *property* BendingStressEquivalent.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMaximumOfMaximumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMaximumOfMinimumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMinimumOfMaximumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepForMinimumOfMinimumValues"></a>

### *property* BendingStressEquivalent.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.LoadStepNumber"></a>

### *property* BendingStressEquivalent.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Location"></a>

### *property* BendingStressEquivalent.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Maximum"></a>

### *property* BendingStressEquivalent.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MaximumOccursOn"></a>

### *property* BendingStressEquivalent.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MaximumOfMaximumOverTime"></a>

### *property* BendingStressEquivalent.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MaximumOfMinimumOverTime"></a>

### *property* BendingStressEquivalent.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Membrane"></a>

### *property* BendingStressEquivalent.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

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

<a id="BendingStressEquivalent.Minimum"></a>

### *property* BendingStressEquivalent.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MinimumOccursOn"></a>

### *property* BendingStressEquivalent.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MinimumOfMaximumOverTime"></a>

### *property* BendingStressEquivalent.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.MinimumOfMinimumOverTime"></a>

### *property* BendingStressEquivalent.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Mode"></a>

### *property* BendingStressEquivalent.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.NamedSelections"></a>

### *property* BendingStressEquivalent.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.NormalOrientation"></a>

### *property* BendingStressEquivalent.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Path"></a>

### *property* BendingStressEquivalent.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

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

<a id="BendingStressEquivalent.PhaseIncrement"></a>

### *property* BendingStressEquivalent.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Plies"></a>

### *property* BendingStressEquivalent.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PlotData"></a>

### *property* BendingStressEquivalent.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Ply"></a>

### *property* BendingStressEquivalent.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Position"></a>

### *property* BendingStressEquivalent.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Probability"></a>

### *property* BendingStressEquivalent.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Properties"></a>

### *property* BendingStressEquivalent.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.RPMSelection"></a>

### *property* BendingStressEquivalent.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ReportedFrequency"></a>

### *property* BendingStressEquivalent.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ScaleFactor"></a>

### *property* BendingStressEquivalent.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ScopingMethod"></a>

### *property* BendingStressEquivalent.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SetNumber"></a>

### *property* BendingStressEquivalent.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SolutionCombinationDriver"></a>

### *property* BendingStressEquivalent.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SolverComponentIDs"></a>

### *property* BendingStressEquivalent.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.StressStrainType"></a>

### *property* BendingStressEquivalent.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SubScopeBy"></a>

### *property* BendingStressEquivalent.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Substep"></a>

### *property* BendingStressEquivalent.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Subtype"></a>

### *property* BendingStressEquivalent.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Suppressed"></a>

### *property* BendingStressEquivalent.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Surface"></a>

### *property* BendingStressEquivalent.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SurfaceCoating"></a>

### *property* BendingStressEquivalent.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.SweepingPhase"></a>

### *property* BendingStressEquivalent.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ThroughThicknessBendingStress"></a>

### *property* BendingStressEquivalent.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Time"></a>

### *property* BendingStressEquivalent.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMaximumOfMaximumValues"></a>

### *property* BendingStressEquivalent.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMaximumOfMinimumValues"></a>

### *property* BendingStressEquivalent.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMinimumOfMaximumValues"></a>

### *property* BendingStressEquivalent.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.TimeForMinimumOfMinimumValues"></a>

### *property* BendingStressEquivalent.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Total"></a>

### *property* BendingStressEquivalent.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

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

<a id="BendingStressEquivalent.VisibleProperties"></a>

### *property* BendingStressEquivalent.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BendingStressEquivalent.Activate"></a>

### BendingStressEquivalent.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddAlert"></a>

### BendingStressEquivalent.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddComment"></a>

### BendingStressEquivalent.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddConvergence"></a>

### BendingStressEquivalent.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddFigure"></a>

### BendingStressEquivalent.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.AddImage"></a>

### BendingStressEquivalent.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ClearGeneratedData"></a>

### BendingStressEquivalent.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CopyTo"></a>

### BendingStressEquivalent.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CreateParameter"></a>

### BendingStressEquivalent.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.CreateResultsAtAllSets"></a>

### BendingStressEquivalent.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Delete"></a>

### BendingStressEquivalent.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.Duplicate"></a>

### BendingStressEquivalent.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.DuplicateWithoutResults"></a>

### BendingStressEquivalent.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.EvaluateAllResults"></a>

### BendingStressEquivalent.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ExportAnimation"></a>

### BendingStressEquivalent.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.ExportToTextFile"></a>

### BendingStressEquivalent.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.FetchRemoteResults"></a>

### BendingStressEquivalent.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GetChildren"></a>

### BendingStressEquivalent.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GetParameter"></a>

### BendingStressEquivalent.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GroupAllSimilarChildren"></a>

### BendingStressEquivalent.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.GroupSimilarObjects"></a>

### BendingStressEquivalent.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PromoteToNamedSelection"></a>

### BendingStressEquivalent.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PropertyByAPIName"></a>

### BendingStressEquivalent.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.PropertyByName"></a>

### BendingStressEquivalent.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.RemoveParameter"></a>

### BendingStressEquivalent.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressEquivalent.RenameBasedOnDefinition"></a>

### BendingStressEquivalent.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

