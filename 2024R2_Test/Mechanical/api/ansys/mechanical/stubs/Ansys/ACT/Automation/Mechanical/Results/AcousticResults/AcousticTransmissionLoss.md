<a id="acoustictransmissionloss"></a>

# AcousticTransmissionLoss

<a id="AcousticTransmissionLoss"></a>

### *class* AcousticTransmissionLoss

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTransmissionLoss.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticTransmissionLoss.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticTransmissionLoss.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticTransmissionLoss.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticTransmissionLoss.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticTransmissionLoss.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticTransmissionLoss.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticTransmissionLoss.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticTransmissionLoss.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticTransmissionLoss.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticTransmissionLoss.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticTransmissionLoss.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticTransmissionLoss.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticTransmissionLoss.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticTransmissionLoss.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticTransmissionLoss.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticTransmissionLoss.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticTransmissionLoss.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticTransmissionLoss.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticTransmissionLoss.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticTransmissionLoss.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticTransmissionLoss.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticTransmissionLoss.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticTransmissionLoss.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticTransmissionLoss.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticTransmissionLoss.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InputPort`](#AcousticTransmissionLoss.InputPort)                                                                        | Gets or sets the InputPort.                                            |
| [`OutputPort`](#AcousticTransmissionLoss.OutputPort)                                                                      | Gets or sets the OutputPort.                                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#AcousticTransmissionLoss.MaximumFrequency)                                                          | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#AcousticTransmissionLoss.MinimumFrequency)                                                          | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#AcousticTransmissionLoss.FrequencyRange)                                                              | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticTransmissionLoss.Mode)                                                                                  | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticTransmissionLoss.ReportedFrequency)                                                        | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticTransmissionLoss.DampedFrequency)                                                            | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticTransmissionLoss.LogarithmicDecrement)                                                  | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticTransmissionLoss.ModalDampingRatio)                                                        | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticTransmissionLoss.Stability)                                                                        | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticTransmissionLoss.SweepingPhase)                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticTransmissionLoss.Frequency)                                                                        | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticTransmissionLoss.Amplitude)                                                                        | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticTransmissionLoss.PlotData)                                                                          | Gets the result table.                                                 |
| [`Location`](#AcousticTransmissionLoss.Location)                                                                          | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticTransmissionLoss.TimeForMinimumOfMinimumValues)                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticTransmissionLoss.TimeForMinimumOfMaximumValues)                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticTransmissionLoss.LoadStepForMinimumOfMinimumValues)                        | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticTransmissionLoss.LoadStepForMinimumOfMaximumValues)                        | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticTransmissionLoss.TimeForMaximumOfMinimumValues)                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticTransmissionLoss.TimeForMaximumOfMaximumValues)                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticTransmissionLoss.LoadStepForMaximumOfMinimumValues)                        | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticTransmissionLoss.LoadStepForMaximumOfMaximumValues)                        | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticTransmissionLoss.IsSolved)                                                                          | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticTransmissionLoss.ScopingMethod)                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticTransmissionLoss.SetNumber)                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticTransmissionLoss.CombinationNumber)                                                        | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticTransmissionLoss.SolutionCombinationDriver)                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticTransmissionLoss.WaterfallPanelShowTextOnMosaic)                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticTransmissionLoss.CrackFrontNumber)                                                          | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticTransmissionLoss.GlobalIDs)                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticTransmissionLoss.Identifier)                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticTransmissionLoss.IterationNumber)                                                            | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticTransmissionLoss.LoadStep)                                                                          | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticTransmissionLoss.MaximumOccursOn)                                                            | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticTransmissionLoss.MinimumOccursOn)                                                            | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticTransmissionLoss.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticTransmissionLoss.SolverComponentIDs)                                                      | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticTransmissionLoss.Substep)                                                                            | Gets the Substep.                                                      |
| [`Average`](#AcousticTransmissionLoss.Average)                                                                            | Gets the Average.                                                      |
| [`Maximum`](#AcousticTransmissionLoss.Maximum)                                                                            | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticTransmissionLoss.MaximumOfMaximumOverTime)                                          | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticTransmissionLoss.MaximumOfMinimumOverTime)                                          | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticTransmissionLoss.Minimum)                                                                            | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticTransmissionLoss.MinimumOfMaximumOverTime)                                          | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticTransmissionLoss.MinimumOfMinimumOverTime)                                          | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticTransmissionLoss.Time)                                                                                  | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticTransmissionLoss.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticTransmissionLoss.DisplayOption)                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticTransmissionLoss.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticTransmissionLoss.By)                                                                                      | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticTransmissionLoss.ItemType)                                                                          | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticTransmissionLoss.CalculateTimeHistory)                                                  | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticTransmissionLoss.Suppressed)                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticTransmissionLoss.Children)                                                                          | Gets the list of children.                                             |
| [`Comments`](#AcousticTransmissionLoss.Comments)                                                                          | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticTransmissionLoss.Figures)                                                                            | Gets the list of associated figures.                                   |
| [`Images`](#AcousticTransmissionLoss.Images)                                                                              | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticTransmissionLoss.Properties)                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticTransmissionLoss.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticTransmissionLoss
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticTransmissionLoss.InputPort"></a>

### *property* AcousticTransmissionLoss.InputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputPort.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.OutputPort"></a>

### *property* AcousticTransmissionLoss.OutputPort *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](../../BoundaryConditions/AcousticPort.md#AcousticPort) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputPort.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.InternalObject"></a>

### *property* AcousticTransmissionLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MaximumFrequency"></a>

### *property* AcousticTransmissionLoss.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MinimumFrequency"></a>

### *property* AcousticTransmissionLoss.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.FrequencyRange"></a>

### *property* AcousticTransmissionLoss.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.DataModelObjectCategory"></a>

### *property* AcousticTransmissionLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Mode"></a>

### *property* AcousticTransmissionLoss.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.ReportedFrequency"></a>

### *property* AcousticTransmissionLoss.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.DampedFrequency"></a>

### *property* AcousticTransmissionLoss.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LogarithmicDecrement"></a>

### *property* AcousticTransmissionLoss.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.ModalDampingRatio"></a>

### *property* AcousticTransmissionLoss.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Stability"></a>

### *property* AcousticTransmissionLoss.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.SweepingPhase"></a>

### *property* AcousticTransmissionLoss.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Frequency"></a>

### *property* AcousticTransmissionLoss.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Amplitude"></a>

### *property* AcousticTransmissionLoss.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.PlotData"></a>

### *property* AcousticTransmissionLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Location"></a>

### *property* AcousticTransmissionLoss.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticTransmissionLoss.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticTransmissionLoss.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticTransmissionLoss.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticTransmissionLoss.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticTransmissionLoss.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticTransmissionLoss.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticTransmissionLoss.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticTransmissionLoss.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.IsSolved"></a>

### *property* AcousticTransmissionLoss.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CoordinateSystem"></a>

### *property* AcousticTransmissionLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.ScopingMethod"></a>

### *property* AcousticTransmissionLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.SetNumber"></a>

### *property* AcousticTransmissionLoss.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CombinationNumber"></a>

### *property* AcousticTransmissionLoss.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.SolutionCombinationDriver"></a>

### *property* AcousticTransmissionLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Path"></a>

### *property* AcousticTransmissionLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Surface"></a>

### *property* AcousticTransmissionLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.NamedSelections"></a>

### *property* AcousticTransmissionLoss.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticTransmissionLoss.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CrackFrontNumber"></a>

### *property* AcousticTransmissionLoss.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.GlobalIDs"></a>

### *property* AcousticTransmissionLoss.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Identifier"></a>

### *property* AcousticTransmissionLoss.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.IterationNumber"></a>

### *property* AcousticTransmissionLoss.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LoadStep"></a>

### *property* AcousticTransmissionLoss.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MaximumOccursOn"></a>

### *property* AcousticTransmissionLoss.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MinimumOccursOn"></a>

### *property* AcousticTransmissionLoss.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.LoadStepNumber"></a>

### *property* AcousticTransmissionLoss.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.SolverComponentIDs"></a>

### *property* AcousticTransmissionLoss.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Substep"></a>

### *property* AcousticTransmissionLoss.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Average"></a>

### *property* AcousticTransmissionLoss.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Maximum"></a>

### *property* AcousticTransmissionLoss.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MaximumOfMaximumOverTime"></a>

### *property* AcousticTransmissionLoss.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MaximumOfMinimumOverTime"></a>

### *property* AcousticTransmissionLoss.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Minimum"></a>

### *property* AcousticTransmissionLoss.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MinimumOfMaximumOverTime"></a>

### *property* AcousticTransmissionLoss.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.MinimumOfMinimumOverTime"></a>

### *property* AcousticTransmissionLoss.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Time"></a>

### *property* AcousticTransmissionLoss.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.DisplayTime"></a>

### *property* AcousticTransmissionLoss.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.GraphControlsXAxis"></a>

### *property* AcousticTransmissionLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.DisplayOption"></a>

### *property* AcousticTransmissionLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.DpfEvaluation"></a>

### *property* AcousticTransmissionLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.By"></a>

### *property* AcousticTransmissionLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.ItemType"></a>

### *property* AcousticTransmissionLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CalculateTimeHistory"></a>

### *property* AcousticTransmissionLoss.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Suppressed"></a>

### *property* AcousticTransmissionLoss.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Children"></a>

### *property* AcousticTransmissionLoss.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Comments"></a>

### *property* AcousticTransmissionLoss.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Figures"></a>

### *property* AcousticTransmissionLoss.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Images"></a>

### *property* AcousticTransmissionLoss.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticTransmissionLoss.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Properties"></a>

### *property* AcousticTransmissionLoss.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.VisibleProperties"></a>

### *property* AcousticTransmissionLoss.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticTransmissionLoss.ClearGeneratedData"></a>

### AcousticTransmissionLoss.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.EvaluateAllResults"></a>

### AcousticTransmissionLoss.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.FetchRemoteResults"></a>

### AcousticTransmissionLoss.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.ExportToTextFile"></a>

### AcousticTransmissionLoss.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.ExportAnimation"></a>

### AcousticTransmissionLoss.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.DuplicateWithoutResults"></a>

### AcousticTransmissionLoss.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CreateResultsAtAllSets"></a>

### AcousticTransmissionLoss.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.PromoteToNamedSelection"></a>

### AcousticTransmissionLoss.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CreateParameter"></a>

### AcousticTransmissionLoss.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.AddAlert"></a>

### AcousticTransmissionLoss.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.AddConvergence"></a>

### AcousticTransmissionLoss.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.RenameBasedOnDefinition"></a>

### AcousticTransmissionLoss.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Delete"></a>

### AcousticTransmissionLoss.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.GetChildren"></a>

### AcousticTransmissionLoss.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticTransmissionLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.AddComment"></a>

### AcousticTransmissionLoss.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.AddFigure"></a>

### AcousticTransmissionLoss.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.AddImage"></a>

### AcousticTransmissionLoss.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Activate"></a>

### AcousticTransmissionLoss.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.CopyTo"></a>

### AcousticTransmissionLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.Duplicate"></a>

### AcousticTransmissionLoss.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.GroupAllSimilarChildren"></a>

### AcousticTransmissionLoss.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.GroupSimilarObjects"></a>

### AcousticTransmissionLoss.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.PropertyByName"></a>

### AcousticTransmissionLoss.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.PropertyByAPIName"></a>

### AcousticTransmissionLoss.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.GetParameter"></a>

### AcousticTransmissionLoss.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTransmissionLoss.RemoveParameter"></a>

### AcousticTransmissionLoss.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
