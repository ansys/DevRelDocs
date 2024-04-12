<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults"></a>

<a id="the-compositefailureresults-package"></a>

# The `CompositeFailureResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------------|---------------------------------------|
| [`CompositeFailureTool`](CompositeFailureTool.md#CompositeFailureTool)                   | Defines a CompositeFailureTool.       |
| [`CompositeFailureResult`](CompositeFailureResult.md#CompositeFailureResult)             | CompositeFailureResult class.         |
| [`CompositeSamplingPoint`](CompositeSamplingPoint.md#CompositeSamplingPoint)             | Defines a CompositeSamplingPoint.     |
| [`CompositeSamplingPointTool`](CompositeSamplingPointTool.md#CompositeSamplingPointTool) | Defines a CompositeSamplingPointTool. |

<a id="description"></a>

## Description

CompositeFailureResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="CompositeFailureResults.CompositeFailureTool"></a>

### *class* CompositeFailureResults.CompositeFailureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CompositeFailureTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddInverseReserveFactor`](#CompositeFailureResults.AddInverseReserveFactor)       | Creates a new InverseReserveFactor                                                |
| [`AddSafetyFactor`](#CompositeFailureResults.AddSafetyFactor)                       | Creates a new SafetyFactor                                                        |
| [`AddSafetyMargin`](#CompositeFailureResults.AddSafetyMargin)                       | Creates a new SafetyMargin                                                        |
| [`EvaluateAllResults`](#id14)                                                       | Run the EvaluateAllResults action.                                                |
| [`AddGroupedScopedACPResults`](#CompositeFailureResults.AddGroupedScopedACPResults) | AddGroupedScopedACPResults method.                                                |
| [`Delete`](#id72)                                                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id74)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id74)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id75)                                                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#id76)                                                                | Creates a new child Figure.                                                       |
| [`AddImage`](#id77)                                                                 | Creates a new child Image.                                                        |
| [`Activate`](#id78)                                                                 | Activate the current object.                                                      |
| [`CopyTo`](#id79)                                                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id80)                                                                | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id81)                                                  | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id82)                                                      | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id83)                                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id84)                                                        | Get a property by its API name.                                                   |
| [`CreateParameter`](#id85)                                                          | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id86)                                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id87)                                                          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id64)                                                                                                       | Gets the list of children.                                    |
| [`Comments`](#id65)                                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#id66)                                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#id67)                                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id69)                                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id70)                                                                                              | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults import CompositeFailureTool
```

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureResults.InternalObject"></a>

### *property* CompositeFailureResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.DataModelObjectCategory"></a>

### *property* CompositeFailureResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Children"></a>

### *property* CompositeFailureResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Comments"></a>

### *property* CompositeFailureResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Figures"></a>

### *property* CompositeFailureResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Images"></a>

### *property* CompositeFailureResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CompositeFailureResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Properties"></a>

### *property* CompositeFailureResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.VisibleProperties"></a>

### *property* CompositeFailureResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureResults.AddInverseReserveFactor"></a>

### CompositeFailureResults.AddInverseReserveFactor()

Creates a new InverseReserveFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddSafetyFactor"></a>

### CompositeFailureResults.AddSafetyFactor()

Creates a new SafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddSafetyMargin"></a>

### CompositeFailureResults.AddSafetyMargin()

Creates a new SafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.EvaluateAllResults"></a>

### CompositeFailureResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddGroupedScopedACPResults"></a>

### CompositeFailureResults.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ResultType), selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Delete"></a>

### CompositeFailureResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.GetChildren"></a>

### CompositeFailureResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CompositeFailureResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddComment"></a>

### CompositeFailureResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddFigure"></a>

### CompositeFailureResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddImage"></a>

### CompositeFailureResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Activate"></a>

### CompositeFailureResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CopyTo"></a>

### CompositeFailureResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Duplicate"></a>

### CompositeFailureResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.GroupAllSimilarChildren"></a>

### CompositeFailureResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.GroupSimilarObjects"></a>

### CompositeFailureResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.PropertyByName"></a>

### CompositeFailureResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.PropertyByAPIName"></a>

### CompositeFailureResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CreateParameter"></a>

### CompositeFailureResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.GetParameter"></a>

### CompositeFailureResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.RemoveParameter"></a>

### CompositeFailureResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CompositeFailureResult"></a>

### *class* CompositeFailureResults.CompositeFailureResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> CompositeFailureResult class.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#CompositeFailureResults.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id14)                                                 | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#CompositeFailureResults.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#CompositeFailureResults.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#CompositeFailureResults.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#CompositeFailureResults.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#CompositeFailureResults.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#CompositeFailureResults.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id85)                                                    | CreateParameter method.                                                           |
| [`AddAlert`](#CompositeFailureResults.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#CompositeFailureResults.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#CompositeFailureResults.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id72)                                                             | Run the Delete action.                                                            |
| [`GetChildren`](#id74)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id74)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id75)                                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#id76)                                                          | Creates a new child Figure.                                                       |
| [`AddImage`](#id77)                                                           | Creates a new child Image.                                                        |
| [`Activate`](#id78)                                                           | Activate the current object.                                                      |
| [`CopyTo`](#id79)                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id80)                                                          | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id81)                                            | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id82)                                                | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id83)                                                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id84)                                                  | Get a property by its API name.                                                   |
| [`GetParameter`](#id86)                                                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id87)                                                    | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Ply`](#CompositeFailureResults.Ply)                                                                                     | Gets or sets the Ply selection.                                        |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#CompositeFailureResults.PlotData)                                                                           | Gets the result table.                                                 |
| [`Location`](#id34)                                                                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#CompositeFailureResults.TimeForMinimumOfMinimumValues)                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#CompositeFailureResults.TimeForMinimumOfMaximumValues)                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#CompositeFailureResults.LoadStepForMinimumOfMinimumValues)                         | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#CompositeFailureResults.LoadStepForMinimumOfMaximumValues)                         | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#CompositeFailureResults.TimeForMaximumOfMinimumValues)                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#CompositeFailureResults.TimeForMaximumOfMaximumValues)                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#CompositeFailureResults.LoadStepForMaximumOfMinimumValues)                         | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#CompositeFailureResults.LoadStepForMaximumOfMaximumValues)                         | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#CompositeFailureResults.IsSolved)                                                                           | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#CompositeFailureResults.ScopingMethod)                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#CompositeFailureResults.SetNumber)                                                                         | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#CompositeFailureResults.CombinationNumber)                                                         | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#CompositeFailureResults.SolutionCombinationDriver)                                         | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.                     |
| [`CrackFrontNumber`](#CompositeFailureResults.CrackFrontNumber)                                                           | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#CompositeFailureResults.GlobalIDs)                                                                         | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#CompositeFailureResults.Identifier)                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#CompositeFailureResults.IterationNumber)                                                             | Gets the IterationNumber.                                              |
| [`LoadStep`](#CompositeFailureResults.LoadStep)                                                                           | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#CompositeFailureResults.MaximumOccursOn)                                                             | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#CompositeFailureResults.MinimumOccursOn)                                                             | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#CompositeFailureResults.LoadStepNumber)                                                               | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#CompositeFailureResults.SolverComponentIDs)                                                       | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#CompositeFailureResults.Substep)                                                                             | Gets the Substep.                                                      |
| [`Average`](#CompositeFailureResults.Average)                                                                             | Gets the Average.                                                      |
| [`Maximum`](#CompositeFailureResults.Maximum)                                                                             | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#CompositeFailureResults.MaximumOfMaximumOverTime)                                           | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#CompositeFailureResults.MaximumOfMinimumOverTime)                                           | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#CompositeFailureResults.Minimum)                                                                             | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#CompositeFailureResults.MinimumOfMaximumOverTime)                                           | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#CompositeFailureResults.MinimumOfMinimumOverTime)                                           | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#CompositeFailureResults.Time)                                                                                   | Gets the Time.                                                         |
| [`DisplayTime`](#CompositeFailureResults.DisplayTime)                                                                     | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#CompositeFailureResults.DisplayOption)                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#CompositeFailureResults.DpfEvaluation)                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#CompositeFailureResults.By)                                                                                       | Gets or sets the By.                                                   |
| [`ItemType`](#CompositeFailureResults.ItemType)                                                                           | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#CompositeFailureResults.CalculateTimeHistory)                                                   | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#CompositeFailureResults.Suppressed)                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id64)                                                                                                       | Gets the list of children.                                             |
| [`Comments`](#id65)                                                                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#id66)                                                                                                        | Gets the list of associated figures.                                   |
| [`Images`](#id67)                                                                                                         | Gets the list of associated images.                                    |
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id69)                                                                                                     | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id70)                                                                                              | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults import CompositeFailureResult
```

<a id="id3"></a>

## Property detail

<a id="CompositeFailureResults.Ply"></a>

### *property* CompositeFailureResults.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### *property* CompositeFailureResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.PlotData"></a>

### *property* CompositeFailureResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Location"></a>

### *property* CompositeFailureResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.TimeForMinimumOfMinimumValues"></a>

### *property* CompositeFailureResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.TimeForMinimumOfMaximumValues"></a>

### *property* CompositeFailureResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* CompositeFailureResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* CompositeFailureResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.TimeForMaximumOfMinimumValues"></a>

### *property* CompositeFailureResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.TimeForMaximumOfMaximumValues"></a>

### *property* CompositeFailureResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* CompositeFailureResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* CompositeFailureResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.IsSolved"></a>

### *property* CompositeFailureResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CoordinateSystem"></a>

### *property* CompositeFailureResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.ScopingMethod"></a>

### *property* CompositeFailureResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.SetNumber"></a>

### *property* CompositeFailureResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CombinationNumber"></a>

### *property* CompositeFailureResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.SolutionCombinationDriver"></a>

### *property* CompositeFailureResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Surface"></a>

### *property* CompositeFailureResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* CompositeFailureResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CrackFrontNumber"></a>

### *property* CompositeFailureResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.GlobalIDs"></a>

### *property* CompositeFailureResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Identifier"></a>

### *property* CompositeFailureResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.IterationNumber"></a>

### *property* CompositeFailureResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.LoadStep"></a>

### *property* CompositeFailureResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.MaximumOccursOn"></a>

### *property* CompositeFailureResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.MinimumOccursOn"></a>

### *property* CompositeFailureResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.LoadStepNumber"></a>

### *property* CompositeFailureResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.SolverComponentIDs"></a>

### *property* CompositeFailureResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Substep"></a>

### *property* CompositeFailureResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Average"></a>

### *property* CompositeFailureResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Maximum"></a>

### *property* CompositeFailureResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.MaximumOfMaximumOverTime"></a>

### *property* CompositeFailureResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.MaximumOfMinimumOverTime"></a>

### *property* CompositeFailureResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Minimum"></a>

### *property* CompositeFailureResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.MinimumOfMaximumOverTime"></a>

### *property* CompositeFailureResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.MinimumOfMinimumOverTime"></a>

### *property* CompositeFailureResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Time"></a>

### *property* CompositeFailureResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.DisplayTime"></a>

### *property* CompositeFailureResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.GraphControlsXAxis"></a>

### *property* CompositeFailureResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.DisplayOption"></a>

### *property* CompositeFailureResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.DpfEvaluation"></a>

### *property* CompositeFailureResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.By"></a>

### *property* CompositeFailureResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.ItemType"></a>

### *property* CompositeFailureResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CalculateTimeHistory"></a>

### *property* CompositeFailureResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.Suppressed"></a>

### *property* CompositeFailureResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* CompositeFailureResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* CompositeFailureResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* CompositeFailureResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* CompositeFailureResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* CompositeFailureResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* CompositeFailureResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* CompositeFailureResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

## Method detail

<a id="CompositeFailureResults.ClearGeneratedData"></a>

### CompositeFailureResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### CompositeFailureResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.FetchRemoteResults"></a>

### CompositeFailureResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.ExportToTextFile"></a>

### CompositeFailureResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.ExportAnimation"></a>

### CompositeFailureResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.DuplicateWithoutResults"></a>

### CompositeFailureResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CreateResultsAtAllSets"></a>

### CompositeFailureResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.PromoteToNamedSelection"></a>

### CompositeFailureResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### CompositeFailureResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddAlert"></a>

### CompositeFailureResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.AddConvergence"></a>

### CompositeFailureResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.RenameBasedOnDefinition"></a>

### CompositeFailureResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### CompositeFailureResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### CompositeFailureResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### CompositeFailureResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### CompositeFailureResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### CompositeFailureResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### CompositeFailureResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### CompositeFailureResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### CompositeFailureResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### CompositeFailureResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### CompositeFailureResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### CompositeFailureResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### CompositeFailureResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### CompositeFailureResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### CompositeFailureResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### CompositeFailureResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CompositeSamplingPoint"></a>

### *class* CompositeFailureResults.CompositeSamplingPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CompositeSamplingPoint.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id72)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id74)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id74)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id75)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id76)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id77)                | Creates a new child Image.                                                        |
| [`Activate`](#id78)                | Activate the current object.                                                      |
| [`CopyTo`](#id79)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id80)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id81) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id82)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id83)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id84)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id85)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id86)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id87)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`Location`](#id34)                                                                                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id64)                                                                                                       | Gets the list of children.                                    |
| [`Comments`](#id65)                                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#id66)                                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#id67)                                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id69)                                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id70)                                                                                              | Gets the list of properties that are visible for this object. |

<a id="id31"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults import CompositeSamplingPoint
```

<a id="id32"></a>

## Property detail

<a id="id33"></a>

### *property* CompositeFailureResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeSamplingPointResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* CompositeFailureResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* CompositeFailureResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* CompositeFailureResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* CompositeFailureResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* CompositeFailureResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* CompositeFailureResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* CompositeFailureResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* CompositeFailureResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* CompositeFailureResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

## Method detail

<a id="id44"></a>

### CompositeFailureResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### CompositeFailureResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### CompositeFailureResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### CompositeFailureResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### CompositeFailureResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### CompositeFailureResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### CompositeFailureResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### CompositeFailureResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### CompositeFailureResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### CompositeFailureResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### CompositeFailureResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### CompositeFailureResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### CompositeFailureResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### CompositeFailureResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### CompositeFailureResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### CompositeFailureResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResults.CompositeSamplingPointTool"></a>

### *class* CompositeFailureResults.CompositeSamplingPointTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CompositeSamplingPointTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCompositeSamplingPoint`](#CompositeFailureResults.AddCompositeSamplingPoint)   | Creates a new CompositeSamplingPoint                                              |
| [`Delete`](#id72)                                                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id74)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id74)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id75)                                                               | Creates a new child Comment.                                                      |
| [`AddFigure`](#id76)                                                                | Creates a new child Figure.                                                       |
| [`AddImage`](#id77)                                                                 | Creates a new child Image.                                                        |
| [`Activate`](#id78)                                                                 | Activate the current object.                                                      |
| [`CopyTo`](#id79)                                                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id80)                                                                | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id81)                                                  | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id82)                                                      | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id83)                                                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id84)                                                        | Get a property by its API name.                                                   |
| [`CreateParameter`](#id85)                                                          | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id86)                                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id87)                                                          | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id64)                                                                                                       | Gets the list of children.                                    |
| [`Comments`](#id65)                                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#id66)                                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#id67)                                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id68)                                                                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id69)                                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id70)                                                                                              | Gets the list of properties that are visible for this object. |

<a id="id60"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults import CompositeSamplingPointTool
```

<a id="id61"></a>

## Property detail

<a id="id62"></a>

### *property* CompositeFailureResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* CompositeFailureResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* CompositeFailureResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* CompositeFailureResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* CompositeFailureResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* CompositeFailureResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* CompositeFailureResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* CompositeFailureResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* CompositeFailureResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

## Method detail

<a id="CompositeFailureResults.AddCompositeSamplingPoint"></a>

### CompositeFailureResults.AddCompositeSamplingPoint()

Creates a new CompositeSamplingPoint

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### CompositeFailureResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### CompositeFailureResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### CompositeFailureResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### CompositeFailureResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### CompositeFailureResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### CompositeFailureResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### CompositeFailureResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### CompositeFailureResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### CompositeFailureResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### CompositeFailureResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### CompositeFailureResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### CompositeFailureResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### CompositeFailureResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### CompositeFailureResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### CompositeFailureResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### CompositeFailureResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
