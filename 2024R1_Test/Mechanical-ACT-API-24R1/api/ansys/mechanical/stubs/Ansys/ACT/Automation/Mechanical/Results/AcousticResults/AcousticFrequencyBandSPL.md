# AcousticFrequencyBandSPL

<a id="AcousticFrequencyBandSPL"></a>

### *class* AcousticFrequencyBandSPL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticFrequencyBandSPL.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticFrequencyBandSPL.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticFrequencyBandSPL.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFrequencyBandSPL.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFrequencyBandSPL.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFrequencyBandSPL.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFrequencyBandSPL.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFrequencyBandSPL.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFrequencyBandSPL.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFrequencyBandSPL.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFrequencyBandSPL.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFrequencyBandSPL.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFrequencyBandSPL.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFrequencyBandSPL.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFrequencyBandSPL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFrequencyBandSPL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFrequencyBandSPL.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFrequencyBandSPL.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFrequencyBandSPL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFrequencyBandSPL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFrequencyBandSPL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFrequencyBandSPL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFrequencyBandSPL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFrequencyBandSPL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFrequencyBandSPL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFrequencyBandSPL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticFrequencyBandSPL.Mode)                                                                                  | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticFrequencyBandSPL.ReportedFrequency)                                                        | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFrequencyBandSPL.DampedFrequency)                                                            | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticFrequencyBandSPL.LogarithmicDecrement)                                                  | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFrequencyBandSPL.ModalDampingRatio)                                                        | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticFrequencyBandSPL.Stability)                                                                        | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticFrequencyBandSPL.SweepingPhase)                                                                | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticFrequencyBandSPL.Frequency)                                                                        | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticFrequencyBandSPL.Amplitude)                                                                        | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticFrequencyBandSPL.PlotData)                                                                          | Gets the result table.                                                 |
| [`Location`](#AcousticFrequencyBandSPL.Location)                                                                          | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFrequencyBandSPL.TimeForMinimumOfMinimumValues)                                | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFrequencyBandSPL.TimeForMinimumOfMaximumValues)                                | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFrequencyBandSPL.LoadStepForMinimumOfMinimumValues)                        | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFrequencyBandSPL.LoadStepForMinimumOfMaximumValues)                        | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFrequencyBandSPL.TimeForMaximumOfMinimumValues)                                | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFrequencyBandSPL.TimeForMaximumOfMaximumValues)                                | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFrequencyBandSPL.LoadStepForMaximumOfMinimumValues)                        | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFrequencyBandSPL.LoadStepForMaximumOfMaximumValues)                        | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFrequencyBandSPL.IsSolved)                                                                          | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFrequencyBandSPL.ScopingMethod)                                                                | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFrequencyBandSPL.SetNumber)                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFrequencyBandSPL.CombinationNumber)                                                        | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFrequencyBandSPL.SolutionCombinationDriver)                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFrequencyBandSPL.WaterfallPanelShowTextOnMosaic)                              | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticFrequencyBandSPL.CrackFrontNumber)                                                          | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFrequencyBandSPL.GlobalIDs)                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFrequencyBandSPL.Identifier)                                                                      | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFrequencyBandSPL.IterationNumber)                                                            | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFrequencyBandSPL.LoadStep)                                                                          | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFrequencyBandSPL.MaximumOccursOn)                                                            | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFrequencyBandSPL.MinimumOccursOn)                                                            | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFrequencyBandSPL.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFrequencyBandSPL.SolverComponentIDs)                                                      | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFrequencyBandSPL.Substep)                                                                            | Gets the Substep.                                                      |
| [`Average`](#AcousticFrequencyBandSPL.Average)                                                                            | Gets the Average.                                                      |
| [`Maximum`](#AcousticFrequencyBandSPL.Maximum)                                                                            | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFrequencyBandSPL.MaximumOfMaximumOverTime)                                          | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFrequencyBandSPL.MaximumOfMinimumOverTime)                                          | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFrequencyBandSPL.Minimum)                                                                            | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFrequencyBandSPL.MinimumOfMaximumOverTime)                                          | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFrequencyBandSPL.MinimumOfMinimumOverTime)                                          | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFrequencyBandSPL.Time)                                                                                  | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFrequencyBandSPL.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFrequencyBandSPL.DisplayOption)                                                                | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFrequencyBandSPL.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFrequencyBandSPL.By)                                                                                      | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFrequencyBandSPL.ItemType)                                                                          | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFrequencyBandSPL.CalculateTimeHistory)                                                  | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFrequencyBandSPL.Suppressed)                                                                      | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFrequencyBandSPL.Children)                                                                          | Gets the list of children.                                             |
| [`Comments`](#AcousticFrequencyBandSPL.Comments)                                                                          | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFrequencyBandSPL.Figures)                                                                            | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFrequencyBandSPL.Images)                                                                              | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFrequencyBandSPL.Properties)                                                                      | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFrequencyBandSPL.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticFrequencyBandSPL
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticFrequencyBandSPL.InternalObject"></a>

### *property* AcousticFrequencyBandSPL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.DataModelObjectCategory"></a>

### *property* AcousticFrequencyBandSPL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Mode"></a>

### *property* AcousticFrequencyBandSPL.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.ReportedFrequency"></a>

### *property* AcousticFrequencyBandSPL.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.DampedFrequency"></a>

### *property* AcousticFrequencyBandSPL.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LogarithmicDecrement"></a>

### *property* AcousticFrequencyBandSPL.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.ModalDampingRatio"></a>

### *property* AcousticFrequencyBandSPL.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Stability"></a>

### *property* AcousticFrequencyBandSPL.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.SweepingPhase"></a>

### *property* AcousticFrequencyBandSPL.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Frequency"></a>

### *property* AcousticFrequencyBandSPL.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Amplitude"></a>

### *property* AcousticFrequencyBandSPL.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.PlotData"></a>

### *property* AcousticFrequencyBandSPL.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Location"></a>

### *property* AcousticFrequencyBandSPL.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandSPL.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandSPL.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFrequencyBandSPL.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFrequencyBandSPL.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandSPL.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandSPL.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFrequencyBandSPL.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFrequencyBandSPL.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.IsSolved"></a>

### *property* AcousticFrequencyBandSPL.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CoordinateSystem"></a>

### *property* AcousticFrequencyBandSPL.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.ScopingMethod"></a>

### *property* AcousticFrequencyBandSPL.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.SetNumber"></a>

### *property* AcousticFrequencyBandSPL.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CombinationNumber"></a>

### *property* AcousticFrequencyBandSPL.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.SolutionCombinationDriver"></a>

### *property* AcousticFrequencyBandSPL.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Path"></a>

### *property* AcousticFrequencyBandSPL.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Surface"></a>

### *property* AcousticFrequencyBandSPL.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.NamedSelections"></a>

### *property* AcousticFrequencyBandSPL.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticFrequencyBandSPL.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CrackFrontNumber"></a>

### *property* AcousticFrequencyBandSPL.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.GlobalIDs"></a>

### *property* AcousticFrequencyBandSPL.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Identifier"></a>

### *property* AcousticFrequencyBandSPL.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.IterationNumber"></a>

### *property* AcousticFrequencyBandSPL.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LoadStep"></a>

### *property* AcousticFrequencyBandSPL.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.MaximumOccursOn"></a>

### *property* AcousticFrequencyBandSPL.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.MinimumOccursOn"></a>

### *property* AcousticFrequencyBandSPL.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.LoadStepNumber"></a>

### *property* AcousticFrequencyBandSPL.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.SolverComponentIDs"></a>

### *property* AcousticFrequencyBandSPL.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Substep"></a>

### *property* AcousticFrequencyBandSPL.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Average"></a>

### *property* AcousticFrequencyBandSPL.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Maximum"></a>

### *property* AcousticFrequencyBandSPL.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.MaximumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandSPL.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.MaximumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandSPL.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Minimum"></a>

### *property* AcousticFrequencyBandSPL.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.MinimumOfMaximumOverTime"></a>

### *property* AcousticFrequencyBandSPL.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.MinimumOfMinimumOverTime"></a>

### *property* AcousticFrequencyBandSPL.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Time"></a>

### *property* AcousticFrequencyBandSPL.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.DisplayTime"></a>

### *property* AcousticFrequencyBandSPL.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.GraphControlsXAxis"></a>

### *property* AcousticFrequencyBandSPL.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.DisplayOption"></a>

### *property* AcousticFrequencyBandSPL.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.DpfEvaluation"></a>

### *property* AcousticFrequencyBandSPL.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.By"></a>

### *property* AcousticFrequencyBandSPL.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.ItemType"></a>

### *property* AcousticFrequencyBandSPL.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CalculateTimeHistory"></a>

### *property* AcousticFrequencyBandSPL.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Suppressed"></a>

### *property* AcousticFrequencyBandSPL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Children"></a>

### *property* AcousticFrequencyBandSPL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Comments"></a>

### *property* AcousticFrequencyBandSPL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Figures"></a>

### *property* AcousticFrequencyBandSPL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Images"></a>

### *property* AcousticFrequencyBandSPL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticFrequencyBandSPL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Properties"></a>

### *property* AcousticFrequencyBandSPL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.VisibleProperties"></a>

### *property* AcousticFrequencyBandSPL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFrequencyBandSPL.ClearGeneratedData"></a>

### AcousticFrequencyBandSPL.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.EvaluateAllResults"></a>

### AcousticFrequencyBandSPL.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.FetchRemoteResults"></a>

### AcousticFrequencyBandSPL.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.ExportToTextFile"></a>

### AcousticFrequencyBandSPL.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.ExportAnimation"></a>

### AcousticFrequencyBandSPL.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.DuplicateWithoutResults"></a>

### AcousticFrequencyBandSPL.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CreateResultsAtAllSets"></a>

### AcousticFrequencyBandSPL.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.PromoteToNamedSelection"></a>

### AcousticFrequencyBandSPL.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CreateParameter"></a>

### AcousticFrequencyBandSPL.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.AddAlert"></a>

### AcousticFrequencyBandSPL.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.AddConvergence"></a>

### AcousticFrequencyBandSPL.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.RenameBasedOnDefinition"></a>

### AcousticFrequencyBandSPL.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Delete"></a>

### AcousticFrequencyBandSPL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.GetChildren"></a>

### AcousticFrequencyBandSPL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticFrequencyBandSPL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.AddComment"></a>

### AcousticFrequencyBandSPL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.AddFigure"></a>

### AcousticFrequencyBandSPL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.AddImage"></a>

### AcousticFrequencyBandSPL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Activate"></a>

### AcousticFrequencyBandSPL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.CopyTo"></a>

### AcousticFrequencyBandSPL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.Duplicate"></a>

### AcousticFrequencyBandSPL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.GroupAllSimilarChildren"></a>

### AcousticFrequencyBandSPL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.GroupSimilarObjects"></a>

### AcousticFrequencyBandSPL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.PropertyByName"></a>

### AcousticFrequencyBandSPL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.PropertyByAPIName"></a>

### AcousticFrequencyBandSPL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.GetParameter"></a>

### AcousticFrequencyBandSPL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFrequencyBandSPL.RemoveParameter"></a>

### AcousticFrequencyBandSPL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
