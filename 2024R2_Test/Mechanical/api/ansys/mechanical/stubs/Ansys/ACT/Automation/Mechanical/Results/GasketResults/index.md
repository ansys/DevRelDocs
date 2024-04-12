<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults"></a>

<a id="the-gasketresults-package"></a>

# The `GasketResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------|-------------------------------------|
| [`GasketResult`](GasketResult.md#GasketResult)                                     | Defines a GasketResult.             |
| [`NormalGasketPressure`](NormalGasketPressure.md#NormalGasketPressure)             | Defines a NormalGasketPressure.     |
| [`NormalGasketTotalClosure`](NormalGasketTotalClosure.md#NormalGasketTotalClosure) | Defines a NormalGasketTotalClosure. |
| [`ShearGasketPressure`](ShearGasketPressure.md#ShearGasketPressure)                | Defines a ShearGasketPressure.      |
| [`ShearGasketTotalClosure`](ShearGasketTotalClosure.md#ShearGasketTotalClosure)    | Defines a ShearGasketTotalClosure.  |

<a id="description"></a>

## Description

GasketResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="GasketResults.GasketResult"></a>

### *class* GasketResults.GasketResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GasketResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id308)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id309)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id310)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id311)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id312)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id313) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id314)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id315) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id316)         | CreateParameter method.                                                           |
| [`AddAlert`](#id317)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id318)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id319) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id320)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id323)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id324)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id325)                | Creates a new child Image.                                                        |
| [`Activate`](#id326)                | Activate the current object.                                                      |
| [`CopyTo`](#id327)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id328)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id329) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id330)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id331)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id332)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id333)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id334)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id257)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id258)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id259)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id260)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id261)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id262)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id263)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id264)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id265)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id266)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id267)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id269)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id270)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id271)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id272)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id274)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id275)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id276)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id277)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id278)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id279)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id280)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id281)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id282)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id283)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id284)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id285)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id286)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id287)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id288)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id289)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id290)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id291)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id292)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id294)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id295)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id296)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id297)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id298)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id299)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id300)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id301)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id302)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id303)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id305)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id306)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import GasketResult
```

<a id="property-detail"></a>

## Property detail

<a id="GasketResults.InternalObject"></a>

### *property* GasketResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GasketResultType"></a>

### *property* GasketResults.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.DataModelObjectCategory"></a>

### *property* GasketResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.PlotData"></a>

### *property* GasketResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Location"></a>

### *property* GasketResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.TimeForMinimumOfMinimumValues"></a>

### *property* GasketResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.TimeForMinimumOfMaximumValues"></a>

### *property* GasketResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* GasketResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* GasketResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.TimeForMaximumOfMinimumValues"></a>

### *property* GasketResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.TimeForMaximumOfMaximumValues"></a>

### *property* GasketResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* GasketResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* GasketResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.IsSolved"></a>

### *property* GasketResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CoordinateSystem"></a>

### *property* GasketResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ScopingMethod"></a>

### *property* GasketResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.SetNumber"></a>

### *property* GasketResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CombinationNumber"></a>

### *property* GasketResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.SolutionCombinationDriver"></a>

### *property* GasketResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Surface"></a>

### *property* GasketResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CrackFrontNumber"></a>

### *property* GasketResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GlobalIDs"></a>

### *property* GasketResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Identifier"></a>

### *property* GasketResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.IterationNumber"></a>

### *property* GasketResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.LoadStep"></a>

### *property* GasketResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.MaximumOccursOn"></a>

### *property* GasketResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.MinimumOccursOn"></a>

### *property* GasketResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.LoadStepNumber"></a>

### *property* GasketResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.SolverComponentIDs"></a>

### *property* GasketResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Substep"></a>

### *property* GasketResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Average"></a>

### *property* GasketResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Maximum"></a>

### *property* GasketResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.MaximumOfMaximumOverTime"></a>

### *property* GasketResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.MaximumOfMinimumOverTime"></a>

### *property* GasketResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Minimum"></a>

### *property* GasketResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.MinimumOfMaximumOverTime"></a>

### *property* GasketResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.MinimumOfMinimumOverTime"></a>

### *property* GasketResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Time"></a>

### *property* GasketResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.DisplayTime"></a>

### *property* GasketResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GraphControlsXAxis"></a>

### *property* GasketResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.DisplayOption"></a>

### *property* GasketResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.DpfEvaluation"></a>

### *property* GasketResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.By"></a>

### *property* GasketResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ItemType"></a>

### *property* GasketResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CalculateTimeHistory"></a>

### *property* GasketResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Suppressed"></a>

### *property* GasketResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Children"></a>

### *property* GasketResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Comments"></a>

### *property* GasketResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Figures"></a>

### *property* GasketResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Images"></a>

### *property* GasketResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GasketResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Properties"></a>

### *property* GasketResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.VisibleProperties"></a>

### *property* GasketResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GasketResults.ClearGeneratedData"></a>

### GasketResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.EvaluateAllResults"></a>

### GasketResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.FetchRemoteResults"></a>

### GasketResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ExportToTextFile"></a>

### GasketResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ExportAnimation"></a>

### GasketResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.DuplicateWithoutResults"></a>

### GasketResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CreateResultsAtAllSets"></a>

### GasketResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.PromoteToNamedSelection"></a>

### GasketResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CreateParameter"></a>

### GasketResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.AddAlert"></a>

### GasketResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.AddConvergence"></a>

### GasketResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.RenameBasedOnDefinition"></a>

### GasketResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Delete"></a>

### GasketResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GetChildren"></a>

### GasketResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GasketResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.AddComment"></a>

### GasketResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.AddFigure"></a>

### GasketResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.AddImage"></a>

### GasketResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Activate"></a>

### GasketResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.CopyTo"></a>

### GasketResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.Duplicate"></a>

### GasketResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GroupAllSimilarChildren"></a>

### GasketResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GroupSimilarObjects"></a>

### GasketResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.PropertyByName"></a>

### GasketResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.PropertyByAPIName"></a>

### GasketResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.GetParameter"></a>

### GasketResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.RemoveParameter"></a>

### GasketResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.NormalGasketPressure"></a>

### *class* GasketResults.NormalGasketPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NormalGasketPressure.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id308)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id309)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id310)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id311)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id312)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id313) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id314)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id315) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id316)         | CreateParameter method.                                                           |
| [`AddAlert`](#id317)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id318)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id319) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id320)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id323)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id324)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id325)                | Creates a new child Image.                                                        |
| [`Activate`](#id326)                | Activate the current object.                                                      |
| [`CopyTo`](#id327)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id328)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id329) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id330)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id331)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id332)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id333)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id334)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#id257)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id258)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id259)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id260)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id261)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id262)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id263)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id264)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id265)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id266)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id267)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id269)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id270)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id271)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id272)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id274)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id275)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id276)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id277)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id278)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id279)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id280)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id281)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id282)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id283)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id284)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id285)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id286)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id287)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id288)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id289)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id290)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id291)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id292)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id294)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id295)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id296)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id297)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id298)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id299)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id300)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id301)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id302)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id303)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id305)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id306)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import NormalGasketPressure
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* GasketResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* GasketResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* GasketResults.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* GasketResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* GasketResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* GasketResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* GasketResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* GasketResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* GasketResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* GasketResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* GasketResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* GasketResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* GasketResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* GasketResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* GasketResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* GasketResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* GasketResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* GasketResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* GasketResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* GasketResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* GasketResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* GasketResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* GasketResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* GasketResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* GasketResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* GasketResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* GasketResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* GasketResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* GasketResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* GasketResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* GasketResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* GasketResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* GasketResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* GasketResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* GasketResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* GasketResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* GasketResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* GasketResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* GasketResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* GasketResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* GasketResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* GasketResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* GasketResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* GasketResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* GasketResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* GasketResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* GasketResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* GasketResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* GasketResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* GasketResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* GasketResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* GasketResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* GasketResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

## Method detail

<a id="id58"></a>

### GasketResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### GasketResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### GasketResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### GasketResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### GasketResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### GasketResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### GasketResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### GasketResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### GasketResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### GasketResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### GasketResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### GasketResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### GasketResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### GasketResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### GasketResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### GasketResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### GasketResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### GasketResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### GasketResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### GasketResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### GasketResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### GasketResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### GasketResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### GasketResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### GasketResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### GasketResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### GasketResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.NormalGasketTotalClosure"></a>

### *class* GasketResults.NormalGasketTotalClosure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NormalGasketTotalClosure.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id308)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id309)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id310)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id311)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id312)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id313) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id314)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id315) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id316)         | CreateParameter method.                                                           |
| [`AddAlert`](#id317)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id318)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id319) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id320)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id323)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id324)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id325)                | Creates a new child Image.                                                        |
| [`Activate`](#id326)                | Activate the current object.                                                      |
| [`CopyTo`](#id327)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id328)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id329) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id330)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id331)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id332)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id333)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id334)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#id257)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id258)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id259)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id260)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id261)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id262)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id263)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id264)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id265)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id266)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id267)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id269)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id270)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id271)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id272)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id274)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id275)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id276)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id277)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id278)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id279)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id280)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id281)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id282)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id283)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id284)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id285)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id286)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id287)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id288)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id289)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id290)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id291)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id292)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id294)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id295)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id296)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id297)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id298)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id299)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id300)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id301)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id302)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id303)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id305)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id306)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id85"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import NormalGasketTotalClosure
```

<a id="id86"></a>

## Property detail

<a id="id87"></a>

### *property* GasketResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* GasketResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* GasketResults.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* GasketResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* GasketResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* GasketResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* GasketResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* GasketResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* GasketResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* GasketResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* GasketResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* GasketResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* GasketResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* GasketResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* GasketResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* GasketResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* GasketResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* GasketResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* GasketResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* GasketResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* GasketResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* GasketResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* GasketResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* GasketResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* GasketResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* GasketResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* GasketResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* GasketResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* GasketResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* GasketResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* GasketResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* GasketResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* GasketResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* GasketResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* GasketResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* GasketResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* GasketResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* GasketResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* GasketResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* GasketResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* GasketResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* GasketResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* GasketResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* GasketResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* GasketResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* GasketResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* GasketResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* GasketResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* GasketResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* GasketResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* GasketResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* GasketResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* GasketResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

## Method detail

<a id="id141"></a>

### GasketResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### GasketResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### GasketResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### GasketResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### GasketResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### GasketResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### GasketResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### GasketResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### GasketResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### GasketResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### GasketResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### GasketResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### GasketResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### GasketResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### GasketResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### GasketResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### GasketResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### GasketResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### GasketResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### GasketResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### GasketResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### GasketResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### GasketResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### GasketResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### GasketResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### GasketResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### GasketResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ShearGasketPressure"></a>

### *class* GasketResults.ShearGasketPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShearGasketPressure.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id308)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id309)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id310)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id311)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id312)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id313) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id314)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id315) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id316)         | CreateParameter method.                                                           |
| [`AddAlert`](#id317)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id318)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id319) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id320)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id323)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id324)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id325)                | Creates a new child Image.                                                        |
| [`Activate`](#id326)                | Activate the current object.                                                      |
| [`CopyTo`](#id327)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id328)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id329) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id330)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id331)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id332)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id333)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id334)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`ShearOrientation`](#id254)                                                                                              | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#id257)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id258)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id259)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id260)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id261)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id262)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id263)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id264)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id265)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id266)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id267)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id269)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id270)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id271)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id272)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id274)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id275)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id276)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id277)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id278)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id279)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id280)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id281)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id282)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id283)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id284)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id285)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id286)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id287)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id288)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id289)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id290)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id291)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id292)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id294)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id295)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id296)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id297)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id298)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id299)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id300)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id301)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id302)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id303)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id305)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id306)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id168"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import ShearGasketPressure
```

<a id="id169"></a>

## Property detail

<a id="id170"></a>

### *property* GasketResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ShearOrientation"></a>

### *property* GasketResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* GasketResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* GasketResults.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* GasketResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* GasketResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* GasketResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* GasketResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* GasketResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* GasketResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* GasketResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* GasketResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* GasketResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* GasketResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* GasketResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* GasketResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* GasketResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* GasketResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* GasketResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* GasketResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* GasketResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* GasketResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* GasketResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* GasketResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* GasketResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* GasketResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* GasketResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* GasketResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* GasketResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* GasketResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* GasketResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* GasketResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* GasketResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* GasketResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* GasketResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* GasketResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* GasketResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* GasketResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* GasketResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* GasketResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* GasketResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* GasketResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* GasketResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* GasketResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* GasketResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* GasketResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* GasketResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* GasketResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* GasketResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* GasketResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* GasketResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* GasketResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* GasketResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* GasketResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

## Method detail

<a id="id224"></a>

### GasketResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### GasketResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### GasketResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### GasketResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### GasketResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### GasketResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### GasketResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### GasketResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### GasketResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### GasketResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### GasketResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### GasketResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### GasketResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### GasketResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### GasketResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### GasketResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### GasketResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### GasketResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### GasketResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### GasketResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### GasketResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### GasketResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### GasketResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### GasketResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### GasketResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### GasketResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### GasketResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GasketResults.ShearGasketTotalClosure"></a>

### *class* GasketResults.ShearGasketTotalClosure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ShearGasketTotalClosure.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id308)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id309)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id310)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id311)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id312)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id313) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id314)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id315) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id316)         | CreateParameter method.                                                           |
| [`AddAlert`](#id317)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id318)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id319) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id320)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id322)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id323)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id324)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id325)                | Creates a new child Image.                                                        |
| [`Activate`](#id326)                | Activate the current object.                                                      |
| [`CopyTo`](#id327)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id328)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id329) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id330)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id331)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id332)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id333)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id334)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`ShearOrientation`](#id254)                                                                                              | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType)                      | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#id257)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id258)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id259)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id260)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id261)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id262)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id263)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id264)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id265)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id266)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id267)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id269)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id270)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id271)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id272)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id274)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id275)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id276)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id277)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id278)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id279)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id280)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id281)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id282)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id283)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id284)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id285)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id286)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id287)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id288)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id289)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id290)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id291)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id292)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id294)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id295)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id296)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id297)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id298)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id299)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id300)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id301)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id302)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id303)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id304)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id305)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id306)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id251"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.GasketResults import ShearGasketTotalClosure
```

<a id="id252"></a>

## Property detail

<a id="id253"></a>

### *property* GasketResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* GasketResults.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* GasketResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* GasketResults.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* GasketResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* GasketResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* GasketResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* GasketResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* GasketResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* GasketResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* GasketResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* GasketResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* GasketResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* GasketResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* GasketResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* GasketResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* GasketResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* GasketResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* GasketResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* GasketResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* GasketResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* GasketResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* GasketResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* GasketResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* GasketResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* GasketResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* GasketResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* GasketResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* GasketResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* GasketResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* GasketResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* GasketResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* GasketResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* GasketResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* GasketResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* GasketResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* GasketResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* GasketResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* GasketResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* GasketResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* GasketResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* GasketResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* GasketResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* GasketResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* GasketResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* GasketResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* GasketResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* GasketResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* GasketResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* GasketResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* GasketResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* GasketResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* GasketResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* GasketResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

## Method detail

<a id="id308"></a>

### GasketResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### GasketResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### GasketResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### GasketResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### GasketResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### GasketResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### GasketResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### GasketResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### GasketResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### GasketResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### GasketResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### GasketResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### GasketResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### GasketResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### GasketResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### GasketResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### GasketResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### GasketResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### GasketResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### GasketResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### GasketResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### GasketResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### GasketResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### GasketResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### GasketResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### GasketResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### GasketResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
