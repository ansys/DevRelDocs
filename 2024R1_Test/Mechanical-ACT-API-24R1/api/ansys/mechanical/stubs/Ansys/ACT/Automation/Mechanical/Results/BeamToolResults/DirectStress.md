# DirectStress

<a id="DirectStress"></a>

### *class* DirectStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](./../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#DirectStress.PlotData)                                                                                         | Gets the result table.                                                 |
| [`Location`](#DirectStress.Location)                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectStress.TimeForMinimumOfMinimumValues)                                               | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectStress.TimeForMinimumOfMaximumValues)                                               | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectStress.LoadStepForMinimumOfMinimumValues)                                       | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectStress.LoadStepForMinimumOfMaximumValues)                                       | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectStress.TimeForMaximumOfMinimumValues)                                               | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectStress.TimeForMaximumOfMaximumValues)                                               | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectStress.LoadStepForMaximumOfMinimumValues)                                       | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectStress.LoadStepForMaximumOfMaximumValues)                                       | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectStress.IsSolved)                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](./../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectStress.ScopingMethod)                                                                               | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectStress.SetNumber)                                                                                       | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectStress.CombinationNumber)                                                                       | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectStress.SolutionCombinationDriver)                                                       | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](./../../Path.md#Path)                                                                                                 | Path property.                                                         |
| [`Surface`](./../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`NamedSelections`](./../../NamedSelections.md#NamedSelections)                                                                | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#DirectStress.WaterfallPanelShowTextOnMosaic)                                             | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#DirectStress.CrackFrontNumber)                                                                         | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectStress.GlobalIDs)                                                                                       | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectStress.Identifier)                                                                                     | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectStress.IterationNumber)                                                                           | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectStress.LoadStep)                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectStress.MaximumOccursOn)                                                                           | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectStress.MinimumOccursOn)                                                                           | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectStress.LoadStepNumber)                                                                             | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectStress.SolverComponentIDs)                                                                     | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectStress.Substep)                                                                                           | Gets the Substep.                                                      |
| [`Average`](#DirectStress.Average)                                                                                           | Gets the Average.                                                      |
| [`Maximum`](#DirectStress.Maximum)                                                                                           | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectStress.MaximumOfMaximumOverTime)                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectStress.MaximumOfMinimumOverTime)                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectStress.Minimum)                                                                                           | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectStress.MinimumOfMaximumOverTime)                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectStress.MinimumOfMinimumOverTime)                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectStress.Time)                                                                                                 | Gets the Time.                                                         |
| [`DisplayTime`](#DirectStress.DisplayTime)                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectStress.DisplayOption)                                                                               | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectStress.DpfEvaluation)                                                                               | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectStress.By)                                                                                                     | Gets or sets the By.                                                   |
| [`ItemType`](#DirectStress.ItemType)                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectStress.CalculateTimeHistory)                                                                 | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectStress.Suppressed)                                                                                     | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectStress.Children)                                                                                         | Gets the list of children.                                             |
| [`Comments`](#DirectStress.Comments)                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#DirectStress.Figures)                                                                                           | Gets the list of associated figures.                                   |
| [`Images`](#DirectStress.Images)                                                                                             | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectStress.Properties)                                                                                     | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectStress.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import DirectStress
```

<a id="property-detail"></a>

## Property detail

<a id="DirectStress.InternalObject"></a>

### *property* DirectStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.DataModelObjectCategory"></a>

### *property* DirectStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.BeamToolStressResultType"></a>

### *property* DirectStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](./../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.PlotData"></a>

### *property* DirectStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](./../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Location"></a>

### *property* DirectStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.TimeForMinimumOfMinimumValues"></a>

### *property* DirectStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.TimeForMinimumOfMaximumValues"></a>

### *property* DirectStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.TimeForMaximumOfMinimumValues"></a>

### *property* DirectStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.TimeForMaximumOfMaximumValues"></a>

### *property* DirectStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.IsSolved"></a>

### *property* DirectStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CoordinateSystem"></a>

### *property* DirectStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.ScopingMethod"></a>

### *property* DirectStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.SetNumber"></a>

### *property* DirectStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CombinationNumber"></a>

### *property* DirectStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.SolutionCombinationDriver"></a>

### *property* DirectStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](./../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Path"></a>

### *property* DirectStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](./../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Surface"></a>

### *property* DirectStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.NamedSelections"></a>

### *property* DirectStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* DirectStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CrackFrontNumber"></a>

### *property* DirectStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.GlobalIDs"></a>

### *property* DirectStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Identifier"></a>

### *property* DirectStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.IterationNumber"></a>

### *property* DirectStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.LoadStep"></a>

### *property* DirectStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.MaximumOccursOn"></a>

### *property* DirectStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.MinimumOccursOn"></a>

### *property* DirectStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.LoadStepNumber"></a>

### *property* DirectStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.SolverComponentIDs"></a>

### *property* DirectStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Substep"></a>

### *property* DirectStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Average"></a>

### *property* DirectStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Maximum"></a>

### *property* DirectStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.MaximumOfMaximumOverTime"></a>

### *property* DirectStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.MaximumOfMinimumOverTime"></a>

### *property* DirectStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Minimum"></a>

### *property* DirectStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.MinimumOfMaximumOverTime"></a>

### *property* DirectStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.MinimumOfMinimumOverTime"></a>

### *property* DirectStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Time"></a>

### *property* DirectStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.DisplayTime"></a>

### *property* DirectStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.GraphControlsXAxis"></a>

### *property* DirectStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](./../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.DisplayOption"></a>

### *property* DirectStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](./../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.DpfEvaluation"></a>

### *property* DirectStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.By"></a>

### *property* DirectStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](./../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.ItemType"></a>

### *property* DirectStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](./../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CalculateTimeHistory"></a>

### *property* DirectStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Suppressed"></a>

### *property* DirectStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Children"></a>

### *property* DirectStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Comments"></a>

### *property* DirectStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Figures"></a>

### *property* DirectStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Images"></a>

### *property* DirectStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Properties"></a>

### *property* DirectStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.VisibleProperties"></a>

### *property* DirectStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectStress.ClearGeneratedData"></a>

### DirectStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.EvaluateAllResults"></a>

### DirectStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.FetchRemoteResults"></a>

### DirectStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.ExportToTextFile"></a>

### DirectStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.ExportAnimation"></a>

### DirectStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.DuplicateWithoutResults"></a>

### DirectStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CreateResultsAtAllSets"></a>

### DirectStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.PromoteToNamedSelection"></a>

### DirectStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CreateParameter"></a>

### DirectStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.AddAlert"></a>

### DirectStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.AddConvergence"></a>

### DirectStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.RenameBasedOnDefinition"></a>

### DirectStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Delete"></a>

### DirectStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.GetChildren"></a>

### DirectStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.AddComment"></a>

### DirectStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.AddFigure"></a>

### DirectStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.AddImage"></a>

### DirectStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Activate"></a>

### DirectStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.CopyTo"></a>

### DirectStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.Duplicate"></a>

### DirectStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.GroupAllSimilarChildren"></a>

### DirectStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.GroupSimilarObjects"></a>

### DirectStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.PropertyByName"></a>

### DirectStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.PropertyByAPIName"></a>

### DirectStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.GetParameter"></a>

### DirectStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectStress.RemoveParameter"></a>

### DirectStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
