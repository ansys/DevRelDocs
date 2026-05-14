# `ShellBottomPeakStress`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBottomPeakStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBottomPeakStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ShellBottomPeakStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ShellBottomPeakStress.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ShellBottomPeakStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ShellBottomPeakStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ShellBottomPeakStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ShellBottomPeakStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ShellBottomPeakStress.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ShellBottomPeakStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ShellBottomPeakStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ShellBottomPeakStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ShellBottomPeakStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ShellBottomPeakStress.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ShellBottomPeakStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ShellBottomPeakStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ShellBottomPeakStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ShellBottomPeakStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ShellBottomPeakStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ShellBottomPeakStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ShellBottomPeakStress.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ShellBottomPeakStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ShellBottomPeakStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ShellBottomPeakStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ShellBottomPeakStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ShellBottomPeakStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ShellBottomPeakStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ShellBottomPeakStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ShellBottomPeakStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#ShellBottomPeakStress.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#ShellBottomPeakStress.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#ShellBottomPeakStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#ShellBottomPeakStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#ShellBottomPeakStress.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#ShellBottomPeakStress.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#ShellBottomPeakStress.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ShellBottomPeakStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ShellBottomPeakStress.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ShellBottomPeakStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ShellBottomPeakStress.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#ShellBottomPeakStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ShellBottomPeakStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#ShellBottomPeakStress.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#ShellBottomPeakStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ShellBottomPeakStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ShellBottomPeakStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ShellBottomPeakStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#ShellBottomPeakStress.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#ShellBottomPeakStress.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#ShellBottomPeakStress.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#ShellBottomPeakStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ShellBottomPeakStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#ShellBottomPeakStress.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#ShellBottomPeakStress.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ShellBottomPeakStress.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ShellBottomPeakStress.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ShellBottomPeakStress.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ShellBottomPeakStress.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ShellBottomPeakStress.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#ShellBottomPeakStress.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#ShellBottomPeakStress.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#ShellBottomPeakStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#ShellBottomPeakStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#ShellBottomPeakStress.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ShellBottomPeakStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ShellBottomPeakStress.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ShellBottomPeakStress.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ShellBottomPeakStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ShellBottomPeakStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ShellBottomPeakStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#ShellBottomPeakStress.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#ShellBottomPeakStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#ShellBottomPeakStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#ShellBottomPeakStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#ShellBottomPeakStress.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ShellBottomPeakStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ShellBottomPeakStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ShellBottomPeakStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#ShellBottomPeakStress.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#ShellBottomPeakStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ShellBottomPeakStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#ShellBottomPeakStress.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#ShellBottomPeakStress.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#ShellBottomPeakStress.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#ShellBottomPeakStress.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#ShellBottomPeakStress.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#ShellBottomPeakStress.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#ShellBottomPeakStress.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#ShellBottomPeakStress.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#ShellBottomPeakStress.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#ShellBottomPeakStress.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#ShellBottomPeakStress.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ShellBottomPeakStress.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#ShellBottomPeakStress.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#ShellBottomPeakStress.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScopingMethod`](#ShellBottomPeakStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ShellBottomPeakStress.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`ShellMBPType`](#ShellBottomPeakStress.ShellMBPType)                                           | Gets the ShellMBPType.                                                   |
| [`SolutionCombinationDriver`](#ShellBottomPeakStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ShellBottomPeakStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#ShellBottomPeakStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#ShellBottomPeakStress.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#ShellBottomPeakStress.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#ShellBottomPeakStress.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#ShellBottomPeakStress.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ShellBottomPeakStress.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ShellBottomPeakStress.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#ShellBottomPeakStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#ShellBottomPeakStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#ShellBottomPeakStress.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ShellBottomPeakStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ShellBottomPeakStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ShellBottomPeakStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ShellBottomPeakStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ShellBottomPeakStress.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#ShellBottomPeakStress.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#ShellBottomPeakStress.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#ShellBottomPeakStress.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#ShellBottomPeakStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ShellBottomPeakStress.Amplitude"></a>

### *property* ShellBottomPeakStress.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Average"></a>

### *property* ShellBottomPeakStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AverageAcrossBodies"></a>

### *property* ShellBottomPeakStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

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

<a id="ShellBottomPeakStress.By"></a>

### *property* ShellBottomPeakStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CalculateTimeHistory"></a>

### *property* ShellBottomPeakStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Children"></a>

### *property* ShellBottomPeakStress.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CombinationNumber"></a>

### *property* ShellBottomPeakStress.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Comments"></a>

### *property* ShellBottomPeakStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CoordinateSystem"></a>

### *property* ShellBottomPeakStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CrackFrontNumber"></a>

### *property* ShellBottomPeakStress.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CyclicMode"></a>

### *property* ShellBottomPeakStress.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DataModelObjectCategory"></a>

### *property* ShellBottomPeakStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DisplayOption"></a>

### *property* ShellBottomPeakStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DisplayTime"></a>

### *property* ShellBottomPeakStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DpfEvaluation"></a>

### *property* ShellBottomPeakStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.EnvironmentSelection"></a>

### *property* ShellBottomPeakStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Figures"></a>

### *property* ShellBottomPeakStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Frequency"></a>

### *property* ShellBottomPeakStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GlobalIDs"></a>

### *property* ShellBottomPeakStress.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GraphControlsXAxis"></a>

### *property* ShellBottomPeakStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.HarmonicIndex"></a>

### *property* ShellBottomPeakStress.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Identifier"></a>

### *property* ShellBottomPeakStress.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Images"></a>

### *property* ShellBottomPeakStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.InternalObject"></a>

### *property* ShellBottomPeakStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IsSolved"></a>

### *property* ShellBottomPeakStress.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ItemType"></a>

### *property* ShellBottomPeakStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IterationNumber"></a>

### *property* ShellBottomPeakStress.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IterationStep"></a>

### *property* ShellBottomPeakStress.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Layer"></a>

### *property* ShellBottomPeakStress.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Linearized2DBehavior"></a>

### *property* ShellBottomPeakStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadMultiplier"></a>

### *property* ShellBottomPeakStress.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStep"></a>

### *property* ShellBottomPeakStress.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepNumber"></a>

### *property* ShellBottomPeakStress.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Location"></a>

### *property* ShellBottomPeakStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Maximum"></a>

### *property* ShellBottomPeakStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOccursOn"></a>

### *property* ShellBottomPeakStress.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOfMaximumOverTime"></a>

### *property* ShellBottomPeakStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOfMinimumOverTime"></a>

### *property* ShellBottomPeakStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Membrane"></a>

### *property* ShellBottomPeakStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

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

<a id="ShellBottomPeakStress.Minimum"></a>

### *property* ShellBottomPeakStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOccursOn"></a>

### *property* ShellBottomPeakStress.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOfMaximumOverTime"></a>

### *property* ShellBottomPeakStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOfMinimumOverTime"></a>

### *property* ShellBottomPeakStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Mode"></a>

### *property* ShellBottomPeakStress.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.NamedSelections"></a>

### *property* ShellBottomPeakStress.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.NormalOrientation"></a>

### *property* ShellBottomPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType](../../../../../Mechanical/DataModel/Enums/ShellMBPOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Path"></a>

### *property* ShellBottomPeakStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

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

<a id="ShellBottomPeakStress.PhaseIncrement"></a>

### *property* ShellBottomPeakStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Plies"></a>

### *property* ShellBottomPeakStress.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PlotData"></a>

### *property* ShellBottomPeakStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Ply"></a>

### *property* ShellBottomPeakStress.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Position"></a>

### *property* ShellBottomPeakStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Probability"></a>

### *property* ShellBottomPeakStress.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Properties"></a>

### *property* ShellBottomPeakStress.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RPMSelection"></a>

### *property* ShellBottomPeakStress.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ReportedFrequency"></a>

### *property* ShellBottomPeakStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ScaleFactor"></a>

### *property* ShellBottomPeakStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ScopingMethod"></a>

### *property* ShellBottomPeakStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SetNumber"></a>

### *property* ShellBottomPeakStress.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ShellMBPType"></a>

### *property* ShellBottomPeakStress.ShellMBPType *: [Ansys.Mechanical.DataModel.Enums.ShellMBPType](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellMBPType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellMBPType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SolutionCombinationDriver"></a>

### *property* ShellBottomPeakStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SolverComponentIDs"></a>

### *property* ShellBottomPeakStress.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.StressStrainType"></a>

### *property* ShellBottomPeakStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SubScopeBy"></a>

### *property* ShellBottomPeakStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Substep"></a>

### *property* ShellBottomPeakStress.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Subtype"></a>

### *property* ShellBottomPeakStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Suppressed"></a>

### *property* ShellBottomPeakStress.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Surface"></a>

### *property* ShellBottomPeakStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SurfaceCoating"></a>

### *property* ShellBottomPeakStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SweepingPhase"></a>

### *property* ShellBottomPeakStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ThroughThicknessBendingStress"></a>

### *property* ShellBottomPeakStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Time"></a>

### *property* ShellBottomPeakStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMaximumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMaximumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMinimumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMinimumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Total"></a>

### *property* ShellBottomPeakStress.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

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

<a id="ShellBottomPeakStress.VisibleProperties"></a>

### *property* ShellBottomPeakStress.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShellBottomPeakStress.Activate"></a>

### ShellBottomPeakStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddAlert"></a>

### ShellBottomPeakStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddComment"></a>

### ShellBottomPeakStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddConvergence"></a>

### ShellBottomPeakStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddFigure"></a>

### ShellBottomPeakStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddImage"></a>

### ShellBottomPeakStress.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ClearGeneratedData"></a>

### ShellBottomPeakStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CopyTo"></a>

### ShellBottomPeakStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateParameter"></a>

### ShellBottomPeakStress.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateResultsAtAllSets"></a>

### ShellBottomPeakStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Delete"></a>

### ShellBottomPeakStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Duplicate"></a>

### ShellBottomPeakStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DuplicateWithoutResults"></a>

### ShellBottomPeakStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.EvaluateAllResults"></a>

### ShellBottomPeakStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportAnimation"></a>

### ShellBottomPeakStress.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportToTextFile"></a>

### ShellBottomPeakStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.FetchRemoteResults"></a>

### ShellBottomPeakStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetChildren"></a>

### ShellBottomPeakStress.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetParameter"></a>

### ShellBottomPeakStress.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupAllSimilarChildren"></a>

### ShellBottomPeakStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupSimilarObjects"></a>

### ShellBottomPeakStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PromoteToNamedSelection"></a>

### ShellBottomPeakStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyByAPIName"></a>

### ShellBottomPeakStress.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyByName"></a>

### ShellBottomPeakStress.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RemoveParameter"></a>

### ShellBottomPeakStress.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RenameBasedOnDefinition"></a>

### ShellBottomPeakStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

