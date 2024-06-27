# FatigueLife

<a id="FatigueLife"></a>

### *class* FatigueLife

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FatigueLife.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FatigueLife.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FatigueLife.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueLife.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueLife.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueLife.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueLife.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueLife.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueLife.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueLife.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueLife.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueLife.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueLife.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueLife.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueLife.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueLife.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueLife.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueLife.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueLife.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueLife.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueLife.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueLife.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueLife.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueLife.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueLife.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueLife.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`Method`](#FatigueLife.Method)                                                                                           | Gets the Method.                                                       |
| [`DesignLife`](#FatigueLife.DesignLife)                                                                                   | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueLife.AverageAcrossBodies)                                                                 | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FatigueLife.PlotData)                                                                                       | Gets the result table.                                                 |
| [`Location`](#FatigueLife.Location)                                                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueLife.TimeForMinimumOfMinimumValues)                                             | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueLife.TimeForMinimumOfMaximumValues)                                             | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueLife.LoadStepForMinimumOfMinimumValues)                                     | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueLife.LoadStepForMinimumOfMaximumValues)                                     | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueLife.TimeForMaximumOfMinimumValues)                                             | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueLife.TimeForMaximumOfMaximumValues)                                             | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueLife.LoadStepForMaximumOfMinimumValues)                                     | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueLife.LoadStepForMaximumOfMaximumValues)                                     | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueLife.IsSolved)                                                                                       | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueLife.ScopingMethod)                                                                             | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueLife.SetNumber)                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueLife.CombinationNumber)                                                                     | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueLife.SolutionCombinationDriver)                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                              | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                             | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#FatigueLife.WaterfallPanelShowTextOnMosaic)                                           | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#FatigueLife.CrackFrontNumber)                                                                       | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueLife.GlobalIDs)                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueLife.Identifier)                                                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueLife.IterationNumber)                                                                         | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueLife.LoadStep)                                                                                       | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueLife.MaximumOccursOn)                                                                         | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueLife.MinimumOccursOn)                                                                         | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueLife.LoadStepNumber)                                                                           | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueLife.SolverComponentIDs)                                                                   | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueLife.Substep)                                                                                         | Gets the Substep.                                                      |
| [`Average`](#FatigueLife.Average)                                                                                         | Gets the Average.                                                      |
| [`Maximum`](#FatigueLife.Maximum)                                                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueLife.MaximumOfMaximumOverTime)                                                       | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueLife.MaximumOfMinimumOverTime)                                                       | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueLife.Minimum)                                                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueLife.MinimumOfMaximumOverTime)                                                       | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueLife.MinimumOfMinimumOverTime)                                                       | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueLife.Time)                                                                                               | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueLife.DisplayTime)                                                                                 | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueLife.DisplayOption)                                                                             | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueLife.DpfEvaluation)                                                                             | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueLife.By)                                                                                                   | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueLife.ItemType)                                                                                       | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueLife.CalculateTimeHistory)                                                               | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueLife.Suppressed)                                                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueLife.Children)                                                                                       | Gets the list of children.                                             |
| [`Comments`](#FatigueLife.Comments)                                                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueLife.Figures)                                                                                         | Gets the list of associated figures.                                   |
| [`Images`](#FatigueLife.Images)                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueLife.Properties)                                                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueLife.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults import FatigueLife
```

<a id="property-detail"></a>

## Property detail

<a id="FatigueLife.InternalObject"></a>

### *property* FatigueLife.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.DataModelObjectCategory"></a>

### *property* FatigueLife.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Method"></a>

### *property* FatigueLife.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.DesignLife"></a>

### *property* FatigueLife.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.AverageAcrossBodies"></a>

### *property* FatigueLife.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.PlotData"></a>

### *property* FatigueLife.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Location"></a>

### *property* FatigueLife.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueLife.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueLife.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueLife.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueLife.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueLife.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueLife.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueLife.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueLife.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.IsSolved"></a>

### *property* FatigueLife.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CoordinateSystem"></a>

### *property* FatigueLife.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.ScopingMethod"></a>

### *property* FatigueLife.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.SetNumber"></a>

### *property* FatigueLife.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CombinationNumber"></a>

### *property* FatigueLife.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.SolutionCombinationDriver"></a>

### *property* FatigueLife.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Path"></a>

### *property* FatigueLife.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Surface"></a>

### *property* FatigueLife.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.NamedSelections"></a>

### *property* FatigueLife.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.WaterfallPanelShowTextOnMosaic"></a>

### *property* FatigueLife.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CrackFrontNumber"></a>

### *property* FatigueLife.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.GlobalIDs"></a>

### *property* FatigueLife.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Identifier"></a>

### *property* FatigueLife.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.IterationNumber"></a>

### *property* FatigueLife.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.LoadStep"></a>

### *property* FatigueLife.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.MaximumOccursOn"></a>

### *property* FatigueLife.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.MinimumOccursOn"></a>

### *property* FatigueLife.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.LoadStepNumber"></a>

### *property* FatigueLife.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.SolverComponentIDs"></a>

### *property* FatigueLife.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Substep"></a>

### *property* FatigueLife.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Average"></a>

### *property* FatigueLife.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Maximum"></a>

### *property* FatigueLife.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.MaximumOfMaximumOverTime"></a>

### *property* FatigueLife.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.MaximumOfMinimumOverTime"></a>

### *property* FatigueLife.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Minimum"></a>

### *property* FatigueLife.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.MinimumOfMaximumOverTime"></a>

### *property* FatigueLife.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.MinimumOfMinimumOverTime"></a>

### *property* FatigueLife.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Time"></a>

### *property* FatigueLife.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.DisplayTime"></a>

### *property* FatigueLife.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.GraphControlsXAxis"></a>

### *property* FatigueLife.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.DisplayOption"></a>

### *property* FatigueLife.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.DpfEvaluation"></a>

### *property* FatigueLife.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.By"></a>

### *property* FatigueLife.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.ItemType"></a>

### *property* FatigueLife.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CalculateTimeHistory"></a>

### *property* FatigueLife.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Suppressed"></a>

### *property* FatigueLife.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Children"></a>

### *property* FatigueLife.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Comments"></a>

### *property* FatigueLife.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Figures"></a>

### *property* FatigueLife.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Images"></a>

### *property* FatigueLife.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueLife.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Properties"></a>

### *property* FatigueLife.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.VisibleProperties"></a>

### *property* FatigueLife.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueLife.ClearGeneratedData"></a>

### FatigueLife.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.EvaluateAllResults"></a>

### FatigueLife.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.FetchRemoteResults"></a>

### FatigueLife.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.ExportToTextFile"></a>

### FatigueLife.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.ExportAnimation"></a>

### FatigueLife.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.DuplicateWithoutResults"></a>

### FatigueLife.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CreateResultsAtAllSets"></a>

### FatigueLife.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.PromoteToNamedSelection"></a>

### FatigueLife.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CreateParameter"></a>

### FatigueLife.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.AddAlert"></a>

### FatigueLife.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.AddConvergence"></a>

### FatigueLife.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.RenameBasedOnDefinition"></a>

### FatigueLife.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Delete"></a>

### FatigueLife.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.GetChildren"></a>

### FatigueLife.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueLife.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.AddComment"></a>

### FatigueLife.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.AddFigure"></a>

### FatigueLife.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.AddImage"></a>

### FatigueLife.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Activate"></a>

### FatigueLife.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.CopyTo"></a>

### FatigueLife.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.Duplicate"></a>

### FatigueLife.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.GroupAllSimilarChildren"></a>

### FatigueLife.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.GroupSimilarObjects"></a>

### FatigueLife.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.PropertyByName"></a>

### FatigueLife.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.PropertyByAPIName"></a>

### FatigueLife.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.GetParameter"></a>

### FatigueLife.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueLife.RemoveParameter"></a>

### FatigueLife.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
