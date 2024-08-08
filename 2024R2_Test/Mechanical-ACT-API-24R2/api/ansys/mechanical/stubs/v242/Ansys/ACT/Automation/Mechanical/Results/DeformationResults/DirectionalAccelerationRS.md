# `DirectionalAccelerationRS`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAccelerationRS

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalAccelerationRS.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalAccelerationRS.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalAccelerationRS.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalAccelerationRS.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalAccelerationRS.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalAccelerationRS.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalAccelerationRS.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalAccelerationRS.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalAccelerationRS.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalAccelerationRS.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalAccelerationRS.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalAccelerationRS.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalAccelerationRS.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalAccelerationRS.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalAccelerationRS.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalAccelerationRS.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalAccelerationRS.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalAccelerationRS.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalAccelerationRS.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalAccelerationRS.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalAccelerationRS.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalAccelerationRS.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalAccelerationRS.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalAccelerationRS.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalAccelerationRS.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalAccelerationRS.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#DirectionalAccelerationRS.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](#DirectionalAccelerationRS.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Mode`](#DirectionalAccelerationRS.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#DirectionalAccelerationRS.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#DirectionalAccelerationRS.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`EnvironmentSelection`](#DirectionalAccelerationRS.EnvironmentSelection)                           | Gets or sets the EnvironmentSelection.                                 |
| [`LogarithmicDecrement`](#DirectionalAccelerationRS.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#DirectionalAccelerationRS.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`HarmonicIndex`](#DirectionalAccelerationRS.HarmonicIndex)                                         | Gets or sets the HarmonicIndex.                                        |
| [`CyclicMode`](#DirectionalAccelerationRS.CyclicMode)                                               | Gets or sets the CyclicMode.                                           |
| [`IterationStep`](#DirectionalAccelerationRS.IterationStep)                                         | Gets or sets the IterationStep.                                        |
| [`LoadMultiplier`](#DirectionalAccelerationRS.LoadMultiplier)                                       | Gets the LoadMultiplier.                                               |
| [`Probability`](#DirectionalAccelerationRS.Probability)                                             | Gets the Probability.                                                  |
| [`ScaleFactorValue`](#DirectionalAccelerationRS.ScaleFactorValue)                                   | Gets or sets the ScaleFactorValue.                                     |
| [`Stability`](#DirectionalAccelerationRS.Stability)                                                 | Gets the Stability.                                                    |
| [`CyclicPhase`](#DirectionalAccelerationRS.CyclicPhase)                                             | Gets or sets the CyclicPhase.                                          |
| [`SweepingPhase`](#DirectionalAccelerationRS.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#DirectionalAccelerationRS.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#DirectionalAccelerationRS.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`DeformationType`](#DirectionalAccelerationRS.DeformationType)                                     | Gets or sets the DeformationType.                                      |
| [`Reference`](#DirectionalAccelerationRS.Reference)                                                 | Gets the Reference.                                                    |
| [`ScaleFactor`](#DirectionalAccelerationRS.ScaleFactor)                                             | Gets or sets the ScaleFactor.                                          |
| [`AccelerationInG`](#DirectionalAccelerationRS.AccelerationInG)                                     | Gets or sets the AccelerationInG.                                      |
| [`Amplitude`](#DirectionalAccelerationRS.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`AllowPhaseSweep`](#DirectionalAccelerationRS.AllowPhaseSweep)                                     | Gets or sets the AllowPhaseSweep.                                      |
| [`PlotData`](#DirectionalAccelerationRS.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#DirectionalAccelerationRS.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalAccelerationRS.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalAccelerationRS.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalAccelerationRS.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalAccelerationRS.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalAccelerationRS.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalAccelerationRS.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalAccelerationRS.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalAccelerationRS.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalAccelerationRS.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#DirectionalAccelerationRS.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalAccelerationRS.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalAccelerationRS.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalAccelerationRS.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalAccelerationRS.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#DirectionalAccelerationRS.Path)                                                           | Path property.                                                         |
| [`Surface`](#DirectionalAccelerationRS.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#DirectionalAccelerationRS.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#DirectionalAccelerationRS.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#DirectionalAccelerationRS.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#DirectionalAccelerationRS.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalAccelerationRS.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalAccelerationRS.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalAccelerationRS.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalAccelerationRS.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalAccelerationRS.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalAccelerationRS.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalAccelerationRS.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalAccelerationRS.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalAccelerationRS.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#DirectionalAccelerationRS.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#DirectionalAccelerationRS.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalAccelerationRS.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalAccelerationRS.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalAccelerationRS.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalAccelerationRS.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalAccelerationRS.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalAccelerationRS.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalAccelerationRS.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#DirectionalAccelerationRS.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalAccelerationRS.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalAccelerationRS.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalAccelerationRS.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalAccelerationRS.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalAccelerationRS.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalAccelerationRS.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalAccelerationRS.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#DirectionalAccelerationRS.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalAccelerationRS.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalAccelerationRS.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalAccelerationRS.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalAccelerationRS.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalAccelerationRS.InternalObject"></a>

### *property* DirectionalAccelerationRS.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.NormalOrientation"></a>

### *property* DirectionalAccelerationRS.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DataModelObjectCategory"></a>

### *property* DirectionalAccelerationRS.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Mode"></a>

### *property* DirectionalAccelerationRS.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ReportedFrequency"></a>

### *property* DirectionalAccelerationRS.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DampedFrequency"></a>

### *property* DirectionalAccelerationRS.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.EnvironmentSelection"></a>

### *property* DirectionalAccelerationRS.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LogarithmicDecrement"></a>

### *property* DirectionalAccelerationRS.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ModalDampingRatio"></a>

### *property* DirectionalAccelerationRS.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.HarmonicIndex"></a>

### *property* DirectionalAccelerationRS.HarmonicIndex *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CyclicMode"></a>

### *property* DirectionalAccelerationRS.CyclicMode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.IterationStep"></a>

### *property* DirectionalAccelerationRS.IterationStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadMultiplier"></a>

### *property* DirectionalAccelerationRS.LoadMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Probability"></a>

### *property* DirectionalAccelerationRS.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ScaleFactorValue"></a>

### *property* DirectionalAccelerationRS.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Stability"></a>

### *property* DirectionalAccelerationRS.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CyclicPhase"></a>

### *property* DirectionalAccelerationRS.CyclicPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.SweepingPhase"></a>

### *property* DirectionalAccelerationRS.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.PhaseIncrement"></a>

### *property* DirectionalAccelerationRS.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Frequency"></a>

### *property* DirectionalAccelerationRS.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DeformationType"></a>

### *property* DirectionalAccelerationRS.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Reference"></a>

### *property* DirectionalAccelerationRS.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ScaleFactor"></a>

### *property* DirectionalAccelerationRS.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AccelerationInG"></a>

### *property* DirectionalAccelerationRS.AccelerationInG *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Amplitude"></a>

### *property* DirectionalAccelerationRS.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AllowPhaseSweep"></a>

### *property* DirectionalAccelerationRS.AllowPhaseSweep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AllowPhaseSweep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.PlotData"></a>

### *property* DirectionalAccelerationRS.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Location"></a>

### *property* DirectionalAccelerationRS.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalAccelerationRS.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalAccelerationRS.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalAccelerationRS.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalAccelerationRS.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalAccelerationRS.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalAccelerationRS.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalAccelerationRS.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalAccelerationRS.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.IsSolved"></a>

### *property* DirectionalAccelerationRS.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CoordinateSystem"></a>

### *property* DirectionalAccelerationRS.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ScopingMethod"></a>

### *property* DirectionalAccelerationRS.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.SetNumber"></a>

### *property* DirectionalAccelerationRS.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CombinationNumber"></a>

### *property* DirectionalAccelerationRS.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.SolutionCombinationDriver"></a>

### *property* DirectionalAccelerationRS.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Path"></a>

### *property* DirectionalAccelerationRS.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Surface"></a>

### *property* DirectionalAccelerationRS.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.SurfaceCoating"></a>

### *property* DirectionalAccelerationRS.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.NamedSelections"></a>

### *property* DirectionalAccelerationRS.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalAccelerationRS.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CrackFrontNumber"></a>

### *property* DirectionalAccelerationRS.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.GlobalIDs"></a>

### *property* DirectionalAccelerationRS.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Identifier"></a>

### *property* DirectionalAccelerationRS.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.IterationNumber"></a>

### *property* DirectionalAccelerationRS.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadStep"></a>

### *property* DirectionalAccelerationRS.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.MaximumOccursOn"></a>

### *property* DirectionalAccelerationRS.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.MinimumOccursOn"></a>

### *property* DirectionalAccelerationRS.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.LoadStepNumber"></a>

### *property* DirectionalAccelerationRS.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.SolverComponentIDs"></a>

### *property* DirectionalAccelerationRS.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Substep"></a>

### *property* DirectionalAccelerationRS.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Average"></a>

### *property* DirectionalAccelerationRS.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Maximum"></a>

### *property* DirectionalAccelerationRS.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.MaximumOfMaximumOverTime"></a>

### *property* DirectionalAccelerationRS.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.MaximumOfMinimumOverTime"></a>

### *property* DirectionalAccelerationRS.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Minimum"></a>

### *property* DirectionalAccelerationRS.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.MinimumOfMaximumOverTime"></a>

### *property* DirectionalAccelerationRS.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.MinimumOfMinimumOverTime"></a>

### *property* DirectionalAccelerationRS.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Time"></a>

### *property* DirectionalAccelerationRS.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DisplayTime"></a>

### *property* DirectionalAccelerationRS.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.GraphControlsXAxis"></a>

### *property* DirectionalAccelerationRS.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DisplayOption"></a>

### *property* DirectionalAccelerationRS.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DpfEvaluation"></a>

### *property* DirectionalAccelerationRS.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.By"></a>

### *property* DirectionalAccelerationRS.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ItemType"></a>

### *property* DirectionalAccelerationRS.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CalculateTimeHistory"></a>

### *property* DirectionalAccelerationRS.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Suppressed"></a>

### *property* DirectionalAccelerationRS.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Children"></a>

### *property* DirectionalAccelerationRS.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Comments"></a>

### *property* DirectionalAccelerationRS.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Figures"></a>

### *property* DirectionalAccelerationRS.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Images"></a>

### *property* DirectionalAccelerationRS.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalAccelerationRS.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Properties"></a>

### *property* DirectionalAccelerationRS.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.VisibleProperties"></a>

### *property* DirectionalAccelerationRS.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalAccelerationRS.ClearGeneratedData"></a>

### DirectionalAccelerationRS.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.EvaluateAllResults"></a>

### DirectionalAccelerationRS.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.FetchRemoteResults"></a>

### DirectionalAccelerationRS.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ExportToTextFile"></a>

### DirectionalAccelerationRS.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.ExportAnimation"></a>

### DirectionalAccelerationRS.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.DuplicateWithoutResults"></a>

### DirectionalAccelerationRS.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CreateResultsAtAllSets"></a>

### DirectionalAccelerationRS.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.PromoteToNamedSelection"></a>

### DirectionalAccelerationRS.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CreateParameter"></a>

### DirectionalAccelerationRS.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AddAlert"></a>

### DirectionalAccelerationRS.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AddConvergence"></a>

### DirectionalAccelerationRS.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.RenameBasedOnDefinition"></a>

### DirectionalAccelerationRS.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Delete"></a>

### DirectionalAccelerationRS.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.GetChildren"></a>

### DirectionalAccelerationRS.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalAccelerationRS.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AddComment"></a>

### DirectionalAccelerationRS.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AddFigure"></a>

### DirectionalAccelerationRS.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.AddImage"></a>

### DirectionalAccelerationRS.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Activate"></a>

### DirectionalAccelerationRS.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.CopyTo"></a>

### DirectionalAccelerationRS.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.Duplicate"></a>

### DirectionalAccelerationRS.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.GroupAllSimilarChildren"></a>

### DirectionalAccelerationRS.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.GroupSimilarObjects"></a>

### DirectionalAccelerationRS.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.PropertyByName"></a>

### DirectionalAccelerationRS.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.PropertyByAPIName"></a>

### DirectionalAccelerationRS.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.GetParameter"></a>

### DirectionalAccelerationRS.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalAccelerationRS.RemoveParameter"></a>

### DirectionalAccelerationRS.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

