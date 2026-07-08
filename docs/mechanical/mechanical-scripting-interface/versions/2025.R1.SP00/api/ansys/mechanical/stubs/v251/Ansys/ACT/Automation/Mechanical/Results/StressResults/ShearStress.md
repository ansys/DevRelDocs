# `ShearStress`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShearStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.ShearStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ShearStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ShearStress.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ShearStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ShearStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ShearStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ShearStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ShearStress.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ShearStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ShearStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ShearStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ShearStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ShearStress.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ShearStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ShearStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ShearStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ShearStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ShearStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ShearStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ShearStress.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ShearStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ShearStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ShearStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ShearStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ShearStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ShearStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ShearStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ShearStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#ShearStress.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#ShearStress.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#ShearStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#ShearStress.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#ShearStress.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#ShearStress.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#ShearStress.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ShearStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ShearStress.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ShearStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ShearStress.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#ShearStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ShearStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#ShearStress.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#ShearStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ShearStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ShearStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ShearStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#ShearStress.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#ShearStress.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#ShearStress.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#ShearStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ShearStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#ShearStress.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#ShearStress.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ShearStress.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ShearStress.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ShearStress.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ShearStress.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ShearStress.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#ShearStress.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#ShearStress.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#ShearStress.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#ShearStress.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#ShearStress.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ShearStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ShearStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ShearStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ShearStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ShearStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ShearStress.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ShearStress.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ShearStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ShearStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ShearStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#ShearStress.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#ShearStress.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#ShearStress.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#ShearStress.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#ShearStress.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ShearStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ShearStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ShearStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#ShearStress.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#ShearStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ShearStress.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#ShearStress.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#ShearStress.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#ShearStress.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#ShearStress.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#ShearStress.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#ShearStress.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#ShearStress.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#ShearStress.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#ShearStress.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#ShearStress.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#ShearStress.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ShearStress.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#ShearStress.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#ShearStress.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#ShearStress.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#ShearStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ShearStress.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`ShearOrientation`](#ShearStress.ShearOrientation)                                   | Gets or sets the ShearOrientation.                                       |
| [`SolutionCombinationDriver`](#ShearStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ShearStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#ShearStress.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#ShearStress.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#ShearStress.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#ShearStress.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#ShearStress.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ShearStress.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ShearStress.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#ShearStress.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#ShearStress.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#ShearStress.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ShearStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ShearStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ShearStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ShearStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ShearStress.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#ShearStress.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#ShearStress.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#ShearStress.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#ShearStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ShearStress.Amplitude"></a>

### *property* ShearStress.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Average"></a>

### *property* ShearStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AverageAcrossBodies"></a>

### *property* ShearStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AverageRadiusOfCurvature"></a>

### *property* ShearStress.AverageRadiusOfCurvature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.BendingInside"></a>

### *property* ShearStress.BendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.BendingOutside"></a>

### *property* ShearStress.BendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.By"></a>

### *property* ShearStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CalculateTimeHistory"></a>

### *property* ShearStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Children"></a>

### *property* ShearStress.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CombinationNumber"></a>

### *property* ShearStress.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Comments"></a>

### *property* ShearStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CoordinateSystem"></a>

### *property* ShearStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CrackFrontNumber"></a>

### *property* ShearStress.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CyclicMode"></a>

### *property* ShearStress.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.DataModelObjectCategory"></a>

### *property* ShearStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.DisplayOption"></a>

### *property* ShearStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.DisplayTime"></a>

### *property* ShearStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.DpfEvaluation"></a>

### *property* ShearStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.EnvironmentSelection"></a>

### *property* ShearStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Figures"></a>

### *property* ShearStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Frequency"></a>

### *property* ShearStress.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.GlobalIDs"></a>

### *property* ShearStress.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.GraphControlsXAxis"></a>

### *property* ShearStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.HarmonicIndex"></a>

### *property* ShearStress.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Identifier"></a>

### *property* ShearStress.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Images"></a>

### *property* ShearStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.InternalObject"></a>

### *property* ShearStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.IsSolved"></a>

### *property* ShearStress.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ItemType"></a>

### *property* ShearStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.IterationNumber"></a>

### *property* ShearStress.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.IterationStep"></a>

### *property* ShearStress.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Layer"></a>

### *property* ShearStress.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Linearized2DBehavior"></a>

### *property* ShearStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadMultiplier"></a>

### *property* ShearStress.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadStep"></a>

### *property* ShearStress.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShearStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShearStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShearStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShearStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.LoadStepNumber"></a>

### *property* ShearStress.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Location"></a>

### *property* ShearStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Maximum"></a>

### *property* ShearStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MaximumOccursOn"></a>

### *property* ShearStress.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MaximumOfMaximumOverTime"></a>

### *property* ShearStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MaximumOfMinimumOverTime"></a>

### *property* ShearStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Membrane"></a>

### *property* ShearStress.Membrane *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MembraneBendingCenter"></a>

### *property* ShearStress.MembraneBendingCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MembraneBendingInside"></a>

### *property* ShearStress.MembraneBendingInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MembraneBendingOutside"></a>

### *property* ShearStress.MembraneBendingOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Minimum"></a>

### *property* ShearStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MinimumOccursOn"></a>

### *property* ShearStress.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MinimumOfMaximumOverTime"></a>

### *property* ShearStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.MinimumOfMinimumOverTime"></a>

### *property* ShearStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Mode"></a>

### *property* ShearStress.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.NamedSelections"></a>

### *property* ShearStress.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.NormalOrientation"></a>

### *property* ShearStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Path"></a>

### *property* ShearStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PeakCenter"></a>

### *property* ShearStress.PeakCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PeakInside"></a>

### *property* ShearStress.PeakInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PeakOutside"></a>

### *property* ShearStress.PeakOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PhaseIncrement"></a>

### *property* ShearStress.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Plies"></a>

### *property* ShearStress.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PlotData"></a>

### *property* ShearStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Ply"></a>

### *property* ShearStress.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Position"></a>

### *property* ShearStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Probability"></a>

### *property* ShearStress.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Properties"></a>

### *property* ShearStress.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.RPMSelection"></a>

### *property* ShearStress.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ReportedFrequency"></a>

### *property* ShearStress.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ScaleFactor"></a>

### *property* ShearStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ScaleFactorValue"></a>

### *property* ShearStress.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ScopingMethod"></a>

### *property* ShearStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.SetNumber"></a>

### *property* ShearStress.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ShearOrientation"></a>

### *property* ShearStress.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.SolutionCombinationDriver"></a>

### *property* ShearStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.SolverComponentIDs"></a>

### *property* ShearStress.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.StressStrainType"></a>

### *property* ShearStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.SubScopeBy"></a>

### *property* ShearStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Substep"></a>

### *property* ShearStress.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Subtype"></a>

### *property* ShearStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Suppressed"></a>

### *property* ShearStress.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Surface"></a>

### *property* ShearStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.SurfaceCoating"></a>

### *property* ShearStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.SweepingPhase"></a>

### *property* ShearStress.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ThroughThicknessBendingStress"></a>

### *property* ShearStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Time"></a>

### *property* ShearStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TimeForMaximumOfMaximumValues"></a>

### *property* ShearStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TimeForMaximumOfMinimumValues"></a>

### *property* ShearStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TimeForMinimumOfMaximumValues"></a>

### *property* ShearStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TimeForMinimumOfMinimumValues"></a>

### *property* ShearStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Total"></a>

### *property* ShearStress.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TotalCenter"></a>

### *property* ShearStress.TotalCenter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TotalInside"></a>

### *property* ShearStress.TotalInside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.TotalOutside"></a>

### *property* ShearStress.TotalOutside *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.VisibleProperties"></a>

### *property* ShearStress.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShearStress.Activate"></a>

### ShearStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AddAlert"></a>

### ShearStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AddComment"></a>

### ShearStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AddConvergence"></a>

### ShearStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AddFigure"></a>

### ShearStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.AddImage"></a>

### ShearStress.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ClearGeneratedData"></a>

### ShearStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CopyTo"></a>

### ShearStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CreateParameter"></a>

### ShearStress.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.CreateResultsAtAllSets"></a>

### ShearStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Delete"></a>

### ShearStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.Duplicate"></a>

### ShearStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.DuplicateWithoutResults"></a>

### ShearStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.EvaluateAllResults"></a>

### ShearStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ExportAnimation"></a>

### ShearStress.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.ExportToTextFile"></a>

### ShearStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.FetchRemoteResults"></a>

### ShearStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.GetChildren"></a>

### ShearStress.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.GetParameter"></a>

### ShearStress.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.GroupAllSimilarChildren"></a>

### ShearStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.GroupSimilarObjects"></a>

### ShearStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PromoteToNamedSelection"></a>

### ShearStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PropertyByAPIName"></a>

### ShearStress.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.PropertyByName"></a>

### ShearStress.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.RemoveParameter"></a>

### ShearStress.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShearStress.RenameBasedOnDefinition"></a>

### ShearStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

