<a id="vectorshearforce"></a>

# VectorShearForce

<a id="VectorShearForce"></a>

### *class* VectorShearForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VectorShearForce.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#VectorShearForce.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#VectorShearForce.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#VectorShearForce.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#VectorShearForce.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#VectorShearForce.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#VectorShearForce.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#VectorShearForce.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#VectorShearForce.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#VectorShearForce.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#VectorShearForce.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#VectorShearForce.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#VectorShearForce.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#VectorShearForce.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VectorShearForce.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VectorShearForce.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VectorShearForce.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VectorShearForce.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VectorShearForce.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VectorShearForce.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VectorShearForce.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VectorShearForce.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VectorShearForce.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VectorShearForce.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#VectorShearForce.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VectorShearForce.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#VectorShearForce.PlotData)                                                                                  | Gets the result table.                                                 |
| [`Location`](#VectorShearForce.Location)                                                                                  | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#VectorShearForce.TimeForMinimumOfMinimumValues)                                        | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#VectorShearForce.TimeForMinimumOfMaximumValues)                                        | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#VectorShearForce.LoadStepForMinimumOfMinimumValues)                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#VectorShearForce.LoadStepForMinimumOfMaximumValues)                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#VectorShearForce.TimeForMaximumOfMinimumValues)                                        | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#VectorShearForce.TimeForMaximumOfMaximumValues)                                        | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#VectorShearForce.LoadStepForMaximumOfMinimumValues)                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#VectorShearForce.LoadStepForMaximumOfMaximumValues)                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#VectorShearForce.IsSolved)                                                                                  | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#VectorShearForce.ScopingMethod)                                                                        | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#VectorShearForce.SetNumber)                                                                                | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#VectorShearForce.CombinationNumber)                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#VectorShearForce.SolutionCombinationDriver)                                                | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#VectorShearForce.WaterfallPanelShowTextOnMosaic)                                      | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#VectorShearForce.CrackFrontNumber)                                                                  | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#VectorShearForce.GlobalIDs)                                                                                | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#VectorShearForce.Identifier)                                                                              | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#VectorShearForce.IterationNumber)                                                                    | Gets the IterationNumber.                                              |
| [`LoadStep`](#VectorShearForce.LoadStep)                                                                                  | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#VectorShearForce.MaximumOccursOn)                                                                    | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#VectorShearForce.MinimumOccursOn)                                                                    | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#VectorShearForce.LoadStepNumber)                                                                      | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#VectorShearForce.SolverComponentIDs)                                                              | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#VectorShearForce.Substep)                                                                                    | Gets the Substep.                                                      |
| [`Average`](#VectorShearForce.Average)                                                                                    | Gets the Average.                                                      |
| [`Maximum`](#VectorShearForce.Maximum)                                                                                    | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#VectorShearForce.MaximumOfMaximumOverTime)                                                  | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#VectorShearForce.MaximumOfMinimumOverTime)                                                  | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#VectorShearForce.Minimum)                                                                                    | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#VectorShearForce.MinimumOfMaximumOverTime)                                                  | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#VectorShearForce.MinimumOfMinimumOverTime)                                                  | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#VectorShearForce.Time)                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#VectorShearForce.DisplayTime)                                                                            | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#VectorShearForce.DisplayOption)                                                                        | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#VectorShearForce.DpfEvaluation)                                                                        | Gets or sets the DpfEvaluation.                                        |
| [`By`](#VectorShearForce.By)                                                                                              | Gets or sets the By.                                                   |
| [`ItemType`](#VectorShearForce.ItemType)                                                                                  | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#VectorShearForce.CalculateTimeHistory)                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#VectorShearForce.Suppressed)                                                                              | Gets or sets the Suppressed.                                           |
| [`Children`](#VectorShearForce.Children)                                                                                  | Gets the list of children.                                             |
| [`Comments`](#VectorShearForce.Comments)                                                                                  | Gets the list of associated comments.                                  |
| [`Figures`](#VectorShearForce.Figures)                                                                                    | Gets the list of associated figures.                                   |
| [`Images`](#VectorShearForce.Images)                                                                                      | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#VectorShearForce.Properties)                                                                              | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#VectorShearForce.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamResults import VectorShearForce
```

<a id="property-detail"></a>

## Property detail

<a id="VectorShearForce.InternalObject"></a>

### *property* VectorShearForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.DataModelObjectCategory"></a>

### *property* VectorShearForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.PlotData"></a>

### *property* VectorShearForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Location"></a>

### *property* VectorShearForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.TimeForMinimumOfMinimumValues"></a>

### *property* VectorShearForce.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.TimeForMinimumOfMaximumValues"></a>

### *property* VectorShearForce.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.LoadStepForMinimumOfMinimumValues"></a>

### *property* VectorShearForce.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.LoadStepForMinimumOfMaximumValues"></a>

### *property* VectorShearForce.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.TimeForMaximumOfMinimumValues"></a>

### *property* VectorShearForce.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.TimeForMaximumOfMaximumValues"></a>

### *property* VectorShearForce.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.LoadStepForMaximumOfMinimumValues"></a>

### *property* VectorShearForce.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.LoadStepForMaximumOfMaximumValues"></a>

### *property* VectorShearForce.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.IsSolved"></a>

### *property* VectorShearForce.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CoordinateSystem"></a>

### *property* VectorShearForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.ScopingMethod"></a>

### *property* VectorShearForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.SetNumber"></a>

### *property* VectorShearForce.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CombinationNumber"></a>

### *property* VectorShearForce.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.SolutionCombinationDriver"></a>

### *property* VectorShearForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Path"></a>

### *property* VectorShearForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Surface"></a>

### *property* VectorShearForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.NamedSelections"></a>

### *property* VectorShearForce.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.WaterfallPanelShowTextOnMosaic"></a>

### *property* VectorShearForce.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CrackFrontNumber"></a>

### *property* VectorShearForce.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.GlobalIDs"></a>

### *property* VectorShearForce.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Identifier"></a>

### *property* VectorShearForce.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.IterationNumber"></a>

### *property* VectorShearForce.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.LoadStep"></a>

### *property* VectorShearForce.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.MaximumOccursOn"></a>

### *property* VectorShearForce.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.MinimumOccursOn"></a>

### *property* VectorShearForce.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.LoadStepNumber"></a>

### *property* VectorShearForce.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.SolverComponentIDs"></a>

### *property* VectorShearForce.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Substep"></a>

### *property* VectorShearForce.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Average"></a>

### *property* VectorShearForce.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Maximum"></a>

### *property* VectorShearForce.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.MaximumOfMaximumOverTime"></a>

### *property* VectorShearForce.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.MaximumOfMinimumOverTime"></a>

### *property* VectorShearForce.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Minimum"></a>

### *property* VectorShearForce.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.MinimumOfMaximumOverTime"></a>

### *property* VectorShearForce.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.MinimumOfMinimumOverTime"></a>

### *property* VectorShearForce.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Time"></a>

### *property* VectorShearForce.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.DisplayTime"></a>

### *property* VectorShearForce.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.GraphControlsXAxis"></a>

### *property* VectorShearForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.DisplayOption"></a>

### *property* VectorShearForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.DpfEvaluation"></a>

### *property* VectorShearForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.By"></a>

### *property* VectorShearForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.ItemType"></a>

### *property* VectorShearForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CalculateTimeHistory"></a>

### *property* VectorShearForce.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Suppressed"></a>

### *property* VectorShearForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Children"></a>

### *property* VectorShearForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Comments"></a>

### *property* VectorShearForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Figures"></a>

### *property* VectorShearForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Images"></a>

### *property* VectorShearForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* VectorShearForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Properties"></a>

### *property* VectorShearForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.VisibleProperties"></a>

### *property* VectorShearForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VectorShearForce.ClearGeneratedData"></a>

### VectorShearForce.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.EvaluateAllResults"></a>

### VectorShearForce.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.FetchRemoteResults"></a>

### VectorShearForce.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.ExportToTextFile"></a>

### VectorShearForce.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.ExportAnimation"></a>

### VectorShearForce.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.DuplicateWithoutResults"></a>

### VectorShearForce.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CreateResultsAtAllSets"></a>

### VectorShearForce.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.PromoteToNamedSelection"></a>

### VectorShearForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CreateParameter"></a>

### VectorShearForce.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.AddAlert"></a>

### VectorShearForce.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.AddConvergence"></a>

### VectorShearForce.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.RenameBasedOnDefinition"></a>

### VectorShearForce.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Delete"></a>

### VectorShearForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.GetChildren"></a>

### VectorShearForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### VectorShearForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.AddComment"></a>

### VectorShearForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.AddFigure"></a>

### VectorShearForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.AddImage"></a>

### VectorShearForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Activate"></a>

### VectorShearForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.CopyTo"></a>

### VectorShearForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.Duplicate"></a>

### VectorShearForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.GroupAllSimilarChildren"></a>

### VectorShearForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.GroupSimilarObjects"></a>

### VectorShearForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.PropertyByName"></a>

### VectorShearForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.PropertyByAPIName"></a>

### VectorShearForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.GetParameter"></a>

### VectorShearForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VectorShearForce.RemoveParameter"></a>

### VectorShearForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
