# FractureToolResult

<a id="FractureToolResult"></a>

### *class* FractureToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureToolResult.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FractureToolResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FractureToolResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FractureToolResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FractureToolResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FractureToolResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FractureToolResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FractureToolResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FractureToolResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FractureToolResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FractureToolResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FractureToolResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FractureToolResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FractureToolResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FractureToolResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FractureToolResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureToolResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FractureToolResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FractureToolResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FractureToolResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FractureToolResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureToolResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FractureToolResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FractureToolResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FractureToolResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FractureToolResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](#FractureToolResult.Mode)                                                                                        | Gets or sets the Mode.                                                 |
| [`FractureResultType`](#FractureToolResult.FractureResultType)                                                            | Gets or sets the FractureResultType.                                   |
| [`FractureResultSubType`](#FractureToolResult.FractureResultSubType)                                                      | Gets or sets the FractureResultSubType.                                |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`ActiveContour`](#FractureToolResult.ActiveContour)                                                                      | Gets or sets the ActiveContour.                                        |
| [`ActiveContourEnd`](#FractureToolResult.ActiveContourEnd)                                                                | Gets or sets the ActiveContourEnd.                                     |
| [`ActiveContourStart`](#FractureToolResult.ActiveContourStart)                                                            | Gets or sets the ActiveContourStart.                                   |
| [`SolverID`](#FractureToolResult.SolverID)                                                                                | Gets or sets the SolverID.                                             |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#FractureToolResult.PlotData)                                                                                | Gets the result table.                                                 |
| [`Location`](#FractureToolResult.Location)                                                                                | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FractureToolResult.TimeForMinimumOfMinimumValues)                                      | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FractureToolResult.TimeForMinimumOfMaximumValues)                                      | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FractureToolResult.LoadStepForMinimumOfMinimumValues)                              | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FractureToolResult.LoadStepForMinimumOfMaximumValues)                              | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FractureToolResult.TimeForMaximumOfMinimumValues)                                      | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FractureToolResult.TimeForMaximumOfMaximumValues)                                      | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FractureToolResult.LoadStepForMaximumOfMinimumValues)                              | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FractureToolResult.LoadStepForMaximumOfMaximumValues)                              | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FractureToolResult.IsSolved)                                                                                | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FractureToolResult.ScopingMethod)                                                                      | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FractureToolResult.SetNumber)                                                                              | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FractureToolResult.CombinationNumber)                                                              | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FractureToolResult.SolutionCombinationDriver)                                              | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FractureToolResult.WaterfallPanelShowTextOnMosaic)                                    | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FractureToolResult.CrackFrontNumber)                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FractureToolResult.GlobalIDs)                                                                              | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FractureToolResult.Identifier)                                                                            | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FractureToolResult.IterationNumber)                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#FractureToolResult.LoadStep)                                                                                | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FractureToolResult.MaximumOccursOn)                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FractureToolResult.MinimumOccursOn)                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FractureToolResult.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FractureToolResult.SolverComponentIDs)                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FractureToolResult.Substep)                                                                                  | Gets the Substep.                                                      |
| [`Average`](#FractureToolResult.Average)                                                                                  | Gets the Average.                                                      |
| [`Maximum`](#FractureToolResult.Maximum)                                                                                  | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FractureToolResult.MaximumOfMaximumOverTime)                                                | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FractureToolResult.MaximumOfMinimumOverTime)                                                | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FractureToolResult.Minimum)                                                                                  | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FractureToolResult.MinimumOfMaximumOverTime)                                                | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FractureToolResult.MinimumOfMinimumOverTime)                                                | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FractureToolResult.Time)                                                                                        | Gets the Time.                                                         |
| [`DisplayTime`](#FractureToolResult.DisplayTime)                                                                          | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FractureToolResult.DisplayOption)                                                                      | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FractureToolResult.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FractureToolResult.By)                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#FractureToolResult.ItemType)                                                                                | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FractureToolResult.CalculateTimeHistory)                                                        | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FractureToolResult.Suppressed)                                                                            | Gets or sets the Suppressed.                                           |
| [`Children`](#FractureToolResult.Children)                                                                                | Gets the list of children.                                             |
| [`Comments`](#FractureToolResult.Comments)                                                                                | Gets the list of associated comments.                                  |
| [`Figures`](#FractureToolResult.Figures)                                                                                  | Gets the list of associated figures.                                   |
| [`Images`](#FractureToolResult.Images)                                                                                    | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FractureToolResult.Properties)                                                                            | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FractureToolResult.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureToolResult
```

<a id="property-detail"></a>

## Property detail

<a id="FractureToolResult.Mode"></a>

### *property* FractureToolResult.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.FractureResultType"></a>

### *property* FractureToolResult.FractureResultType *: Ansys.Mechanical.DataModel.Enums.FractureResultType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureResultType.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.FractureResultSubType"></a>

### *property* FractureToolResult.FractureResultSubType *: Ansys.Mechanical.DataModel.Enums.FractureResultSubType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureResultSubType.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.InternalObject"></a>

### *property* FractureToolResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ActiveContour"></a>

### *property* FractureToolResult.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ActiveContourEnd"></a>

### *property* FractureToolResult.ActiveContourEnd *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContourEnd.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ActiveContourStart"></a>

### *property* FractureToolResult.ActiveContourStart *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContourStart.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.SolverID"></a>

### *property* FractureToolResult.SolverID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.DataModelObjectCategory"></a>

### *property* FractureToolResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.PlotData"></a>

### *property* FractureToolResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Location"></a>

### *property* FractureToolResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.TimeForMinimumOfMinimumValues"></a>

### *property* FractureToolResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.TimeForMinimumOfMaximumValues"></a>

### *property* FractureToolResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* FractureToolResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* FractureToolResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.TimeForMaximumOfMinimumValues"></a>

### *property* FractureToolResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.TimeForMaximumOfMaximumValues"></a>

### *property* FractureToolResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* FractureToolResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* FractureToolResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.IsSolved"></a>

### *property* FractureToolResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CoordinateSystem"></a>

### *property* FractureToolResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ScopingMethod"></a>

### *property* FractureToolResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.SetNumber"></a>

### *property* FractureToolResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CombinationNumber"></a>

### *property* FractureToolResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.SolutionCombinationDriver"></a>

### *property* FractureToolResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Path"></a>

### *property* FractureToolResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Surface"></a>

### *property* FractureToolResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.NamedSelections"></a>

### *property* FractureToolResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* FractureToolResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CrackFrontNumber"></a>

### *property* FractureToolResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.GlobalIDs"></a>

### *property* FractureToolResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Identifier"></a>

### *property* FractureToolResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.IterationNumber"></a>

### *property* FractureToolResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.LoadStep"></a>

### *property* FractureToolResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.MaximumOccursOn"></a>

### *property* FractureToolResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.MinimumOccursOn"></a>

### *property* FractureToolResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.LoadStepNumber"></a>

### *property* FractureToolResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.SolverComponentIDs"></a>

### *property* FractureToolResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Substep"></a>

### *property* FractureToolResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Average"></a>

### *property* FractureToolResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Maximum"></a>

### *property* FractureToolResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.MaximumOfMaximumOverTime"></a>

### *property* FractureToolResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.MaximumOfMinimumOverTime"></a>

### *property* FractureToolResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Minimum"></a>

### *property* FractureToolResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.MinimumOfMaximumOverTime"></a>

### *property* FractureToolResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.MinimumOfMinimumOverTime"></a>

### *property* FractureToolResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Time"></a>

### *property* FractureToolResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.DisplayTime"></a>

### *property* FractureToolResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.GraphControlsXAxis"></a>

### *property* FractureToolResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.DisplayOption"></a>

### *property* FractureToolResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.DpfEvaluation"></a>

### *property* FractureToolResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.By"></a>

### *property* FractureToolResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ItemType"></a>

### *property* FractureToolResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CalculateTimeHistory"></a>

### *property* FractureToolResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Suppressed"></a>

### *property* FractureToolResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Children"></a>

### *property* FractureToolResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Comments"></a>

### *property* FractureToolResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Figures"></a>

### *property* FractureToolResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Images"></a>

### *property* FractureToolResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FractureToolResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Properties"></a>

### *property* FractureToolResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.VisibleProperties"></a>

### *property* FractureToolResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureToolResult.ClearGeneratedData"></a>

### FractureToolResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.EvaluateAllResults"></a>

### FractureToolResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.FetchRemoteResults"></a>

### FractureToolResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ExportToTextFile"></a>

### FractureToolResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.ExportAnimation"></a>

### FractureToolResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.DuplicateWithoutResults"></a>

### FractureToolResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CreateResultsAtAllSets"></a>

### FractureToolResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.PromoteToNamedSelection"></a>

### FractureToolResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CreateParameter"></a>

### FractureToolResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.AddAlert"></a>

### FractureToolResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.AddConvergence"></a>

### FractureToolResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.RenameBasedOnDefinition"></a>

### FractureToolResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Delete"></a>

### FractureToolResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.GetChildren"></a>

### FractureToolResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FractureToolResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.AddComment"></a>

### FractureToolResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.AddFigure"></a>

### FractureToolResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.AddImage"></a>

### FractureToolResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Activate"></a>

### FractureToolResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.CopyTo"></a>

### FractureToolResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.Duplicate"></a>

### FractureToolResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.GroupAllSimilarChildren"></a>

### FractureToolResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.GroupSimilarObjects"></a>

### FractureToolResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.PropertyByName"></a>

### FractureToolResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.PropertyByAPIName"></a>

### FractureToolResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.GetParameter"></a>

### FractureToolResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResult.RemoveParameter"></a>

### FractureToolResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
