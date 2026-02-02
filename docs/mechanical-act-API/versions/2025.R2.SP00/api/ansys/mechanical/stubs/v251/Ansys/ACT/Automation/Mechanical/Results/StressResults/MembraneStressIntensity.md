# `MembraneStressIntensity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressIntensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MembraneStressIntensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MembraneStressIntensity.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#MembraneStressIntensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#MembraneStressIntensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#MembraneStressIntensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#MembraneStressIntensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MembraneStressIntensity.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MembraneStressIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#MembraneStressIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MembraneStressIntensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#MembraneStressIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#MembraneStressIntensity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MembraneStressIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#MembraneStressIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MembraneStressIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#MembraneStressIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#MembraneStressIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#MembraneStressIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#MembraneStressIntensity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MembraneStressIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MembraneStressIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MembraneStressIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#MembraneStressIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#MembraneStressIntensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MembraneStressIntensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MembraneStressIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MembraneStressIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#MembraneStressIntensity.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#MembraneStressIntensity.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#MembraneStressIntensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#MembraneStressIntensity.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#MembraneStressIntensity.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#MembraneStressIntensity.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#MembraneStressIntensity.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#MembraneStressIntensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#MembraneStressIntensity.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#MembraneStressIntensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#MembraneStressIntensity.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#MembraneStressIntensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#MembraneStressIntensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#MembraneStressIntensity.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#MembraneStressIntensity.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#MembraneStressIntensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#MembraneStressIntensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#MembraneStressIntensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#MembraneStressIntensity.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#MembraneStressIntensity.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#MembraneStressIntensity.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#MembraneStressIntensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#MembraneStressIntensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#MembraneStressIntensity.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#MembraneStressIntensity.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#MembraneStressIntensity.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#MembraneStressIntensity.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#MembraneStressIntensity.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#MembraneStressIntensity.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#MembraneStressIntensity.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#MembraneStressIntensity.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#MembraneStressIntensity.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#MembraneStressIntensity.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#MembraneStressIntensity.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#MembraneStressIntensity.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MembraneStressIntensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#MembraneStressIntensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#MembraneStressIntensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#MembraneStressIntensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#MembraneStressIntensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#MembraneStressIntensity.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#MembraneStressIntensity.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#MembraneStressIntensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#MembraneStressIntensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#MembraneStressIntensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#MembraneStressIntensity.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#MembraneStressIntensity.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#MembraneStressIntensity.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#MembraneStressIntensity.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#MembraneStressIntensity.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#MembraneStressIntensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#MembraneStressIntensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#MembraneStressIntensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#MembraneStressIntensity.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#MembraneStressIntensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#MembraneStressIntensity.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#MembraneStressIntensity.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#MembraneStressIntensity.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#MembraneStressIntensity.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#MembraneStressIntensity.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#MembraneStressIntensity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#MembraneStressIntensity.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#MembraneStressIntensity.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#MembraneStressIntensity.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#MembraneStressIntensity.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#MembraneStressIntensity.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#MembraneStressIntensity.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#MembraneStressIntensity.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#MembraneStressIntensity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#MembraneStressIntensity.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScopingMethod`](#MembraneStressIntensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#MembraneStressIntensity.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#MembraneStressIntensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#MembraneStressIntensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#MembraneStressIntensity.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#MembraneStressIntensity.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#MembraneStressIntensity.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#MembraneStressIntensity.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#MembraneStressIntensity.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#MembraneStressIntensity.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#MembraneStressIntensity.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#MembraneStressIntensity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#MembraneStressIntensity.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#MembraneStressIntensity.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#MembraneStressIntensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#MembraneStressIntensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#MembraneStressIntensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#MembraneStressIntensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#MembraneStressIntensity.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#MembraneStressIntensity.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#MembraneStressIntensity.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#MembraneStressIntensity.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#MembraneStressIntensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="MembraneStressIntensity.Amplitude"></a>

### *property* MembraneStressIntensity.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Average"></a>

### *property* MembraneStressIntensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AverageAcrossBodies"></a>

### *property* MembraneStressIntensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AverageRadiusOfCurvature"></a>

### *property* MembraneStressIntensity.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.BendingInside"></a>

### *property* MembraneStressIntensity.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.BendingOutside"></a>

### *property* MembraneStressIntensity.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.By"></a>

### *property* MembraneStressIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CalculateTimeHistory"></a>

### *property* MembraneStressIntensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Children"></a>

### *property* MembraneStressIntensity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CombinationNumber"></a>

### *property* MembraneStressIntensity.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Comments"></a>

### *property* MembraneStressIntensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CoordinateSystem"></a>

### *property* MembraneStressIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CrackFrontNumber"></a>

### *property* MembraneStressIntensity.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CyclicMode"></a>

### *property* MembraneStressIntensity.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.DataModelObjectCategory"></a>

### *property* MembraneStressIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.DisplayOption"></a>

### *property* MembraneStressIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.DisplayTime"></a>

### *property* MembraneStressIntensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.DpfEvaluation"></a>

### *property* MembraneStressIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.EnvironmentSelection"></a>

### *property* MembraneStressIntensity.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Figures"></a>

### *property* MembraneStressIntensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Frequency"></a>

### *property* MembraneStressIntensity.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.GlobalIDs"></a>

### *property* MembraneStressIntensity.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.GraphControlsXAxis"></a>

### *property* MembraneStressIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.HarmonicIndex"></a>

### *property* MembraneStressIntensity.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Identifier"></a>

### *property* MembraneStressIntensity.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Images"></a>

### *property* MembraneStressIntensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.InternalObject"></a>

### *property* MembraneStressIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.IsSolved"></a>

### *property* MembraneStressIntensity.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ItemType"></a>

### *property* MembraneStressIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.IterationNumber"></a>

### *property* MembraneStressIntensity.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.IterationStep"></a>

### *property* MembraneStressIntensity.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Layer"></a>

### *property* MembraneStressIntensity.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Linearized2DBehavior"></a>

### *property* MembraneStressIntensity.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadMultiplier"></a>

### *property* MembraneStressIntensity.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadStep"></a>

### *property* MembraneStressIntensity.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* MembraneStressIntensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* MembraneStressIntensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* MembraneStressIntensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* MembraneStressIntensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.LoadStepNumber"></a>

### *property* MembraneStressIntensity.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Location"></a>

### *property* MembraneStressIntensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Maximum"></a>

### *property* MembraneStressIntensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MaximumOccursOn"></a>

### *property* MembraneStressIntensity.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MaximumOfMaximumOverTime"></a>

### *property* MembraneStressIntensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MaximumOfMinimumOverTime"></a>

### *property* MembraneStressIntensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Membrane"></a>

### *property* MembraneStressIntensity.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MembraneBendingCenter"></a>

### *property* MembraneStressIntensity.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MembraneBendingInside"></a>

### *property* MembraneStressIntensity.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MembraneBendingOutside"></a>

### *property* MembraneStressIntensity.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Minimum"></a>

### *property* MembraneStressIntensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MinimumOccursOn"></a>

### *property* MembraneStressIntensity.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MinimumOfMaximumOverTime"></a>

### *property* MembraneStressIntensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.MinimumOfMinimumOverTime"></a>

### *property* MembraneStressIntensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Mode"></a>

### *property* MembraneStressIntensity.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.NamedSelections"></a>

### *property* MembraneStressIntensity.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.NormalOrientation"></a>

### *property* MembraneStressIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Path"></a>

### *property* MembraneStressIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PeakCenter"></a>

### *property* MembraneStressIntensity.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PeakInside"></a>

### *property* MembraneStressIntensity.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PeakOutside"></a>

### *property* MembraneStressIntensity.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PhaseIncrement"></a>

### *property* MembraneStressIntensity.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Plies"></a>

### *property* MembraneStressIntensity.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PlotData"></a>

### *property* MembraneStressIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Ply"></a>

### *property* MembraneStressIntensity.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Position"></a>

### *property* MembraneStressIntensity.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Probability"></a>

### *property* MembraneStressIntensity.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Properties"></a>

### *property* MembraneStressIntensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.RPMSelection"></a>

### *property* MembraneStressIntensity.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ReportedFrequency"></a>

### *property* MembraneStressIntensity.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ScaleFactor"></a>

### *property* MembraneStressIntensity.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ScopingMethod"></a>

### *property* MembraneStressIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.SetNumber"></a>

### *property* MembraneStressIntensity.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.SolutionCombinationDriver"></a>

### *property* MembraneStressIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.SolverComponentIDs"></a>

### *property* MembraneStressIntensity.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.StressStrainType"></a>

### *property* MembraneStressIntensity.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.SubScopeBy"></a>

### *property* MembraneStressIntensity.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Substep"></a>

### *property* MembraneStressIntensity.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Subtype"></a>

### *property* MembraneStressIntensity.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Suppressed"></a>

### *property* MembraneStressIntensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Surface"></a>

### *property* MembraneStressIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.SurfaceCoating"></a>

### *property* MembraneStressIntensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.SweepingPhase"></a>

### *property* MembraneStressIntensity.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ThroughThicknessBendingStress"></a>

### *property* MembraneStressIntensity.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Time"></a>

### *property* MembraneStressIntensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* MembraneStressIntensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* MembraneStressIntensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* MembraneStressIntensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* MembraneStressIntensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Total"></a>

### *property* MembraneStressIntensity.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TotalCenter"></a>

### *property* MembraneStressIntensity.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TotalInside"></a>

### *property* MembraneStressIntensity.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.TotalOutside"></a>

### *property* MembraneStressIntensity.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.VisibleProperties"></a>

### *property* MembraneStressIntensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MembraneStressIntensity.Activate"></a>

### MembraneStressIntensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AddAlert"></a>

### MembraneStressIntensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AddComment"></a>

### MembraneStressIntensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AddConvergence"></a>

### MembraneStressIntensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AddFigure"></a>

### MembraneStressIntensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.AddImage"></a>

### MembraneStressIntensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ClearGeneratedData"></a>

### MembraneStressIntensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CopyTo"></a>

### MembraneStressIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CreateParameter"></a>

### MembraneStressIntensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.CreateResultsAtAllSets"></a>

### MembraneStressIntensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Delete"></a>

### MembraneStressIntensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.Duplicate"></a>

### MembraneStressIntensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.DuplicateWithoutResults"></a>

### MembraneStressIntensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.EvaluateAllResults"></a>

### MembraneStressIntensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ExportAnimation"></a>

### MembraneStressIntensity.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.ExportToTextFile"></a>

### MembraneStressIntensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.FetchRemoteResults"></a>

### MembraneStressIntensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.GetChildren"></a>

### MembraneStressIntensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.GetParameter"></a>

### MembraneStressIntensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.GroupAllSimilarChildren"></a>

### MembraneStressIntensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.GroupSimilarObjects"></a>

### MembraneStressIntensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PromoteToNamedSelection"></a>

### MembraneStressIntensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PropertyByAPIName"></a>

### MembraneStressIntensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.PropertyByName"></a>

### MembraneStressIntensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.RemoveParameter"></a>

### MembraneStressIntensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MembraneStressIntensity.RenameBasedOnDefinition"></a>

### MembraneStressIntensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

