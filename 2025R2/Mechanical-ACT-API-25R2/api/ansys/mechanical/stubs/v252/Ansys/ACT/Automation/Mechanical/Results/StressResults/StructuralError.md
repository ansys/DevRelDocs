# `StructuralError`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.StructuralError"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.StructuralError

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StructuralError.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#StructuralError.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#StructuralError.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#StructuralError.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#StructuralError.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#StructuralError.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#StructuralError.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#StructuralError.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#StructuralError.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#StructuralError.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#StructuralError.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#StructuralError.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#StructuralError.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#StructuralError.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#StructuralError.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#StructuralError.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#StructuralError.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#StructuralError.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#StructuralError.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#StructuralError.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#StructuralError.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#StructuralError.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#StructuralError.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#StructuralError.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#StructuralError.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#StructuralError.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#StructuralError.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#StructuralError.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#StructuralError.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#StructuralError.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#StructuralError.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`AverageRadiusOfCurvature`](#StructuralError.AverageRadiusOfCurvature)                   | Gets or sets the AverageRadiusOfCurvature.                               |
| [`BendingInside`](#StructuralError.BendingInside)                                         | Gets the BendingInside.                                                  |
| [`BendingOutside`](#StructuralError.BendingOutside)                                       | Gets the BendingOutside.                                                 |
| [`By`](#StructuralError.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#StructuralError.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#StructuralError.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#StructuralError.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#StructuralError.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#StructuralError.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#StructuralError.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#StructuralError.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`DataModelObjectCategory`](#StructuralError.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#StructuralError.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#StructuralError.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#StructuralError.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#StructuralError.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#StructuralError.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#StructuralError.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#StructuralError.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#StructuralError.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#StructuralError.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#StructuralError.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#StructuralError.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#StructuralError.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#StructuralError.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#StructuralError.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#StructuralError.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#StructuralError.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`Layer`](#StructuralError.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`Linearized2DBehavior`](#StructuralError.Linearized2DBehavior)                           | Gets or sets the Linearized2DBehavior.                                   |
| [`LoadMultiplier`](#StructuralError.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#StructuralError.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#StructuralError.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#StructuralError.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#StructuralError.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#StructuralError.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#StructuralError.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#StructuralError.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#StructuralError.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#StructuralError.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#StructuralError.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#StructuralError.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Membrane`](#StructuralError.Membrane)                                                   | Gets the Membrane.                                                       |
| [`MembraneBendingCenter`](#StructuralError.MembraneBendingCenter)                         | Gets the MembraneBendingCenter.                                          |
| [`MembraneBendingInside`](#StructuralError.MembraneBendingInside)                         | Gets the MembraneBendingInside.                                          |
| [`MembraneBendingOutside`](#StructuralError.MembraneBendingOutside)                       | Gets the MembraneBendingOutside.                                         |
| [`Minimum`](#StructuralError.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#StructuralError.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#StructuralError.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#StructuralError.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`Mode`](#StructuralError.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#StructuralError.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#StructuralError.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#StructuralError.Path)                                                           | Path property.                                                           |
| [`PeakCenter`](#StructuralError.PeakCenter)                                               | Gets the PeakCenter.                                                     |
| [`PeakInside`](#StructuralError.PeakInside)                                               | Gets the PeakInside.                                                     |
| [`PeakOutside`](#StructuralError.PeakOutside)                                             | Gets the PeakOutside.                                                    |
| [`PhaseIncrement`](#StructuralError.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`Plies`](#StructuralError.Plies)                                                         | Plies property.                                                          |
| [`PlotData`](#StructuralError.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#StructuralError.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#StructuralError.Position)                                                   | Gets or sets the Position.                                               |
| [`Probability`](#StructuralError.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#StructuralError.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#StructuralError.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#StructuralError.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#StructuralError.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScopingMethod`](#StructuralError.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#StructuralError.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#StructuralError.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#StructuralError.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`StressStrainType`](#StructuralError.StressStrainType)                                   | Gets or sets the StressStrainType.                                       |
| [`SubScopeBy`](#StructuralError.SubScopeBy)                                               | Gets or sets the SubScopeBy.                                             |
| [`Substep`](#StructuralError.Substep)                                                     | Gets the Substep.                                                        |
| [`Subtype`](#StructuralError.Subtype)                                                     | Gets or sets the Subtype.                                                |
| [`Suppressed`](#StructuralError.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#StructuralError.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#StructuralError.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#StructuralError.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`ThroughThicknessBendingStress`](#StructuralError.ThroughThicknessBendingStress)         | Gets or sets the ThroughThicknessBendingStress.                          |
| [`Time`](#StructuralError.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#StructuralError.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#StructuralError.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#StructuralError.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#StructuralError.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#StructuralError.Total)                                                         | Gets the Total.                                                          |
| [`TotalCenter`](#StructuralError.TotalCenter)                                             | Gets the TotalCenter.                                                    |
| [`TotalInside`](#StructuralError.TotalInside)                                             | Gets the TotalInside.                                                    |
| [`TotalOutside`](#StructuralError.TotalOutside)                                           | Gets the TotalOutside.                                                   |
| [`VisibleProperties`](#StructuralError.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="StructuralError.Amplitude"></a>

### *property* StructuralError.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Average"></a>

### *property* StructuralError.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AverageAcrossBodies"></a>

### *property* StructuralError.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AverageRadiusOfCurvature"></a>

### *property* StructuralError.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.BendingInside"></a>

### *property* StructuralError.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.BendingOutside"></a>

### *property* StructuralError.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.By"></a>

### *property* StructuralError.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CalculateTimeHistory"></a>

### *property* StructuralError.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Children"></a>

### *property* StructuralError.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CombinationNumber"></a>

### *property* StructuralError.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Comments"></a>

### *property* StructuralError.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CoordinateSystem"></a>

### *property* StructuralError.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CrackFrontNumber"></a>

### *property* StructuralError.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CyclicMode"></a>

### *property* StructuralError.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.DataModelObjectCategory"></a>

### *property* StructuralError.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.DisplayOption"></a>

### *property* StructuralError.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.DisplayTime"></a>

### *property* StructuralError.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.DpfEvaluation"></a>

### *property* StructuralError.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.EnvironmentSelection"></a>

### *property* StructuralError.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Figures"></a>

### *property* StructuralError.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Frequency"></a>

### *property* StructuralError.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.GlobalIDs"></a>

### *property* StructuralError.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.GraphControlsXAxis"></a>

### *property* StructuralError.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.HarmonicIndex"></a>

### *property* StructuralError.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Identifier"></a>

### *property* StructuralError.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Images"></a>

### *property* StructuralError.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.InternalObject"></a>

### *property* StructuralError.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.IsSolved"></a>

### *property* StructuralError.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ItemType"></a>

### *property* StructuralError.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.IterationNumber"></a>

### *property* StructuralError.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.IterationStep"></a>

### *property* StructuralError.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Layer"></a>

### *property* StructuralError.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Linearized2DBehavior"></a>

### *property* StructuralError.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadMultiplier"></a>

### *property* StructuralError.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadStep"></a>

### *property* StructuralError.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadStepForMaximumOfMaximumValues"></a>

### *property* StructuralError.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadStepForMaximumOfMinimumValues"></a>

### *property* StructuralError.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadStepForMinimumOfMaximumValues"></a>

### *property* StructuralError.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadStepForMinimumOfMinimumValues"></a>

### *property* StructuralError.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.LoadStepNumber"></a>

### *property* StructuralError.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Location"></a>

### *property* StructuralError.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Maximum"></a>

### *property* StructuralError.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MaximumOccursOn"></a>

### *property* StructuralError.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MaximumOfMaximumOverTime"></a>

### *property* StructuralError.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MaximumOfMinimumOverTime"></a>

### *property* StructuralError.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Membrane"></a>

### *property* StructuralError.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MembraneBendingCenter"></a>

### *property* StructuralError.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MembraneBendingInside"></a>

### *property* StructuralError.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MembraneBendingOutside"></a>

### *property* StructuralError.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Minimum"></a>

### *property* StructuralError.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MinimumOccursOn"></a>

### *property* StructuralError.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MinimumOfMaximumOverTime"></a>

### *property* StructuralError.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.MinimumOfMinimumOverTime"></a>

### *property* StructuralError.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Mode"></a>

### *property* StructuralError.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.NamedSelections"></a>

### *property* StructuralError.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.NormalOrientation"></a>

### *property* StructuralError.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Path"></a>

### *property* StructuralError.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PeakCenter"></a>

### *property* StructuralError.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PeakInside"></a>

### *property* StructuralError.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PeakOutside"></a>

### *property* StructuralError.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PhaseIncrement"></a>

### *property* StructuralError.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Plies"></a>

### *property* StructuralError.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PlotData"></a>

### *property* StructuralError.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Ply"></a>

### *property* StructuralError.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Position"></a>

### *property* StructuralError.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Probability"></a>

### *property* StructuralError.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Properties"></a>

### *property* StructuralError.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.RPMSelection"></a>

### *property* StructuralError.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ReportedFrequency"></a>

### *property* StructuralError.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ScaleFactor"></a>

### *property* StructuralError.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ScopingMethod"></a>

### *property* StructuralError.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.SetNumber"></a>

### *property* StructuralError.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.SolutionCombinationDriver"></a>

### *property* StructuralError.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.SolverComponentIDs"></a>

### *property* StructuralError.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.StressStrainType"></a>

### *property* StructuralError.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.SubScopeBy"></a>

### *property* StructuralError.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Substep"></a>

### *property* StructuralError.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Subtype"></a>

### *property* StructuralError.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Suppressed"></a>

### *property* StructuralError.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Surface"></a>

### *property* StructuralError.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.SurfaceCoating"></a>

### *property* StructuralError.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.SweepingPhase"></a>

### *property* StructuralError.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ThroughThicknessBendingStress"></a>

### *property* StructuralError.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Time"></a>

### *property* StructuralError.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TimeForMaximumOfMaximumValues"></a>

### *property* StructuralError.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TimeForMaximumOfMinimumValues"></a>

### *property* StructuralError.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TimeForMinimumOfMaximumValues"></a>

### *property* StructuralError.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TimeForMinimumOfMinimumValues"></a>

### *property* StructuralError.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Total"></a>

### *property* StructuralError.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TotalCenter"></a>

### *property* StructuralError.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TotalInside"></a>

### *property* StructuralError.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.TotalOutside"></a>

### *property* StructuralError.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.VisibleProperties"></a>

### *property* StructuralError.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StructuralError.Activate"></a>

### StructuralError.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AddAlert"></a>

### StructuralError.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AddComment"></a>

### StructuralError.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AddConvergence"></a>

### StructuralError.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AddFigure"></a>

### StructuralError.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.AddImage"></a>

### StructuralError.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ClearGeneratedData"></a>

### StructuralError.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CopyTo"></a>

### StructuralError.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CreateParameter"></a>

### StructuralError.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.CreateResultsAtAllSets"></a>

### StructuralError.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Delete"></a>

### StructuralError.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.Duplicate"></a>

### StructuralError.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.DuplicateWithoutResults"></a>

### StructuralError.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.EvaluateAllResults"></a>

### StructuralError.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ExportAnimation"></a>

### StructuralError.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.ExportToTextFile"></a>

### StructuralError.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.FetchRemoteResults"></a>

### StructuralError.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.GetChildren"></a>

### StructuralError.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.GetParameter"></a>

### StructuralError.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.GroupAllSimilarChildren"></a>

### StructuralError.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.GroupSimilarObjects"></a>

### StructuralError.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PromoteToNamedSelection"></a>

### StructuralError.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PropertyByAPIName"></a>

### StructuralError.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.PropertyByName"></a>

### StructuralError.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.RemoveParameter"></a>

### StructuralError.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.RenameBasedOnDefinition"></a>

### StructuralError.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StructuralError.RetrieveResult"></a>

### StructuralError.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

