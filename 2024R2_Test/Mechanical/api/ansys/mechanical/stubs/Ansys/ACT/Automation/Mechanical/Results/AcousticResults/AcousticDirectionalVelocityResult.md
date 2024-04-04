# AcousticDirectionalVelocityResult

### *class* AcousticDirectionalVelocityResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticDirectionalVelocityResult.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#AcousticDirectionalVelocityResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#AcousticDirectionalVelocityResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticDirectionalVelocityResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticDirectionalVelocityResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticDirectionalVelocityResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticDirectionalVelocityResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticDirectionalVelocityResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticDirectionalVelocityResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticDirectionalVelocityResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticDirectionalVelocityResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticDirectionalVelocityResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticDirectionalVelocityResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticDirectionalVelocityResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticDirectionalVelocityResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticDirectionalVelocityResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticDirectionalVelocityResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticDirectionalVelocityResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticDirectionalVelocityResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticDirectionalVelocityResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticDirectionalVelocityResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticDirectionalVelocityResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticDirectionalVelocityResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticDirectionalVelocityResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticDirectionalVelocityResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticDirectionalVelocityResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`NormalOrientation`](#AcousticDirectionalVelocityResult.NormalOrientation)                                               | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Mode`](#AcousticDirectionalVelocityResult.Mode)                                                                         | Gets or sets the Mode.                                                 |
| [`ReportedFrequency`](#AcousticDirectionalVelocityResult.ReportedFrequency)                                               | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticDirectionalVelocityResult.DampedFrequency)                                                   | Gets the DampedFrequency.                                              |
| [`LogarithmicDecrement`](#AcousticDirectionalVelocityResult.LogarithmicDecrement)                                         | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticDirectionalVelocityResult.ModalDampingRatio)                                               | Gets the ModalDampingRatio.                                            |
| [`Stability`](#AcousticDirectionalVelocityResult.Stability)                                                               | Gets the Stability.                                                    |
| [`SweepingPhase`](#AcousticDirectionalVelocityResult.SweepingPhase)                                                       | Gets or sets the SweepingPhase.                                        |
| [`Frequency`](#AcousticDirectionalVelocityResult.Frequency)                                                               | Gets or sets the Frequency.                                            |
| [`Amplitude`](#AcousticDirectionalVelocityResult.Amplitude)                                                               | Gets or sets the Amplitude.                                            |
| [`PlotData`](#AcousticDirectionalVelocityResult.PlotData)                                                                 | Gets the result table.                                                 |
| [`Location`](#AcousticDirectionalVelocityResult.Location)                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticDirectionalVelocityResult.TimeForMinimumOfMinimumValues)                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticDirectionalVelocityResult.TimeForMinimumOfMaximumValues)                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticDirectionalVelocityResult.LoadStepForMinimumOfMinimumValues)               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticDirectionalVelocityResult.LoadStepForMinimumOfMaximumValues)               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticDirectionalVelocityResult.TimeForMaximumOfMinimumValues)                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticDirectionalVelocityResult.TimeForMaximumOfMaximumValues)                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticDirectionalVelocityResult.LoadStepForMaximumOfMinimumValues)               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticDirectionalVelocityResult.LoadStepForMaximumOfMaximumValues)               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticDirectionalVelocityResult.IsSolved)                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticDirectionalVelocityResult.ScopingMethod)                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticDirectionalVelocityResult.SetNumber)                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticDirectionalVelocityResult.CombinationNumber)                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticDirectionalVelocityResult.SolutionCombinationDriver)                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticDirectionalVelocityResult.WaterfallPanelShowTextOnMosaic)                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticDirectionalVelocityResult.CrackFrontNumber)                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticDirectionalVelocityResult.GlobalIDs)                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticDirectionalVelocityResult.Identifier)                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticDirectionalVelocityResult.IterationNumber)                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticDirectionalVelocityResult.LoadStep)                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticDirectionalVelocityResult.MaximumOccursOn)                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticDirectionalVelocityResult.MinimumOccursOn)                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticDirectionalVelocityResult.LoadStepNumber)                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticDirectionalVelocityResult.SolverComponentIDs)                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticDirectionalVelocityResult.Substep)                                                                   | Gets the Substep.                                                      |
| [`Average`](#AcousticDirectionalVelocityResult.Average)                                                                   | Gets the Average.                                                      |
| [`Maximum`](#AcousticDirectionalVelocityResult.Maximum)                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticDirectionalVelocityResult.MaximumOfMaximumOverTime)                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticDirectionalVelocityResult.MaximumOfMinimumOverTime)                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticDirectionalVelocityResult.Minimum)                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticDirectionalVelocityResult.MinimumOfMaximumOverTime)                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticDirectionalVelocityResult.MinimumOfMinimumOverTime)                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticDirectionalVelocityResult.Time)                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticDirectionalVelocityResult.DisplayTime)                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticDirectionalVelocityResult.DisplayOption)                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticDirectionalVelocityResult.DpfEvaluation)                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticDirectionalVelocityResult.By)                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticDirectionalVelocityResult.ItemType)                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticDirectionalVelocityResult.CalculateTimeHistory)                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticDirectionalVelocityResult.Suppressed)                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticDirectionalVelocityResult.Children)                                                                 | Gets the list of children.                                             |
| [`Comments`](#AcousticDirectionalVelocityResult.Comments)                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticDirectionalVelocityResult.Figures)                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#AcousticDirectionalVelocityResult.Images)                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticDirectionalVelocityResult.Properties)                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticDirectionalVelocityResult.VisibleProperties)                                               | Gets the list of properties that are visible for this object.          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.AcousticResults import AcousticDirectionalVelocityResult
```

## Property detail

### *property* AcousticDirectionalVelocityResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AcousticDirectionalVelocityResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AcousticDirectionalVelocityResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AcousticDirectionalVelocityResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
