<a id="electricresult"></a>

# ElectricResult

<a id="ElectricResult"></a>

### *class* ElectricResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricResult.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ElectricResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ElectricResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ElectricResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ElectricResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ElectricResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ElectricResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ElectricResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ElectricResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ElectricResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ElectricResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ElectricResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ElectricResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectricResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectricResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectricResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectricResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectricResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectricResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectricResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectricResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectricResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectricResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectricResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ElectricResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectricResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`ReportedFrequency`](#ElectricResult.ReportedFrequency)                                                                  | Gets the ReportedFrequency.                                            |
| [`SweepingPhase`](#ElectricResult.SweepingPhase)                                                                          | Gets or sets the SweepingPhase.                                        |
| [`PhaseIncrement`](#ElectricResult.PhaseIncrement)                                                                        | Gets or sets the PhaseIncrement.                                       |
| [`Frequency`](#ElectricResult.Frequency)                                                                                  | Gets or sets the Frequency.                                            |
| [`ElectricResultType`](#ElectricResult.ElectricResultType)                                                                | Gets or sets the ElectricResultType.                                   |
| [`Amplitude`](#ElectricResult.Amplitude)                                                                                  | Gets or sets the Amplitude.                                            |
| [`AverageAcrossBodies`](#ElectricResult.AverageAcrossBodies)                                                              | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#ElectricResult.PlotData)                                                                                    | Gets the result table.                                                 |
| [`Location`](#ElectricResult.Location)                                                                                    | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ElectricResult.TimeForMinimumOfMinimumValues)                                          | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElectricResult.TimeForMinimumOfMaximumValues)                                          | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ElectricResult.LoadStepForMinimumOfMinimumValues)                                  | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElectricResult.LoadStepForMinimumOfMaximumValues)                                  | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ElectricResult.TimeForMaximumOfMinimumValues)                                          | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ElectricResult.TimeForMaximumOfMaximumValues)                                          | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ElectricResult.LoadStepForMaximumOfMinimumValues)                                  | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ElectricResult.LoadStepForMaximumOfMaximumValues)                                  | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ElectricResult.IsSolved)                                                                                    | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ElectricResult.ScopingMethod)                                                                          | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElectricResult.SetNumber)                                                                                  | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ElectricResult.CombinationNumber)                                                                  | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ElectricResult.SolutionCombinationDriver)                                                  | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ElectricResult.WaterfallPanelShowTextOnMosaic)                                        | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#ElectricResult.CrackFrontNumber)                                                                    | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ElectricResult.GlobalIDs)                                                                                  | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ElectricResult.Identifier)                                                                                | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ElectricResult.IterationNumber)                                                                      | Gets the IterationNumber.                                              |
| [`LoadStep`](#ElectricResult.LoadStep)                                                                                    | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ElectricResult.MaximumOccursOn)                                                                      | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ElectricResult.MinimumOccursOn)                                                                      | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ElectricResult.LoadStepNumber)                                                                        | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ElectricResult.SolverComponentIDs)                                                                | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ElectricResult.Substep)                                                                                      | Gets the Substep.                                                      |
| [`Average`](#ElectricResult.Average)                                                                                      | Gets the Average.                                                      |
| [`Maximum`](#ElectricResult.Maximum)                                                                                      | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ElectricResult.MaximumOfMaximumOverTime)                                                    | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElectricResult.MaximumOfMinimumOverTime)                                                    | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElectricResult.Minimum)                                                                                      | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ElectricResult.MinimumOfMaximumOverTime)                                                    | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElectricResult.MinimumOfMinimumOverTime)                                                    | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ElectricResult.Time)                                                                                            | Gets the Time.                                                         |
| [`DisplayTime`](#ElectricResult.DisplayTime)                                                                              | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ElectricResult.DisplayOption)                                                                          | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ElectricResult.DpfEvaluation)                                                                          | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ElectricResult.By)                                                                                                | Gets or sets the By.                                                   |
| [`ItemType`](#ElectricResult.ItemType)                                                                                    | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ElectricResult.CalculateTimeHistory)                                                            | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ElectricResult.Suppressed)                                                                                | Gets or sets the Suppressed.                                           |
| [`Children`](#ElectricResult.Children)                                                                                    | Gets the list of children.                                             |
| [`Comments`](#ElectricResult.Comments)                                                                                    | Gets the list of associated comments.                                  |
| [`Figures`](#ElectricResult.Figures)                                                                                      | Gets the list of associated figures.                                   |
| [`Images`](#ElectricResult.Images)                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ElectricResult.Properties)                                                                                | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ElectricResult.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ElectricResults import ElectricResult
```

<a id="property-detail"></a>

## Property detail

<a id="ElectricResult.InternalObject"></a>

### *property* ElectricResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.ReportedFrequency"></a>

### *property* ElectricResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.SweepingPhase"></a>

### *property* ElectricResult.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.PhaseIncrement"></a>

### *property* ElectricResult.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Frequency"></a>

### *property* ElectricResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.ElectricResultType"></a>

### *property* ElectricResult.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Amplitude"></a>

### *property* ElectricResult.Amplitude *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.AverageAcrossBodies"></a>

### *property* ElectricResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.DataModelObjectCategory"></a>

### *property* ElectricResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.PlotData"></a>

### *property* ElectricResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Location"></a>

### *property* ElectricResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.TimeForMinimumOfMinimumValues"></a>

### *property* ElectricResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.TimeForMinimumOfMaximumValues"></a>

### *property* ElectricResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElectricResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElectricResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.TimeForMaximumOfMinimumValues"></a>

### *property* ElectricResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.TimeForMaximumOfMaximumValues"></a>

### *property* ElectricResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElectricResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElectricResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.IsSolved"></a>

### *property* ElectricResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CoordinateSystem"></a>

### *property* ElectricResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.ScopingMethod"></a>

### *property* ElectricResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.SetNumber"></a>

### *property* ElectricResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CombinationNumber"></a>

### *property* ElectricResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.SolutionCombinationDriver"></a>

### *property* ElectricResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Path"></a>

### *property* ElectricResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Surface"></a>

### *property* ElectricResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.NamedSelections"></a>

### *property* ElectricResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* ElectricResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CrackFrontNumber"></a>

### *property* ElectricResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.GlobalIDs"></a>

### *property* ElectricResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Identifier"></a>

### *property* ElectricResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.IterationNumber"></a>

### *property* ElectricResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.LoadStep"></a>

### *property* ElectricResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.MaximumOccursOn"></a>

### *property* ElectricResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.MinimumOccursOn"></a>

### *property* ElectricResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.LoadStepNumber"></a>

### *property* ElectricResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.SolverComponentIDs"></a>

### *property* ElectricResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Substep"></a>

### *property* ElectricResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Average"></a>

### *property* ElectricResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Maximum"></a>

### *property* ElectricResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.MaximumOfMaximumOverTime"></a>

### *property* ElectricResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.MaximumOfMinimumOverTime"></a>

### *property* ElectricResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Minimum"></a>

### *property* ElectricResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.MinimumOfMaximumOverTime"></a>

### *property* ElectricResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.MinimumOfMinimumOverTime"></a>

### *property* ElectricResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Time"></a>

### *property* ElectricResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.DisplayTime"></a>

### *property* ElectricResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.GraphControlsXAxis"></a>

### *property* ElectricResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.DisplayOption"></a>

### *property* ElectricResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.DpfEvaluation"></a>

### *property* ElectricResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.By"></a>

### *property* ElectricResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.ItemType"></a>

### *property* ElectricResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CalculateTimeHistory"></a>

### *property* ElectricResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Suppressed"></a>

### *property* ElectricResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Children"></a>

### *property* ElectricResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Comments"></a>

### *property* ElectricResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Figures"></a>

### *property* ElectricResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Images"></a>

### *property* ElectricResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectricResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Properties"></a>

### *property* ElectricResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.VisibleProperties"></a>

### *property* ElectricResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricResult.ClearGeneratedData"></a>

### ElectricResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.EvaluateAllResults"></a>

### ElectricResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.FetchRemoteResults"></a>

### ElectricResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.ExportToTextFile"></a>

### ElectricResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.ExportAnimation"></a>

### ElectricResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.DuplicateWithoutResults"></a>

### ElectricResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CreateResultsAtAllSets"></a>

### ElectricResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.PromoteToNamedSelection"></a>

### ElectricResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CreateParameter"></a>

### ElectricResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.AddAlert"></a>

### ElectricResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.AddConvergence"></a>

### ElectricResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.RenameBasedOnDefinition"></a>

### ElectricResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Delete"></a>

### ElectricResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.GetChildren"></a>

### ElectricResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectricResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.AddComment"></a>

### ElectricResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.AddFigure"></a>

### ElectricResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.AddImage"></a>

### ElectricResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Activate"></a>

### ElectricResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.CopyTo"></a>

### ElectricResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.Duplicate"></a>

### ElectricResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.GroupAllSimilarChildren"></a>

### ElectricResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.GroupSimilarObjects"></a>

### ElectricResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.PropertyByName"></a>

### ElectricResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.PropertyByAPIName"></a>

### ElectricResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.GetParameter"></a>

### ElectricResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricResult.RemoveParameter"></a>

### ElectricResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
