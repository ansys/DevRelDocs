<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults"></a>

<a id="the-contacttoolresults-package"></a>

# The `ContactToolResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------------------------------|------------------------------------|
| [`ContactToolResult`](ContactToolResult.md#ContactToolResult)                   | Defines a ContactToolResult.       |
| [`ContactFluidPressure`](ContactFluidPressure.md#ContactFluidPressure)          | Defines a ContactFluidPressure.    |
| [`ContactFrictionalStress`](ContactFrictionalStress.md#ContactFrictionalStress) | Defines a ContactFrictionalStress. |
| [`ContactGap`](ContactGap.md#ContactGap)                                        | Defines a ContactGap.              |
| [`ContactHeatFlux`](ContactHeatFlux.md#ContactHeatFlux)                         | Defines a ContactHeatFlux.         |
| [`ContactPenetration`](ContactPenetration.md#ContactPenetration)                | Defines a ContactPenetration.      |
| [`ContactPressure`](ContactPressure.md#ContactPressure)                         | Defines a ContactPressure.         |
| [`ContactSlidingDistance`](ContactSlidingDistance.md#ContactSlidingDistance)    | Defines a ContactSlidingDistance.  |
| [`ContactStatus`](ContactStatus.md#ContactStatus)                               | Defines a ContactStatus.           |

<a id="description"></a>

## Description

ContactToolResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ContactToolResults.ContactToolResult"></a>

### *class* ContactToolResults.ContactToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactToolResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactToolResult
```

<a id="property-detail"></a>

## Property detail

<a id="ContactToolResults.InternalObject"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactResultType"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.DataModelObjectCategory"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.PlotData"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Location"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.TimeForMinimumOfMinimumValues"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.TimeForMinimumOfMaximumValues"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.TimeForMaximumOfMinimumValues"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.TimeForMaximumOfMaximumValues"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.IsSolved"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CoordinateSystem"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ScopingMethod"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.SetNumber"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CombinationNumber"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.SolutionCombinationDriver"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Surface"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CrackFrontNumber"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.GlobalIDs"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Identifier"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.IterationNumber"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.LoadStep"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.MaximumOccursOn"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.MinimumOccursOn"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.LoadStepNumber"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.SolverComponentIDs"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Substep"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Average"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Maximum"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.MaximumOfMaximumOverTime"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.MaximumOfMinimumOverTime"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Minimum"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.MinimumOfMaximumOverTime"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.MinimumOfMinimumOverTime"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Time"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.DisplayTime"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.GraphControlsXAxis"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.DisplayOption"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.DpfEvaluation"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.By"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ItemType"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CalculateTimeHistory"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Suppressed"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Children"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Comments"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Figures"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Images"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Properties"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.VisibleProperties"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactToolResults.ClearGeneratedData"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.EvaluateAllResults"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.FetchRemoteResults"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ExportToTextFile"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ExportAnimation"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.DuplicateWithoutResults"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CreateResultsAtAllSets"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.PromoteToNamedSelection"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CreateParameter"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.AddAlert"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.AddConvergence"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.RenameBasedOnDefinition"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Delete"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.GetChildren"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.AddComment"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.AddFigure"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.AddImage"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Activate"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.CopyTo"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.Duplicate"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.GroupAllSimilarChildren"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.GroupSimilarObjects"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.PropertyByName"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.PropertyByAPIName"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.GetParameter"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.RemoveParameter"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactFluidPressure"></a>

### *class* ContactToolResults.ContactFluidPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactFluidPressure.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactFluidPressure
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

## Method detail

<a id="id58"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactFrictionalStress"></a>

### *class* ContactToolResults.ContactFrictionalStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactFrictionalStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id85"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactFrictionalStress
```

<a id="id86"></a>

## Property detail

<a id="id87"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

## Method detail

<a id="id141"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactGap"></a>

### *class* ContactToolResults.ContactGap

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactGap.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id168"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactGap
```

<a id="id169"></a>

## Property detail

<a id="id170"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

## Method detail

<a id="id224"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactHeatFlux"></a>

### *class* ContactToolResults.ContactHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactHeatFlux.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id251"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactHeatFlux
```

<a id="id252"></a>

## Property detail

<a id="id253"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

## Method detail

<a id="id307"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactPenetration"></a>

### *class* ContactToolResults.ContactPenetration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactPenetration.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id334"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactPenetration
```

<a id="id335"></a>

## Property detail

<a id="id336"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

## Method detail

<a id="id390"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactPressure"></a>

### *class* ContactToolResults.ContactPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactPressure.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id417"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactPressure
```

<a id="id418"></a>

## Property detail

<a id="id419"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id455"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id456"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id457"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id458"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id459"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id460"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id461"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id462"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id463"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id464"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id465"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id466"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id467"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id468"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id469"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id470"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id471"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id472"></a>

## Method detail

<a id="id473"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id474"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id475"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id476"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id477"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id478"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id479"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id480"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id481"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id482"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id483"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id484"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id485"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id486"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id487"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id488"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id489"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id490"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id491"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id492"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id493"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id494"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id495"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id496"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id497"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id498"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id499"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactSlidingDistance"></a>

### *class* ContactToolResults.ContactSlidingDistance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactSlidingDistance.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id500"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactSlidingDistance
```

<a id="id501"></a>

## Property detail

<a id="id502"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id503"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id504"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id505"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id506"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id507"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id508"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id509"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id510"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id511"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id512"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id513"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id514"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id515"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id516"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id517"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id518"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id519"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id520"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id521"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id522"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id523"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id524"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id525"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id526"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id527"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id528"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id529"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id530"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id531"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id532"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id533"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id534"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id535"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id536"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id537"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id538"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id539"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id540"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id541"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id542"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id543"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id544"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id545"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id546"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id547"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id548"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id549"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id550"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id551"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id552"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id553"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id554"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id555"></a>

## Method detail

<a id="id556"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id557"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id558"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id559"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id560"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id561"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id562"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id563"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id564"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id565"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id566"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id567"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id568"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id569"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id570"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id571"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id572"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id573"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id574"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id575"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id576"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id577"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id578"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id579"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id580"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id581"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id582"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactToolResults.ContactStatus"></a>

### *class* ContactToolResults.ContactStatus

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactStatus.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id639)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id640)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id641)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id642)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id643)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id644) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id645)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id646) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id647)         | CreateParameter method.                                                           |
| [`AddAlert`](#id648)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id649)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id650) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id651)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id653)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id654)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id655)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id656)                | Creates a new child Image.                                                        |
| [`Activate`](#id657)                | Activate the current object.                                                      |
| [`CopyTo`](#id658)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id659)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id660) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id661)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id662)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id663)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id664)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id665)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`ContactResultType`](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType)                   | Gets or sets the ContactResultType.                                    |
| [`PlotData`](#id588)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id589)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id590)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id591)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id592)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id593)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id594)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id595)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id596)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id597)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id598)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id600)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id601)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id602)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id603)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id605)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id606)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id607)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id608)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id609)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id610)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id611)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id612)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id613)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id614)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id615)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id616)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id617)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id618)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id619)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id620)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id621)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id622)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id623)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id625)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id626)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id627)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id628)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id629)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id630)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id631)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id632)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id633)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id634)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id635)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id636)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id637)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id583"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults import ContactStatus
```

<a id="id584"></a>

## Property detail

<a id="id585"></a>

### *property* ContactToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id586"></a>

### *property* ContactToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id587"></a>

### *property* ContactToolResults.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ContactResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="id588"></a>

### *property* ContactToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id589"></a>

### *property* ContactToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id590"></a>

### *property* ContactToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id591"></a>

### *property* ContactToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id592"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id593"></a>

### *property* ContactToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id594"></a>

### *property* ContactToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id595"></a>

### *property* ContactToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id596"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id597"></a>

### *property* ContactToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id598"></a>

### *property* ContactToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id599"></a>

### *property* ContactToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id600"></a>

### *property* ContactToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id601"></a>

### *property* ContactToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id602"></a>

### *property* ContactToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id603"></a>

### *property* ContactToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id604"></a>

### *property* ContactToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id605"></a>

### *property* ContactToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id606"></a>

### *property* ContactToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id607"></a>

### *property* ContactToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id608"></a>

### *property* ContactToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id609"></a>

### *property* ContactToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id610"></a>

### *property* ContactToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id611"></a>

### *property* ContactToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id612"></a>

### *property* ContactToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id613"></a>

### *property* ContactToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id614"></a>

### *property* ContactToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id615"></a>

### *property* ContactToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id616"></a>

### *property* ContactToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id617"></a>

### *property* ContactToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id618"></a>

### *property* ContactToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id619"></a>

### *property* ContactToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id620"></a>

### *property* ContactToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id621"></a>

### *property* ContactToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id622"></a>

### *property* ContactToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id623"></a>

### *property* ContactToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id624"></a>

### *property* ContactToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id625"></a>

### *property* ContactToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id626"></a>

### *property* ContactToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id627"></a>

### *property* ContactToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id628"></a>

### *property* ContactToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id629"></a>

### *property* ContactToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id630"></a>

### *property* ContactToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id631"></a>

### *property* ContactToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id632"></a>

### *property* ContactToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id633"></a>

### *property* ContactToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id634"></a>

### *property* ContactToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id635"></a>

### *property* ContactToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id636"></a>

### *property* ContactToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id637"></a>

### *property* ContactToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id638"></a>

## Method detail

<a id="id639"></a>

### ContactToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id640"></a>

### ContactToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id641"></a>

### ContactToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id642"></a>

### ContactToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id643"></a>

### ContactToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id644"></a>

### ContactToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id645"></a>

### ContactToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id646"></a>

### ContactToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id647"></a>

### ContactToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id648"></a>

### ContactToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id649"></a>

### ContactToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id650"></a>

### ContactToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id651"></a>

### ContactToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id652"></a>

### ContactToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id653"></a>

### ContactToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id654"></a>

### ContactToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id655"></a>

### ContactToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id656"></a>

### ContactToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id657"></a>

### ContactToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id658"></a>

### ContactToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id659"></a>

### ContactToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id660"></a>

### ContactToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id661"></a>

### ContactToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id662"></a>

### ContactToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id663"></a>

### ContactToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id664"></a>

### ContactToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id665"></a>

### ContactToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
