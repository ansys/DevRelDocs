# `AcousticFrequencyBandAWeightedSPL`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandAWeightedSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFrequencyBandAWeightedSPL.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticFrequencyBandAWeightedSPL.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticFrequencyBandAWeightedSPL.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFrequencyBandAWeightedSPL.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFrequencyBandAWeightedSPL.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFrequencyBandAWeightedSPL.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFrequencyBandAWeightedSPL.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFrequencyBandAWeightedSPL.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFrequencyBandAWeightedSPL.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFrequencyBandAWeightedSPL.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFrequencyBandAWeightedSPL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFrequencyBandAWeightedSPL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFrequencyBandAWeightedSPL.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFrequencyBandAWeightedSPL.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFrequencyBandAWeightedSPL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFrequencyBandAWeightedSPL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFrequencyBandAWeightedSPL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFrequencyBandAWeightedSPL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFrequencyBandAWeightedSPL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFrequencyBandAWeightedSPL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticFrequencyBandAWeightedSPL.Mode)                                                           | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticFrequencyBandAWeightedSPL.ReportedFrequency)                                 | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFrequencyBandAWeightedSPL.DampedFrequency)                                     | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement)                           | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFrequencyBandAWeightedSPL.ModalDampingRatio)                                 | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticFrequencyBandAWeightedSPL.Stability)                                                 | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticFrequencyBandAWeightedSPL.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticFrequencyBandAWeightedSPL.Frequency)                                                 | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticFrequencyBandAWeightedSPL.Amplitude)                                                 | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticFrequencyBandAWeightedSPL.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#AcousticFrequencyBandAWeightedSPL.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFrequencyBandAWeightedSPL.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#AcousticFrequencyBandAWeightedSPL.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFrequencyBandAWeightedSPL.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFrequencyBandAWeightedSPL.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFrequencyBandAWeightedSPL.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#AcousticFrequencyBandAWeightedSPL.Path)                                                           | Path property.                                                         |
| [`Surface`](#AcousticFrequencyBandAWeightedSPL.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#AcousticFrequencyBandAWeightedSPL.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#AcousticFrequencyBandAWeightedSPL.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#AcousticFrequencyBandAWeightedSPL.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#AcousticFrequencyBandAWeightedSPL.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFrequencyBandAWeightedSPL.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFrequencyBandAWeightedSPL.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFrequencyBandAWeightedSPL.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFrequencyBandAWeightedSPL.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFrequencyBandAWeightedSPL.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFrequencyBandAWeightedSPL.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFrequencyBandAWeightedSPL.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFrequencyBandAWeightedSPL.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFrequencyBandAWeightedSPL.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#AcousticFrequencyBandAWeightedSPL.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#AcousticFrequencyBandAWeightedSPL.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFrequencyBandAWeightedSPL.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFrequencyBandAWeightedSPL.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFrequencyBandAWeightedSPL.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFrequencyBandAWeightedSPL.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFrequencyBandAWeightedSPL.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFrequencyBandAWeightedSPL.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFrequencyBandAWeightedSPL.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFrequencyBandAWeightedSPL.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFrequencyBandAWeightedSPL.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#AcousticFrequencyBandAWeightedSPL.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFrequencyBandAWeightedSPL.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFrequencyBandAWeightedSPL.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFrequencyBandAWeightedSPL.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFrequencyBandAWeightedSPL.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFrequencyBandAWeightedSPL.InternalObject"></a>

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Mode"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ReportedFrequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DampedFrequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ModalDampingRatio"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Stability"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SweepingPhase"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Frequency"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Amplitude"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PlotData"></a>

### *property* AcousticFrequencyBandAWeightedSPL.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Location"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.IsSolved"></a>

### *property* AcousticFrequencyBandAWeightedSPL.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CoordinateSystem"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ScopingMethod"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SetNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CombinationNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Path"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Surface"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SurfaceCoating"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.NamedSelections"></a>

### *property* AcousticFrequencyBandAWeightedSPL.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.WaterfallShowTextOnMosaic"></a>

### *property* AcousticFrequencyBandAWeightedSPL.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CrackFrontNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GlobalIDs"></a>

### *property* AcousticFrequencyBandAWeightedSPL.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Identifier"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.IterationNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStep"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOccursOn"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOccursOn"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.LoadStepNumber"></a>

### *property* AcousticFrequencyBandAWeightedSPL.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.SolverComponentIDs"></a>

### *property* AcousticFrequencyBandAWeightedSPL.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Substep"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Average"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Maximum"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Minimum"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Time"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DisplayTime"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis"></a>

### *property* AcousticFrequencyBandAWeightedSPL.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DisplayOption"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DpfEvaluation"></a>

### *property* AcousticFrequencyBandAWeightedSPL.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.By"></a>

### *property* AcousticFrequencyBandAWeightedSPL.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ItemType"></a>

### *property* AcousticFrequencyBandAWeightedSPL.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory"></a>

### *property* AcousticFrequencyBandAWeightedSPL.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Suppressed"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Children"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Comments"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Figures"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Images"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticFrequencyBandAWeightedSPL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Properties"></a>

### *property* AcousticFrequencyBandAWeightedSPL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.VisibleProperties"></a>

### *property* AcousticFrequencyBandAWeightedSPL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFrequencyBandAWeightedSPL.ClearGeneratedData"></a>

### AcousticFrequencyBandAWeightedSPL.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.EvaluateAllResults"></a>

### AcousticFrequencyBandAWeightedSPL.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.FetchRemoteResults"></a>

### AcousticFrequencyBandAWeightedSPL.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ExportToTextFile"></a>

### AcousticFrequencyBandAWeightedSPL.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.ExportAnimation"></a>

### AcousticFrequencyBandAWeightedSPL.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults"></a>

### AcousticFrequencyBandAWeightedSPL.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets"></a>

### AcousticFrequencyBandAWeightedSPL.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection"></a>

### AcousticFrequencyBandAWeightedSPL.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CreateParameter"></a>

### AcousticFrequencyBandAWeightedSPL.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddAlert"></a>

### AcousticFrequencyBandAWeightedSPL.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddConvergence"></a>

### AcousticFrequencyBandAWeightedSPL.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition"></a>

### AcousticFrequencyBandAWeightedSPL.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Delete"></a>

### AcousticFrequencyBandAWeightedSPL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GetChildren"></a>

### AcousticFrequencyBandAWeightedSPL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticFrequencyBandAWeightedSPL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddComment"></a>

### AcousticFrequencyBandAWeightedSPL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddFigure"></a>

### AcousticFrequencyBandAWeightedSPL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.AddImage"></a>

### AcousticFrequencyBandAWeightedSPL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Activate"></a>

### AcousticFrequencyBandAWeightedSPL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.CopyTo"></a>

### AcousticFrequencyBandAWeightedSPL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.Duplicate"></a>

### AcousticFrequencyBandAWeightedSPL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren"></a>

### AcousticFrequencyBandAWeightedSPL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects"></a>

### AcousticFrequencyBandAWeightedSPL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PropertyByName"></a>

### AcousticFrequencyBandAWeightedSPL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.PropertyByAPIName"></a>

### AcousticFrequencyBandAWeightedSPL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.GetParameter"></a>

### AcousticFrequencyBandAWeightedSPL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandAWeightedSPL.RemoveParameter"></a>

### AcousticFrequencyBandAWeightedSPL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

