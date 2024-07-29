# `AcousticDiffuseSoundTransmissionLoss`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticDiffuseSoundTransmissionLoss.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticDiffuseSoundTransmissionLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticDiffuseSoundTransmissionLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticDiffuseSoundTransmissionLoss.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticDiffuseSoundTransmissionLoss.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticDiffuseSoundTransmissionLoss.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticDiffuseSoundTransmissionLoss.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticDiffuseSoundTransmissionLoss.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticDiffuseSoundTransmissionLoss.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticDiffuseSoundTransmissionLoss.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticDiffuseSoundTransmissionLoss.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticDiffuseSoundTransmissionLoss.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticDiffuseSoundTransmissionLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticDiffuseSoundTransmissionLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticDiffuseSoundTransmissionLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                       | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#AcousticDiffuseSoundTransmissionLoss.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](#AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticDiffuseSoundTransmissionLoss.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticDiffuseSoundTransmissionLoss.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticDiffuseSoundTransmissionLoss.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticDiffuseSoundTransmissionLoss.Stability)                                                 | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticDiffuseSoundTransmissionLoss.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticDiffuseSoundTransmissionLoss.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticDiffuseSoundTransmissionLoss.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticDiffuseSoundTransmissionLoss.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#AcousticDiffuseSoundTransmissionLoss.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticDiffuseSoundTransmissionLoss.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#AcousticDiffuseSoundTransmissionLoss.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticDiffuseSoundTransmissionLoss.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticDiffuseSoundTransmissionLoss.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticDiffuseSoundTransmissionLoss.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#AcousticDiffuseSoundTransmissionLoss.Path)                                                           | Path property.                                                         |
| [`Surface`](#AcousticDiffuseSoundTransmissionLoss.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#AcousticDiffuseSoundTransmissionLoss.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#AcousticDiffuseSoundTransmissionLoss.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#AcousticDiffuseSoundTransmissionLoss.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticDiffuseSoundTransmissionLoss.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticDiffuseSoundTransmissionLoss.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticDiffuseSoundTransmissionLoss.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticDiffuseSoundTransmissionLoss.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticDiffuseSoundTransmissionLoss.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticDiffuseSoundTransmissionLoss.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#AcousticDiffuseSoundTransmissionLoss.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#AcousticDiffuseSoundTransmissionLoss.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticDiffuseSoundTransmissionLoss.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticDiffuseSoundTransmissionLoss.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticDiffuseSoundTransmissionLoss.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticDiffuseSoundTransmissionLoss.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticDiffuseSoundTransmissionLoss.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticDiffuseSoundTransmissionLoss.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticDiffuseSoundTransmissionLoss.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticDiffuseSoundTransmissionLoss.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticDiffuseSoundTransmissionLoss.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#AcousticDiffuseSoundTransmissionLoss.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticDiffuseSoundTransmissionLoss.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#AcousticDiffuseSoundTransmissionLoss.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                       | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticDiffuseSoundTransmissionLoss.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticDiffuseSoundTransmissionLoss.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticDiffuseSoundTransmissionLoss.InternalObject"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FrequencyRange"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Mode"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ReportedFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DampedFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Stability"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SweepingPhase"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Frequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Amplitude"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PlotData"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Location"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IsSolved"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CoordinateSystem"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ScopingMethod"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SetNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CombinationNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Path"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Surface"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SurfaceCoating"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.NamedSelections"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallShowTextOnMosaic"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GlobalIDs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Identifier"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IterationNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStep"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Substep"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Average"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Maximum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Minimum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Time"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DisplayTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DisplayOption"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DpfEvaluation"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.By"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ItemType"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Suppressed"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Children"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Comments"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Figures"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Images"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Properties"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.VisibleProperties"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData"></a>

### AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults"></a>

### AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults"></a>

### AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportToTextFile"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportAnimation"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults"></a>

### AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection"></a>

### AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddAlert"></a>

### AcousticDiffuseSoundTransmissionLoss.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddConvergence"></a>

### AcousticDiffuseSoundTransmissionLoss.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition"></a>

### AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Delete"></a>

### AcousticDiffuseSoundTransmissionLoss.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetChildren"></a>

### AcousticDiffuseSoundTransmissionLoss.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticDiffuseSoundTransmissionLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddComment"></a>

### AcousticDiffuseSoundTransmissionLoss.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddFigure"></a>

### AcousticDiffuseSoundTransmissionLoss.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddImage"></a>

### AcousticDiffuseSoundTransmissionLoss.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Activate"></a>

### AcousticDiffuseSoundTransmissionLoss.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CopyTo"></a>

### AcousticDiffuseSoundTransmissionLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Duplicate"></a>

### AcousticDiffuseSoundTransmissionLoss.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren"></a>

### AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects"></a>

### AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyByName"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RemoveParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

