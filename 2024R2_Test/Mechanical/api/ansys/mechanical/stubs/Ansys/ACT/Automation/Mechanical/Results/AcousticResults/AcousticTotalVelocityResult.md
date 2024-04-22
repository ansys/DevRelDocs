<a id="acoustictotalvelocityresult"></a>

# AcousticTotalVelocityResult

<a id="AcousticTotalVelocityResult"></a>

### *class* AcousticTotalVelocityResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTotalVelocityResult.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AcousticTotalVelocityResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticTotalVelocityResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticTotalVelocityResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticTotalVelocityResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticTotalVelocityResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticTotalVelocityResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticTotalVelocityResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticTotalVelocityResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticTotalVelocityResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticTotalVelocityResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticTotalVelocityResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticTotalVelocityResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticTotalVelocityResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticTotalVelocityResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticTotalVelocityResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticTotalVelocityResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticTotalVelocityResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticTotalVelocityResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticTotalVelocityResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticTotalVelocityResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticTotalVelocityResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticTotalVelocityResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticTotalVelocityResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticTotalVelocityResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticTotalVelocityResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticTotalVelocityResult.Mode)                                                                               | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticTotalVelocityResult.ReportedFrequency)                                                     | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticTotalVelocityResult.DampedFrequency)                                                         | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticTotalVelocityResult.LogarithmicDecrement)                                               | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticTotalVelocityResult.ModalDampingRatio)                                                     | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticTotalVelocityResult.Stability)                                                                     | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticTotalVelocityResult.SweepingPhase)                                                             | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticTotalVelocityResult.Frequency)                                                                     | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticTotalVelocityResult.Amplitude)                                                                     | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticTotalVelocityResult.PlotData)                                                                       | Gets the result table.                                                 |
| [`Location`](#AcousticTotalVelocityResult.Location)                                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticTotalVelocityResult.TimeForMinimumOfMinimumValues)                             | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticTotalVelocityResult.TimeForMinimumOfMaximumValues)                             | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticTotalVelocityResult.LoadStepForMinimumOfMinimumValues)                     | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticTotalVelocityResult.LoadStepForMinimumOfMaximumValues)                     | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticTotalVelocityResult.TimeForMaximumOfMinimumValues)                             | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticTotalVelocityResult.TimeForMaximumOfMaximumValues)                             | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticTotalVelocityResult.LoadStepForMaximumOfMinimumValues)                     | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticTotalVelocityResult.LoadStepForMaximumOfMaximumValues)                     | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticTotalVelocityResult.IsSolved)                                                                       | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticTotalVelocityResult.ScopingMethod)                                                             | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticTotalVelocityResult.SetNumber)                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticTotalVelocityResult.CombinationNumber)                                                     | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticTotalVelocityResult.SolutionCombinationDriver)                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticTotalVelocityResult.WaterfallPanelShowTextOnMosaic)                           | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticTotalVelocityResult.CrackFrontNumber)                                                       | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticTotalVelocityResult.GlobalIDs)                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticTotalVelocityResult.Identifier)                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticTotalVelocityResult.IterationNumber)                                                         | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticTotalVelocityResult.LoadStep)                                                                       | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticTotalVelocityResult.MaximumOccursOn)                                                         | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticTotalVelocityResult.MinimumOccursOn)                                                         | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticTotalVelocityResult.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticTotalVelocityResult.SolverComponentIDs)                                                   | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticTotalVelocityResult.Substep)                                                                         | Gets the Substep.                                                      |
| [`Average`](#AcousticTotalVelocityResult.Average)                                                                         | Gets the Average.                                                      |
| [`Maximum`](#AcousticTotalVelocityResult.Maximum)                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticTotalVelocityResult.MaximumOfMaximumOverTime)                                       | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticTotalVelocityResult.MaximumOfMinimumOverTime)                                       | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticTotalVelocityResult.Minimum)                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticTotalVelocityResult.MinimumOfMaximumOverTime)                                       | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticTotalVelocityResult.MinimumOfMinimumOverTime)                                       | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticTotalVelocityResult.Time)                                                                               | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticTotalVelocityResult.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticTotalVelocityResult.DisplayOption)                                                             | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticTotalVelocityResult.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticTotalVelocityResult.By)                                                                                   | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticTotalVelocityResult.ItemType)                                                                       | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticTotalVelocityResult.CalculateTimeHistory)                                               | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticTotalVelocityResult.Suppressed)                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticTotalVelocityResult.Children)                                                                       | Gets the list of children.                                             |
| [`Comments`](#AcousticTotalVelocityResult.Comments)                                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticTotalVelocityResult.Figures)                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#AcousticTotalVelocityResult.Images)                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticTotalVelocityResult.Properties)                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticTotalVelocityResult.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticTotalVelocityResult
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticTotalVelocityResult.InternalObject"></a>

### *property* AcousticTotalVelocityResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DataModelObjectCategory"></a>

### *property* AcousticTotalVelocityResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Mode"></a>

### *property* AcousticTotalVelocityResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ReportedFrequency"></a>

### *property* AcousticTotalVelocityResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DampedFrequency"></a>

### *property* AcousticTotalVelocityResult.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LogarithmicDecrement"></a>

### *property* AcousticTotalVelocityResult.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ModalDampingRatio"></a>

### *property* AcousticTotalVelocityResult.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Stability"></a>

### *property* AcousticTotalVelocityResult.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SweepingPhase"></a>

### *property* AcousticTotalVelocityResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Frequency"></a>

### *property* AcousticTotalVelocityResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Amplitude"></a>

### *property* AcousticTotalVelocityResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PlotData"></a>

### *property* AcousticTotalVelocityResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Location"></a>

### *property* AcousticTotalVelocityResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticTotalVelocityResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.IsSolved"></a>

### *property* AcousticTotalVelocityResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CoordinateSystem"></a>

### *property* AcousticTotalVelocityResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ScopingMethod"></a>

### *property* AcousticTotalVelocityResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SetNumber"></a>

### *property* AcousticTotalVelocityResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CombinationNumber"></a>

### *property* AcousticTotalVelocityResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SolutionCombinationDriver"></a>

### *property* AcousticTotalVelocityResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Path"></a>

### *property* AcousticTotalVelocityResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Surface"></a>

### *property* AcousticTotalVelocityResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.NamedSelections"></a>

### *property* AcousticTotalVelocityResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticTotalVelocityResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CrackFrontNumber"></a>

### *property* AcousticTotalVelocityResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GlobalIDs"></a>

### *property* AcousticTotalVelocityResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Identifier"></a>

### *property* AcousticTotalVelocityResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.IterationNumber"></a>

### *property* AcousticTotalVelocityResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStep"></a>

### *property* AcousticTotalVelocityResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MaximumOccursOn"></a>

### *property* AcousticTotalVelocityResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MinimumOccursOn"></a>

### *property* AcousticTotalVelocityResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.LoadStepNumber"></a>

### *property* AcousticTotalVelocityResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.SolverComponentIDs"></a>

### *property* AcousticTotalVelocityResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Substep"></a>

### *property* AcousticTotalVelocityResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Average"></a>

### *property* AcousticTotalVelocityResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Maximum"></a>

### *property* AcousticTotalVelocityResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MaximumOfMaximumOverTime"></a>

### *property* AcousticTotalVelocityResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MaximumOfMinimumOverTime"></a>

### *property* AcousticTotalVelocityResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Minimum"></a>

### *property* AcousticTotalVelocityResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MinimumOfMaximumOverTime"></a>

### *property* AcousticTotalVelocityResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.MinimumOfMinimumOverTime"></a>

### *property* AcousticTotalVelocityResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Time"></a>

### *property* AcousticTotalVelocityResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DisplayTime"></a>

### *property* AcousticTotalVelocityResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GraphControlsXAxis"></a>

### *property* AcousticTotalVelocityResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DisplayOption"></a>

### *property* AcousticTotalVelocityResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DpfEvaluation"></a>

### *property* AcousticTotalVelocityResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.By"></a>

### *property* AcousticTotalVelocityResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ItemType"></a>

### *property* AcousticTotalVelocityResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CalculateTimeHistory"></a>

### *property* AcousticTotalVelocityResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Suppressed"></a>

### *property* AcousticTotalVelocityResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Children"></a>

### *property* AcousticTotalVelocityResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Comments"></a>

### *property* AcousticTotalVelocityResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Figures"></a>

### *property* AcousticTotalVelocityResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Images"></a>

### *property* AcousticTotalVelocityResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticTotalVelocityResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Properties"></a>

### *property* AcousticTotalVelocityResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.VisibleProperties"></a>

### *property* AcousticTotalVelocityResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticTotalVelocityResult.ClearGeneratedData"></a>

### AcousticTotalVelocityResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.EvaluateAllResults"></a>

### AcousticTotalVelocityResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.FetchRemoteResults"></a>

### AcousticTotalVelocityResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ExportToTextFile"></a>

### AcousticTotalVelocityResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.ExportAnimation"></a>

### AcousticTotalVelocityResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.DuplicateWithoutResults"></a>

### AcousticTotalVelocityResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CreateResultsAtAllSets"></a>

### AcousticTotalVelocityResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PromoteToNamedSelection"></a>

### AcousticTotalVelocityResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CreateParameter"></a>

### AcousticTotalVelocityResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddAlert"></a>

### AcousticTotalVelocityResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddConvergence"></a>

### AcousticTotalVelocityResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.RenameBasedOnDefinition"></a>

### AcousticTotalVelocityResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Delete"></a>

### AcousticTotalVelocityResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GetChildren"></a>

### AcousticTotalVelocityResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticTotalVelocityResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddComment"></a>

### AcousticTotalVelocityResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddFigure"></a>

### AcousticTotalVelocityResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.AddImage"></a>

### AcousticTotalVelocityResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Activate"></a>

### AcousticTotalVelocityResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.CopyTo"></a>

### AcousticTotalVelocityResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.Duplicate"></a>

### AcousticTotalVelocityResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GroupAllSimilarChildren"></a>

### AcousticTotalVelocityResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GroupSimilarObjects"></a>

### AcousticTotalVelocityResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PropertyByName"></a>

### AcousticTotalVelocityResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.PropertyByAPIName"></a>

### AcousticTotalVelocityResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.GetParameter"></a>

### AcousticTotalVelocityResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTotalVelocityResult.RemoveParameter"></a>

### AcousticTotalVelocityResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
