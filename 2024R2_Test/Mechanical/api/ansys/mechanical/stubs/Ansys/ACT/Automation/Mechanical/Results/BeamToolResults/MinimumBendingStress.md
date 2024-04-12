<a id="minimumbendingstress"></a>

# MinimumBendingStress

<a id="MinimumBendingStress"></a>

### *class* MinimumBendingStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MinimumBendingStress.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MinimumBendingStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MinimumBendingStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MinimumBendingStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MinimumBendingStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MinimumBendingStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MinimumBendingStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MinimumBendingStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MinimumBendingStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MinimumBendingStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MinimumBendingStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MinimumBendingStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MinimumBendingStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MinimumBendingStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MinimumBendingStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MinimumBendingStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MinimumBendingStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MinimumBendingStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MinimumBendingStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MinimumBendingStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MinimumBendingStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MinimumBendingStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MinimumBendingStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MinimumBendingStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MinimumBendingStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MinimumBendingStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#MinimumBendingStress.PlotData)                                                                                 | Gets the result table.                                                 |
| [`Location`](#MinimumBendingStress.Location)                                                                                 | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MinimumBendingStress.TimeForMinimumOfMinimumValues)                                       | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MinimumBendingStress.TimeForMinimumOfMaximumValues)                                       | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MinimumBendingStress.LoadStepForMinimumOfMinimumValues)                               | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MinimumBendingStress.LoadStepForMinimumOfMaximumValues)                               | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MinimumBendingStress.TimeForMaximumOfMinimumValues)                                       | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MinimumBendingStress.TimeForMaximumOfMaximumValues)                                       | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MinimumBendingStress.LoadStepForMaximumOfMinimumValues)                               | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MinimumBendingStress.LoadStepForMaximumOfMaximumValues)                               | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MinimumBendingStress.IsSolved)                                                                                 | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MinimumBendingStress.ScopingMethod)                                                                       | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MinimumBendingStress.SetNumber)                                                                               | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MinimumBendingStress.CombinationNumber)                                                               | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MinimumBendingStress.SolutionCombinationDriver)                                               | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../Path.md#Path)                                                                                                 | Path property.                                                         |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`NamedSelections`](../../NamedSelections.md#NamedSelections)                                                                | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MinimumBendingStress.WaterfallPanelShowTextOnMosaic)                                     | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#MinimumBendingStress.CrackFrontNumber)                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MinimumBendingStress.GlobalIDs)                                                                               | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MinimumBendingStress.Identifier)                                                                             | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MinimumBendingStress.IterationNumber)                                                                   | Gets the IterationNumber.                                              |
| [`LoadStep`](#MinimumBendingStress.LoadStep)                                                                                 | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MinimumBendingStress.MaximumOccursOn)                                                                   | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MinimumBendingStress.MinimumOccursOn)                                                                   | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MinimumBendingStress.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MinimumBendingStress.SolverComponentIDs)                                                             | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MinimumBendingStress.Substep)                                                                                   | Gets the Substep.                                                      |
| [`Average`](#MinimumBendingStress.Average)                                                                                   | Gets the Average.                                                      |
| [`Maximum`](#MinimumBendingStress.Maximum)                                                                                   | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MinimumBendingStress.MaximumOfMaximumOverTime)                                                 | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MinimumBendingStress.MaximumOfMinimumOverTime)                                                 | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MinimumBendingStress.Minimum)                                                                                   | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MinimumBendingStress.MinimumOfMaximumOverTime)                                                 | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MinimumBendingStress.MinimumOfMinimumOverTime)                                                 | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MinimumBendingStress.Time)                                                                                         | Gets the Time.                                                         |
| [`DisplayTime`](#MinimumBendingStress.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MinimumBendingStress.DisplayOption)                                                                       | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MinimumBendingStress.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MinimumBendingStress.By)                                                                                             | Gets or sets the By.                                                   |
| [`ItemType`](#MinimumBendingStress.ItemType)                                                                                 | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MinimumBendingStress.CalculateTimeHistory)                                                         | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MinimumBendingStress.Suppressed)                                                                             | Gets or sets the Suppressed.                                           |
| [`Children`](#MinimumBendingStress.Children)                                                                                 | Gets the list of children.                                             |
| [`Comments`](#MinimumBendingStress.Comments)                                                                                 | Gets the list of associated comments.                                  |
| [`Figures`](#MinimumBendingStress.Figures)                                                                                   | Gets the list of associated figures.                                   |
| [`Images`](#MinimumBendingStress.Images)                                                                                     | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MinimumBendingStress.Properties)                                                                             | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MinimumBendingStress.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MinimumBendingStress
```

<a id="property-detail"></a>

## Property detail

<a id="MinimumBendingStress.InternalObject"></a>

### *property* MinimumBendingStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DataModelObjectCategory"></a>

### *property* MinimumBendingStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.BeamToolStressResultType"></a>

### *property* MinimumBendingStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PlotData"></a>

### *property* MinimumBendingStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Location"></a>

### *property* MinimumBendingStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMinimumOfMinimumValues"></a>

### *property* MinimumBendingStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMinimumOfMaximumValues"></a>

### *property* MinimumBendingStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MinimumBendingStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MinimumBendingStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMaximumOfMinimumValues"></a>

### *property* MinimumBendingStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMaximumOfMaximumValues"></a>

### *property* MinimumBendingStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MinimumBendingStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MinimumBendingStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IsSolved"></a>

### *property* MinimumBendingStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CoordinateSystem"></a>

### *property* MinimumBendingStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ScopingMethod"></a>

### *property* MinimumBendingStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SetNumber"></a>

### *property* MinimumBendingStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CombinationNumber"></a>

### *property* MinimumBendingStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SolutionCombinationDriver"></a>

### *property* MinimumBendingStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Path"></a>

### *property* MinimumBendingStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Surface"></a>

### *property* MinimumBendingStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.NamedSelections"></a>

### *property* MinimumBendingStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallPanelShowTextOnMosaic"></a>

### *property* MinimumBendingStress.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CrackFrontNumber"></a>

### *property* MinimumBendingStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GlobalIDs"></a>

### *property* MinimumBendingStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Identifier"></a>

### *property* MinimumBendingStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IterationNumber"></a>

### *property* MinimumBendingStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStep"></a>

### *property* MinimumBendingStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MaximumOccursOn"></a>

### *property* MinimumBendingStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MinimumOccursOn"></a>

### *property* MinimumBendingStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepNumber"></a>

### *property* MinimumBendingStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SolverComponentIDs"></a>

### *property* MinimumBendingStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Substep"></a>

### *property* MinimumBendingStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Average"></a>

### *property* MinimumBendingStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Maximum"></a>

### *property* MinimumBendingStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MaximumOfMaximumOverTime"></a>

### *property* MinimumBendingStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MaximumOfMinimumOverTime"></a>

### *property* MinimumBendingStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Minimum"></a>

### *property* MinimumBendingStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MinimumOfMaximumOverTime"></a>

### *property* MinimumBendingStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MinimumOfMinimumOverTime"></a>

### *property* MinimumBendingStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Time"></a>

### *property* MinimumBendingStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DisplayTime"></a>

### *property* MinimumBendingStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GraphControlsXAxis"></a>

### *property* MinimumBendingStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DisplayOption"></a>

### *property* MinimumBendingStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DpfEvaluation"></a>

### *property* MinimumBendingStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.By"></a>

### *property* MinimumBendingStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ItemType"></a>

### *property* MinimumBendingStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CalculateTimeHistory"></a>

### *property* MinimumBendingStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Suppressed"></a>

### *property* MinimumBendingStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Children"></a>

### *property* MinimumBendingStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Comments"></a>

### *property* MinimumBendingStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Figures"></a>

### *property* MinimumBendingStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Images"></a>

### *property* MinimumBendingStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MinimumBendingStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Properties"></a>

### *property* MinimumBendingStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.VisibleProperties"></a>

### *property* MinimumBendingStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MinimumBendingStress.ClearGeneratedData"></a>

### MinimumBendingStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.EvaluateAllResults"></a>

### MinimumBendingStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.FetchRemoteResults"></a>

### MinimumBendingStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ExportToTextFile"></a>

### MinimumBendingStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ExportAnimation"></a>

### MinimumBendingStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DuplicateWithoutResults"></a>

### MinimumBendingStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CreateResultsAtAllSets"></a>

### MinimumBendingStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PromoteToNamedSelection"></a>

### MinimumBendingStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CreateParameter"></a>

### MinimumBendingStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddAlert"></a>

### MinimumBendingStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddConvergence"></a>

### MinimumBendingStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RenameBasedOnDefinition"></a>

### MinimumBendingStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Delete"></a>

### MinimumBendingStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetChildren"></a>

### MinimumBendingStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MinimumBendingStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddComment"></a>

### MinimumBendingStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddFigure"></a>

### MinimumBendingStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddImage"></a>

### MinimumBendingStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Activate"></a>

### MinimumBendingStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CopyTo"></a>

### MinimumBendingStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Duplicate"></a>

### MinimumBendingStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GroupAllSimilarChildren"></a>

### MinimumBendingStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GroupSimilarObjects"></a>

### MinimumBendingStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PropertyByName"></a>

### MinimumBendingStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PropertyByAPIName"></a>

### MinimumBendingStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetParameter"></a>

### MinimumBendingStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RemoveParameter"></a>

### MinimumBendingStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
