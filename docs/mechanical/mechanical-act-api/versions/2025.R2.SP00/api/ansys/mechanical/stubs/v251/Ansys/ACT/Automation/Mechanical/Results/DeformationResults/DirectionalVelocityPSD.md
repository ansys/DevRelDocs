# `DirectionalVelocityPSD`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocityPSD"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocityPSD

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalVelocityPSD.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DirectionalVelocityPSD.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#DirectionalVelocityPSD.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#DirectionalVelocityPSD.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#DirectionalVelocityPSD.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#DirectionalVelocityPSD.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalVelocityPSD.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#DirectionalVelocityPSD.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#DirectionalVelocityPSD.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DirectionalVelocityPSD.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#DirectionalVelocityPSD.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#DirectionalVelocityPSD.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DirectionalVelocityPSD.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#DirectionalVelocityPSD.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#DirectionalVelocityPSD.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#DirectionalVelocityPSD.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#DirectionalVelocityPSD.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#DirectionalVelocityPSD.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#DirectionalVelocityPSD.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DirectionalVelocityPSD.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DirectionalVelocityPSD.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalVelocityPSD.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#DirectionalVelocityPSD.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#DirectionalVelocityPSD.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DirectionalVelocityPSD.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DirectionalVelocityPSD.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#DirectionalVelocityPSD.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationInG`](#DirectionalVelocityPSD.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                        |
| [`AllowPhaseSweep`](#DirectionalVelocityPSD.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                        |
| [`Amplitude`](#DirectionalVelocityPSD.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#DirectionalVelocityPSD.Average)                                                     | Gets the Average.                                                        |
| [`By`](#DirectionalVelocityPSD.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#DirectionalVelocityPSD.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#DirectionalVelocityPSD.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#DirectionalVelocityPSD.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#DirectionalVelocityPSD.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#DirectionalVelocityPSD.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#DirectionalVelocityPSD.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`CyclicMode`](#DirectionalVelocityPSD.CyclicMode)                                               | Gets or sets the CyclicMode.                                             |
| [`CyclicPhase`](#DirectionalVelocityPSD.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                            |
| [`DampedFrequency`](#DirectionalVelocityPSD.DampedFrequency)                                     | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#DirectionalVelocityPSD.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#DirectionalVelocityPSD.DeformationType)                                     | Gets or sets the DeformationType.                                        |
| [`DisplayOption`](#DirectionalVelocityPSD.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#DirectionalVelocityPSD.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#DirectionalVelocityPSD.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`EnvironmentSelection`](#DirectionalVelocityPSD.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                   |
| [`Figures`](#DirectionalVelocityPSD.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#DirectionalVelocityPSD.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#DirectionalVelocityPSD.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#DirectionalVelocityPSD.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`HarmonicIndex`](#DirectionalVelocityPSD.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                          |
| [`Identifier`](#DirectionalVelocityPSD.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#DirectionalVelocityPSD.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#DirectionalVelocityPSD.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#DirectionalVelocityPSD.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#DirectionalVelocityPSD.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#DirectionalVelocityPSD.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`IterationStep`](#DirectionalVelocityPSD.IterationStep)                                         | Gets or sets the IterationStep.                                          |
| [`LoadMultiplier`](#DirectionalVelocityPSD.LoadMultiplier)                                       | Gets the LoadMultiplier.                                                 |
| [`LoadStep`](#DirectionalVelocityPSD.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalVelocityPSD.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalVelocityPSD.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalVelocityPSD.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalVelocityPSD.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#DirectionalVelocityPSD.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#DirectionalVelocityPSD.Location)                                                   | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#DirectionalVelocityPSD.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#DirectionalVelocityPSD.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#DirectionalVelocityPSD.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#DirectionalVelocityPSD.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#DirectionalVelocityPSD.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#DirectionalVelocityPSD.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#DirectionalVelocityPSD.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#DirectionalVelocityPSD.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#DirectionalVelocityPSD.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#DirectionalVelocityPSD.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                              |
| [`Mode`](#DirectionalVelocityPSD.Mode)                                                           | Gets or sets the Mode.                                                   |
| [`NamedSelections`](#DirectionalVelocityPSD.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#DirectionalVelocityPSD.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#DirectionalVelocityPSD.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#DirectionalVelocityPSD.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#DirectionalVelocityPSD.PlotData)                                                   | Gets the result table.                                                   |
| [`Probability`](#DirectionalVelocityPSD.Probability)                                             | Gets the Probability.                                                    |
| [`Properties`](#DirectionalVelocityPSD.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#DirectionalVelocityPSD.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`Reference`](#DirectionalVelocityPSD.Reference)                                                 | Gets the Reference.                                                      |
| [`ReportedFrequency`](#DirectionalVelocityPSD.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScaleFactor`](#DirectionalVelocityPSD.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                            |
| [`ScaleFactorValue`](#DirectionalVelocityPSD.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                       |
| [`ScopingMethod`](#DirectionalVelocityPSD.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#DirectionalVelocityPSD.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#DirectionalVelocityPSD.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#DirectionalVelocityPSD.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Stability`](#DirectionalVelocityPSD.Stability)                                                 | Gets the Stability.                                                      |
| [`Substep`](#DirectionalVelocityPSD.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#DirectionalVelocityPSD.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#DirectionalVelocityPSD.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#DirectionalVelocityPSD.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#DirectionalVelocityPSD.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#DirectionalVelocityPSD.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#DirectionalVelocityPSD.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#DirectionalVelocityPSD.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#DirectionalVelocityPSD.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#DirectionalVelocityPSD.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#DirectionalVelocityPSD.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#DirectionalVelocityPSD.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalVelocityPSD.AccelerationInG"></a>

### *property* DirectionalVelocityPSD.AccelerationInG *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.AllowPhaseSweep"></a>

### *property* DirectionalVelocityPSD.AllowPhaseSweep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Amplitude"></a>

### *property* DirectionalVelocityPSD.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Average"></a>

### *property* DirectionalVelocityPSD.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.By"></a>

### *property* DirectionalVelocityPSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CalculateTimeHistory"></a>

### *property* DirectionalVelocityPSD.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Children"></a>

### *property* DirectionalVelocityPSD.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CombinationNumber"></a>

### *property* DirectionalVelocityPSD.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Comments"></a>

### *property* DirectionalVelocityPSD.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CoordinateSystem"></a>

### *property* DirectionalVelocityPSD.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CrackFrontNumber"></a>

### *property* DirectionalVelocityPSD.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CyclicMode"></a>

### *property* DirectionalVelocityPSD.CyclicMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CyclicPhase"></a>

### *property* DirectionalVelocityPSD.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DampedFrequency"></a>

### *property* DirectionalVelocityPSD.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DataModelObjectCategory"></a>

### *property* DirectionalVelocityPSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DeformationType"></a>

### *property* DirectionalVelocityPSD.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DisplayOption"></a>

### *property* DirectionalVelocityPSD.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DisplayTime"></a>

### *property* DirectionalVelocityPSD.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DpfEvaluation"></a>

### *property* DirectionalVelocityPSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.EnvironmentSelection"></a>

### *property* DirectionalVelocityPSD.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Figures"></a>

### *property* DirectionalVelocityPSD.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Frequency"></a>

### *property* DirectionalVelocityPSD.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.GlobalIDs"></a>

### *property* DirectionalVelocityPSD.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.GraphControlsXAxis"></a>

### *property* DirectionalVelocityPSD.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.HarmonicIndex"></a>

### *property* DirectionalVelocityPSD.HarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Identifier"></a>

### *property* DirectionalVelocityPSD.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Images"></a>

### *property* DirectionalVelocityPSD.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.InternalObject"></a>

### *property* DirectionalVelocityPSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.IsSolved"></a>

### *property* DirectionalVelocityPSD.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ItemType"></a>

### *property* DirectionalVelocityPSD.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.IterationNumber"></a>

### *property* DirectionalVelocityPSD.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.IterationStep"></a>

### *property* DirectionalVelocityPSD.IterationStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadMultiplier"></a>

### *property* DirectionalVelocityPSD.LoadMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadStep"></a>

### *property* DirectionalVelocityPSD.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalVelocityPSD.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalVelocityPSD.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalVelocityPSD.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalVelocityPSD.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LoadStepNumber"></a>

### *property* DirectionalVelocityPSD.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Location"></a>

### *property* DirectionalVelocityPSD.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.LogarithmicDecrement"></a>

### *property* DirectionalVelocityPSD.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Maximum"></a>

### *property* DirectionalVelocityPSD.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.MaximumOccursOn"></a>

### *property* DirectionalVelocityPSD.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.MaximumOfMaximumOverTime"></a>

### *property* DirectionalVelocityPSD.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.MaximumOfMinimumOverTime"></a>

### *property* DirectionalVelocityPSD.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Minimum"></a>

### *property* DirectionalVelocityPSD.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.MinimumOccursOn"></a>

### *property* DirectionalVelocityPSD.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.MinimumOfMaximumOverTime"></a>

### *property* DirectionalVelocityPSD.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.MinimumOfMinimumOverTime"></a>

### *property* DirectionalVelocityPSD.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ModalDampingRatio"></a>

### *property* DirectionalVelocityPSD.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Mode"></a>

### *property* DirectionalVelocityPSD.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.NamedSelections"></a>

### *property* DirectionalVelocityPSD.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.NormalOrientation"></a>

### *property* DirectionalVelocityPSD.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Path"></a>

### *property* DirectionalVelocityPSD.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.PhaseIncrement"></a>

### *property* DirectionalVelocityPSD.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.PlotData"></a>

### *property* DirectionalVelocityPSD.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Probability"></a>

### *property* DirectionalVelocityPSD.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Properties"></a>

### *property* DirectionalVelocityPSD.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.RPMSelection"></a>

### *property* DirectionalVelocityPSD.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Reference"></a>

### *property* DirectionalVelocityPSD.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ReportedFrequency"></a>

### *property* DirectionalVelocityPSD.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ScaleFactor"></a>

### *property* DirectionalVelocityPSD.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ScaleFactorValue"></a>

### *property* DirectionalVelocityPSD.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ScopingMethod"></a>

### *property* DirectionalVelocityPSD.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.SetNumber"></a>

### *property* DirectionalVelocityPSD.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.SolutionCombinationDriver"></a>

### *property* DirectionalVelocityPSD.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.SolverComponentIDs"></a>

### *property* DirectionalVelocityPSD.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Stability"></a>

### *property* DirectionalVelocityPSD.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Substep"></a>

### *property* DirectionalVelocityPSD.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Suppressed"></a>

### *property* DirectionalVelocityPSD.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Surface"></a>

### *property* DirectionalVelocityPSD.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.SurfaceCoating"></a>

### *property* DirectionalVelocityPSD.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.SweepingPhase"></a>

### *property* DirectionalVelocityPSD.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Time"></a>

### *property* DirectionalVelocityPSD.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalVelocityPSD.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalVelocityPSD.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalVelocityPSD.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalVelocityPSD.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Total"></a>

### *property* DirectionalVelocityPSD.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.VisibleProperties"></a>

### *property* DirectionalVelocityPSD.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalVelocityPSD.Activate"></a>

### DirectionalVelocityPSD.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.AddAlert"></a>

### DirectionalVelocityPSD.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.AddComment"></a>

### DirectionalVelocityPSD.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.AddConvergence"></a>

### DirectionalVelocityPSD.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.AddFigure"></a>

### DirectionalVelocityPSD.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.AddImage"></a>

### DirectionalVelocityPSD.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ClearGeneratedData"></a>

### DirectionalVelocityPSD.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CopyTo"></a>

### DirectionalVelocityPSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CreateParameter"></a>

### DirectionalVelocityPSD.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.CreateResultsAtAllSets"></a>

### DirectionalVelocityPSD.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Delete"></a>

### DirectionalVelocityPSD.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.Duplicate"></a>

### DirectionalVelocityPSD.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.DuplicateWithoutResults"></a>

### DirectionalVelocityPSD.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.EvaluateAllResults"></a>

### DirectionalVelocityPSD.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ExportAnimation"></a>

### DirectionalVelocityPSD.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.ExportToTextFile"></a>

### DirectionalVelocityPSD.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.FetchRemoteResults"></a>

### DirectionalVelocityPSD.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.GetChildren"></a>

### DirectionalVelocityPSD.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.GetParameter"></a>

### DirectionalVelocityPSD.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.GroupAllSimilarChildren"></a>

### DirectionalVelocityPSD.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.GroupSimilarObjects"></a>

### DirectionalVelocityPSD.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.PromoteToNamedSelection"></a>

### DirectionalVelocityPSD.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.PropertyByAPIName"></a>

### DirectionalVelocityPSD.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.PropertyByName"></a>

### DirectionalVelocityPSD.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.RemoveParameter"></a>

### DirectionalVelocityPSD.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalVelocityPSD.RenameBasedOnDefinition"></a>

### DirectionalVelocityPSD.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

