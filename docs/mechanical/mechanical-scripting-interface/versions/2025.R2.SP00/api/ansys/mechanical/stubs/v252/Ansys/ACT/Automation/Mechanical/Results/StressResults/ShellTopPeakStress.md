# `ShellTopPeakStress`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellTopPeakStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellTopPeakStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ShellTopPeakStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#ShellTopPeakStress.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#ShellTopPeakStress.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#ShellTopPeakStress.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#ShellTopPeakStress.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#ShellTopPeakStress.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#ShellTopPeakStress.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#ShellTopPeakStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#ShellTopPeakStress.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#ShellTopPeakStress.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#ShellTopPeakStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#ShellTopPeakStress.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#ShellTopPeakStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#ShellTopPeakStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#ShellTopPeakStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#ShellTopPeakStress.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#ShellTopPeakStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#ShellTopPeakStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#ShellTopPeakStress.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#ShellTopPeakStress.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#ShellTopPeakStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#ShellTopPeakStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#ShellTopPeakStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#ShellTopPeakStress.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#ShellTopPeakStress.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#ShellTopPeakStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#ShellTopPeakStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#ShellTopPeakStress.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#ShellTopPeakStress.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#ShellTopPeakStress.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#ShellTopPeakStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#ShellTopPeakStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#ShellTopPeakStress.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#ShellTopPeakStress.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#ShellTopPeakStress.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ShellTopPeakStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ShellTopPeakStress.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ShellTopPeakStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ShellTopPeakStress.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#ShellTopPeakStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ShellTopPeakStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#ShellTopPeakStress.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#ShellTopPeakStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ShellTopPeakStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ShellTopPeakStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ShellTopPeakStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#ShellTopPeakStress.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#ShellTopPeakStress.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#ShellTopPeakStress.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#ShellTopPeakStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ShellTopPeakStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#ShellTopPeakStress.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#ShellTopPeakStress.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ShellTopPeakStress.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ShellTopPeakStress.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ShellTopPeakStress.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ShellTopPeakStress.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ShellTopPeakStress.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#ShellTopPeakStress.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#ShellTopPeakStress.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#ShellTopPeakStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#ShellTopPeakStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#ShellTopPeakStress.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ShellTopPeakStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ShellTopPeakStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ShellTopPeakStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ShellTopPeakStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ShellTopPeakStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ShellTopPeakStress.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ShellTopPeakStress.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ShellTopPeakStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ShellTopPeakStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ShellTopPeakStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#ShellTopPeakStress.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#ShellTopPeakStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#ShellTopPeakStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#ShellTopPeakStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#ShellTopPeakStress.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ShellTopPeakStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ShellTopPeakStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ShellTopPeakStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#ShellTopPeakStress.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#ShellTopPeakStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ShellTopPeakStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#ShellTopPeakStress.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#ShellTopPeakStress.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#ShellTopPeakStress.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#ShellTopPeakStress.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#ShellTopPeakStress.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#ShellTopPeakStress.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#ShellTopPeakStress.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#ShellTopPeakStress.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#ShellTopPeakStress.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#ShellTopPeakStress.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#ShellTopPeakStress.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ShellTopPeakStress.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#ShellTopPeakStress.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#ShellTopPeakStress.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScopingMethod`](#ShellTopPeakStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ShellTopPeakStress.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`ShellMBPType`](#ShellTopPeakStress.ShellMBPType)                                           | Gets the ShellMBPType.                                                   |
| [`SolutionCombinationDriver`](#ShellTopPeakStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ShellTopPeakStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#ShellTopPeakStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#ShellTopPeakStress.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#ShellTopPeakStress.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#ShellTopPeakStress.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#ShellTopPeakStress.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ShellTopPeakStress.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ShellTopPeakStress.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#ShellTopPeakStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#ShellTopPeakStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#ShellTopPeakStress.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ShellTopPeakStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ShellTopPeakStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ShellTopPeakStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ShellTopPeakStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ShellTopPeakStress.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#ShellTopPeakStress.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#ShellTopPeakStress.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#ShellTopPeakStress.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#ShellTopPeakStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ShellTopPeakStress.Amplitude"></a>

### *property* ShellTopPeakStress.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Average"></a>

### *property* ShellTopPeakStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AverageAcrossBodies"></a>

### *property* ShellTopPeakStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AverageRadiusOfCurvature"></a>

### *property* ShellTopPeakStress.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.BendingInside"></a>

### *property* ShellTopPeakStress.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.BendingOutside"></a>

### *property* ShellTopPeakStress.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.By"></a>

### *property* ShellTopPeakStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CalculateTimeHistory"></a>

### *property* ShellTopPeakStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Children"></a>

### *property* ShellTopPeakStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CombinationNumber"></a>

### *property* ShellTopPeakStress.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Comments"></a>

### *property* ShellTopPeakStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CoordinateSystem"></a>

### *property* ShellTopPeakStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CrackFrontNumber"></a>

### *property* ShellTopPeakStress.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CyclicMode"></a>

### *property* ShellTopPeakStress.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DataModelObjectCategory"></a>

### *property* ShellTopPeakStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DisplayOption"></a>

### *property* ShellTopPeakStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DisplayTime"></a>

### *property* ShellTopPeakStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DpfEvaluation"></a>

### *property* ShellTopPeakStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.EnvironmentSelection"></a>

### *property* ShellTopPeakStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Figures"></a>

### *property* ShellTopPeakStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Frequency"></a>

### *property* ShellTopPeakStress.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GlobalIDs"></a>

### *property* ShellTopPeakStress.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GraphControlsXAxis"></a>

### *property* ShellTopPeakStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.HarmonicIndex"></a>

### *property* ShellTopPeakStress.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Identifier"></a>

### *property* ShellTopPeakStress.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Images"></a>

### *property* ShellTopPeakStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.InternalObject"></a>

### *property* ShellTopPeakStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.IsSolved"></a>

### *property* ShellTopPeakStress.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ItemType"></a>

### *property* ShellTopPeakStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.IterationNumber"></a>

### *property* ShellTopPeakStress.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.IterationStep"></a>

### *property* ShellTopPeakStress.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Layer"></a>

### *property* ShellTopPeakStress.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Linearized2DBehavior"></a>

### *property* ShellTopPeakStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadMultiplier"></a>

### *property* ShellTopPeakStress.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStep"></a>

### *property* ShellTopPeakStress.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShellTopPeakStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.LoadStepNumber"></a>

### *property* ShellTopPeakStress.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Location"></a>

### *property* ShellTopPeakStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Maximum"></a>

### *property* ShellTopPeakStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MaximumOccursOn"></a>

### *property* ShellTopPeakStress.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MaximumOfMaximumOverTime"></a>

### *property* ShellTopPeakStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MaximumOfMinimumOverTime"></a>

### *property* ShellTopPeakStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Membrane"></a>

### *property* ShellTopPeakStress.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MembraneBendingCenter"></a>

### *property* ShellTopPeakStress.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MembraneBendingInside"></a>

### *property* ShellTopPeakStress.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MembraneBendingOutside"></a>

### *property* ShellTopPeakStress.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Minimum"></a>

### *property* ShellTopPeakStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MinimumOccursOn"></a>

### *property* ShellTopPeakStress.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MinimumOfMaximumOverTime"></a>

### *property* ShellTopPeakStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.MinimumOfMinimumOverTime"></a>

### *property* ShellTopPeakStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Mode"></a>

### *property* ShellTopPeakStress.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.NamedSelections"></a>

### *property* ShellTopPeakStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.NormalOrientation"></a>

### *property* ShellTopPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType](../../../../../Mechanical/DataModel/Enums/ShellMBPOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Path"></a>

### *property* ShellTopPeakStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PeakCenter"></a>

### *property* ShellTopPeakStress.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PeakInside"></a>

### *property* ShellTopPeakStress.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PeakOutside"></a>

### *property* ShellTopPeakStress.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PhaseIncrement"></a>

### *property* ShellTopPeakStress.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Plies"></a>

### *property* ShellTopPeakStress.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PlotData"></a>

### *property* ShellTopPeakStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Ply"></a>

### *property* ShellTopPeakStress.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Position"></a>

### *property* ShellTopPeakStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Probability"></a>

### *property* ShellTopPeakStress.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Properties"></a>

### *property* ShellTopPeakStress.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.RPMSelection"></a>

### *property* ShellTopPeakStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ReportedFrequency"></a>

### *property* ShellTopPeakStress.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ScaleFactor"></a>

### *property* ShellTopPeakStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ScopingMethod"></a>

### *property* ShellTopPeakStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SetNumber"></a>

### *property* ShellTopPeakStress.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ShellMBPType"></a>

### *property* ShellTopPeakStress.ShellMBPType *: [Ansys.Mechanical.DataModel.Enums.ShellMBPType](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellMBPType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShellMBPType.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SolutionCombinationDriver"></a>

### *property* ShellTopPeakStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SolverComponentIDs"></a>

### *property* ShellTopPeakStress.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.StressStrainType"></a>

### *property* ShellTopPeakStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SubScopeBy"></a>

### *property* ShellTopPeakStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Substep"></a>

### *property* ShellTopPeakStress.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Subtype"></a>

### *property* ShellTopPeakStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Suppressed"></a>

### *property* ShellTopPeakStress.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Surface"></a>

### *property* ShellTopPeakStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SurfaceCoating"></a>

### *property* ShellTopPeakStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.SweepingPhase"></a>

### *property* ShellTopPeakStress.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ThroughThicknessBendingStress"></a>

### *property* ShellTopPeakStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Time"></a>

### *property* ShellTopPeakStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMaximumOfMaximumValues"></a>

### *property* ShellTopPeakStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMaximumOfMinimumValues"></a>

### *property* ShellTopPeakStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMinimumOfMaximumValues"></a>

### *property* ShellTopPeakStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TimeForMinimumOfMinimumValues"></a>

### *property* ShellTopPeakStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Total"></a>

### *property* ShellTopPeakStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TotalCenter"></a>

### *property* ShellTopPeakStress.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TotalInside"></a>

### *property* ShellTopPeakStress.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.TotalOutside"></a>

### *property* ShellTopPeakStress.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.VisibleProperties"></a>

### *property* ShellTopPeakStress.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShellTopPeakStress.Activate"></a>

### ShellTopPeakStress.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddAlert"></a>

### ShellTopPeakStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddComment"></a>

### ShellTopPeakStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddConvergence"></a>

### ShellTopPeakStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddFigure"></a>

### ShellTopPeakStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.AddImage"></a>

### ShellTopPeakStress.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ClearGeneratedData"></a>

### ShellTopPeakStress.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CopyTo"></a>

### ShellTopPeakStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CreateParameter"></a>

### ShellTopPeakStress.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.CreateResultsAtAllSets"></a>

### ShellTopPeakStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Delete"></a>

### ShellTopPeakStress.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.Duplicate"></a>

### ShellTopPeakStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.DuplicateWithoutResults"></a>

### ShellTopPeakStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.EvaluateAllResults"></a>

### ShellTopPeakStress.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ExportAnimation"></a>

### ShellTopPeakStress.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.ExportToTextFile"></a>

### ShellTopPeakStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.FetchRemoteResults"></a>

### ShellTopPeakStress.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GetChildren"></a>

### ShellTopPeakStress.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GetParameter"></a>

### ShellTopPeakStress.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GroupAllSimilarChildren"></a>

### ShellTopPeakStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.GroupSimilarObjects"></a>

### ShellTopPeakStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PromoteToNamedSelection"></a>

### ShellTopPeakStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PropertyByAPIName"></a>

### ShellTopPeakStress.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.PropertyByName"></a>

### ShellTopPeakStress.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.RemoveParameter"></a>

### ShellTopPeakStress.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.RenameBasedOnDefinition"></a>

### ShellTopPeakStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShellTopPeakStress.RetrieveResult"></a>

### ShellTopPeakStress.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

