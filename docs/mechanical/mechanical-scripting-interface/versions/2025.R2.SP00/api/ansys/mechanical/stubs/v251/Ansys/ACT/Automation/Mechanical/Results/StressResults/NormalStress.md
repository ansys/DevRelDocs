# `NormalStress`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StressResults.NormalStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.NormalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NormalStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NormalStress.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#NormalStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#NormalStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#NormalStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#NormalStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NormalStress.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#NormalStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#NormalStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NormalStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#NormalStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#NormalStress.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NormalStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#NormalStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#NormalStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#NormalStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#NormalStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#NormalStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#NormalStress.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NormalStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NormalStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NormalStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#NormalStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#NormalStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NormalStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NormalStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#NormalStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#NormalStress.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#NormalStress.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#NormalStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#NormalStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#NormalStress.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#NormalStress.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#NormalStress.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#NormalStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#NormalStress.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#NormalStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#NormalStress.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#NormalStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#NormalStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#NormalStress.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#NormalStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#NormalStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#NormalStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#NormalStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#NormalStress.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#NormalStress.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#NormalStress.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#NormalStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#NormalStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#NormalStress.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#NormalStress.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#NormalStress.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#NormalStress.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#NormalStress.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#NormalStress.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#NormalStress.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#NormalStress.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#NormalStress.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#NormalStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#NormalStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#NormalStress.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NormalStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#NormalStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#NormalStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#NormalStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#NormalStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#NormalStress.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#NormalStress.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#NormalStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#NormalStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#NormalStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#NormalStress.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#NormalStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#NormalStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#NormalStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#NormalStress.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#NormalStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#NormalStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#NormalStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#NormalStress.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#NormalStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#NormalStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#NormalStress.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#NormalStress.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#NormalStress.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#NormalStress.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#NormalStress.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#NormalStress.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#NormalStress.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#NormalStress.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#NormalStress.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#NormalStress.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#NormalStress.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#NormalStress.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#NormalStress.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#NormalStress.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#NormalStress.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#NormalStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#NormalStress.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#NormalStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#NormalStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#NormalStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#NormalStress.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#NormalStress.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#NormalStress.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#NormalStress.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#NormalStress.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#NormalStress.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#NormalStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#NormalStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#NormalStress.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#NormalStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#NormalStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#NormalStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#NormalStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#NormalStress.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#NormalStress.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#NormalStress.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#NormalStress.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#NormalStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="NormalStress.Amplitude"></a>

### *property* NormalStress.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Average"></a>

### *property* NormalStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AverageAcrossBodies"></a>

### *property* NormalStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AverageRadiusOfCurvature"></a>

### *property* NormalStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.BendingInside"></a>

### *property* NormalStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.BendingOutside"></a>

### *property* NormalStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.By"></a>

### *property* NormalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CalculateTimeHistory"></a>

### *property* NormalStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Children"></a>

### *property* NormalStress.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CombinationNumber"></a>

### *property* NormalStress.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Comments"></a>

### *property* NormalStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CoordinateSystem"></a>

### *property* NormalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CrackFrontNumber"></a>

### *property* NormalStress.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CyclicMode"></a>

### *property* NormalStress.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.DataModelObjectCategory"></a>

### *property* NormalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.DisplayOption"></a>

### *property* NormalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.DisplayTime"></a>

### *property* NormalStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.DpfEvaluation"></a>

### *property* NormalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.EnvironmentSelection"></a>

### *property* NormalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Figures"></a>

### *property* NormalStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Frequency"></a>

### *property* NormalStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.GlobalIDs"></a>

### *property* NormalStress.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.GraphControlsXAxis"></a>

### *property* NormalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.HarmonicIndex"></a>

### *property* NormalStress.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Identifier"></a>

### *property* NormalStress.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Images"></a>

### *property* NormalStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.InternalObject"></a>

### *property* NormalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.IsSolved"></a>

### *property* NormalStress.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ItemType"></a>

### *property* NormalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.IterationNumber"></a>

### *property* NormalStress.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.IterationStep"></a>

### *property* NormalStress.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Layer"></a>

### *property* NormalStress.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Linearized2DBehavior"></a>

### *property* NormalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadMultiplier"></a>

### *property* NormalStress.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadStep"></a>

### *property* NormalStress.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* NormalStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* NormalStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* NormalStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* NormalStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.LoadStepNumber"></a>

### *property* NormalStress.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Location"></a>

### *property* NormalStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Maximum"></a>

### *property* NormalStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MaximumOccursOn"></a>

### *property* NormalStress.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MaximumOfMaximumOverTime"></a>

### *property* NormalStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MaximumOfMinimumOverTime"></a>

### *property* NormalStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Membrane"></a>

### *property* NormalStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MembraneBendingCenter"></a>

### *property* NormalStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MembraneBendingInside"></a>

### *property* NormalStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MembraneBendingOutside"></a>

### *property* NormalStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Minimum"></a>

### *property* NormalStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MinimumOccursOn"></a>

### *property* NormalStress.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MinimumOfMaximumOverTime"></a>

### *property* NormalStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.MinimumOfMinimumOverTime"></a>

### *property* NormalStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Mode"></a>

### *property* NormalStress.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.NamedSelections"></a>

### *property* NormalStress.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.NormalOrientation"></a>

### *property* NormalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Path"></a>

### *property* NormalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PeakCenter"></a>

### *property* NormalStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PeakInside"></a>

### *property* NormalStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PeakOutside"></a>

### *property* NormalStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PhaseIncrement"></a>

### *property* NormalStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Plies"></a>

### *property* NormalStress.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PlotData"></a>

### *property* NormalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Ply"></a>

### *property* NormalStress.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Position"></a>

### *property* NormalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Probability"></a>

### *property* NormalStress.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Properties"></a>

### *property* NormalStress.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.RPMSelection"></a>

### *property* NormalStress.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ReportedFrequency"></a>

### *property* NormalStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ScaleFactor"></a>

### *property* NormalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ScaleFactorValue"></a>

### *property* NormalStress.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ScopingMethod"></a>

### *property* NormalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.SetNumber"></a>

### *property* NormalStress.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.SolutionCombinationDriver"></a>

### *property* NormalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.SolverComponentIDs"></a>

### *property* NormalStress.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.StressStrainType"></a>

### *property* NormalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.SubScopeBy"></a>

### *property* NormalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Substep"></a>

### *property* NormalStress.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Subtype"></a>

### *property* NormalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Suppressed"></a>

### *property* NormalStress.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Surface"></a>

### *property* NormalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.SurfaceCoating"></a>

### *property* NormalStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.SweepingPhase"></a>

### *property* NormalStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ThroughThicknessBendingStress"></a>

### *property* NormalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Time"></a>

### *property* NormalStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TimeForMaximumOfMaximumValues"></a>

### *property* NormalStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TimeForMaximumOfMinimumValues"></a>

### *property* NormalStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TimeForMinimumOfMaximumValues"></a>

### *property* NormalStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TimeForMinimumOfMinimumValues"></a>

### *property* NormalStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Total"></a>

### *property* NormalStress.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TotalCenter"></a>

### *property* NormalStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TotalInside"></a>

### *property* NormalStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.TotalOutside"></a>

### *property* NormalStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.VisibleProperties"></a>

### *property* NormalStress.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NormalStress.Activate"></a>

### NormalStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AddAlert"></a>

### NormalStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AddComment"></a>

### NormalStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AddConvergence"></a>

### NormalStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AddFigure"></a>

### NormalStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.AddImage"></a>

### NormalStress.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ClearGeneratedData"></a>

### NormalStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CopyTo"></a>

### NormalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CreateParameter"></a>

### NormalStress.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.CreateResultsAtAllSets"></a>

### NormalStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Delete"></a>

### NormalStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.Duplicate"></a>

### NormalStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.DuplicateWithoutResults"></a>

### NormalStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.EvaluateAllResults"></a>

### NormalStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ExportAnimation"></a>

### NormalStress.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.ExportToTextFile"></a>

### NormalStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.FetchRemoteResults"></a>

### NormalStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.GetChildren"></a>

### NormalStress.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.GetParameter"></a>

### NormalStress.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.GroupAllSimilarChildren"></a>

### NormalStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.GroupSimilarObjects"></a>

### NormalStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PromoteToNamedSelection"></a>

### NormalStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PropertyByAPIName"></a>

### NormalStress.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.PropertyByName"></a>

### NormalStress.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.RemoveParameter"></a>

### NormalStress.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalStress.RenameBasedOnDefinition"></a>

### NormalStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

