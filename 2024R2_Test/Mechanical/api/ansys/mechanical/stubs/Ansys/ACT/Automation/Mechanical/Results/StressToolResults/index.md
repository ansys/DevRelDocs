<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults"></a>

<a id="the-stresstoolresults-package"></a>

# The `StressToolResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------|-------------------------------|
| [`StressTool`](StressTool.md#StressTool)                         | Defines a StressTool.         |
| [`StressToolResult`](StressToolResult.md#StressToolResult)       | Defines a StressToolResult.   |
| [`StressRatio`](StressRatio.md#StressRatio)                      | Defines a StressRatio.        |
| [`StressSafetyFactor`](StressSafetyFactor.md#StressSafetyFactor) | Defines a StressSafetyFactor. |
| [`StressSafetyMargin`](StressSafetyMargin.md#StressSafetyMargin) | Defines a StressSafetyMargin. |

<a id="description"></a>

## Description

StressToolResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="StressToolResults.StressTool"></a>

### *class* StressToolResults.StressTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id254)                          | Run the EvaluateAllResults action.                                                |
| [`AddStressRatio`](#StressToolResults.AddStressRatio)   | Creates a new StressRatio                                                         |
| [`AddSafetyFactor`](#StressToolResults.AddSafetyFactor) | Creates a new StressSafetyFactor                                                  |
| [`AddSafetyMargin`](#StressToolResults.AddSafetyMargin) | Creates a new StressSafetyMargin                                                  |
| [`Delete`](#id265)                                      | Run the Delete action.                                                            |
| [`GetChildren`](#id267)                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id267)                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id268)                                  | Creates a new child Comment.                                                      |
| [`AddFigure`](#id269)                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#id270)                                    | Creates a new child Image.                                                        |
| [`Activate`](#id271)                                    | Activate the current object.                                                      |
| [`CopyTo`](#id272)                                      | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id273)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id274)                     | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id275)                         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id276)                              | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id277)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#id261)                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id278)                                | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id279)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`LimitFactor`](#StressToolResults.LimitFactor)                                                                           | Gets or sets the LimitFactor.                                 |
| [`CompressiveLimit`](#StressToolResults.CompressiveLimit)                                                                 | Gets or sets the CompressiveLimit.                            |
| [`StressLimit`](#StressToolResults.StressLimit)                                                                           | Gets or sets the StressLimit.                                 |
| [`TensileLimit`](#StressToolResults.TensileLimit)                                                                         | Gets or sets the TensileLimit.                                |
| [`CompressiveLimitType`](#StressToolResults.CompressiveLimitType)                                                         | Gets or sets the CompressiveLimitType.                        |
| [`Theory`](#StressToolResults.Theory)                                                                                     | Gets or sets the Theory.                                      |
| [`StressLimitType`](#StressToolResults.StressLimitType)                                                                   | Gets or sets the StressLimitType.                             |
| [`TensileLimitType`](#StressToolResults.TensileLimitType)                                                                 | Gets or sets the TensileLimitType.                            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id245)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id246)                                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#id247)                                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#id248)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id250)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id251)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults import StressTool
```

<a id="property-detail"></a>

## Property detail

<a id="StressToolResults.InternalObject"></a>

### *property* StressToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStressSafetyToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LimitFactor"></a>

### *property* StressToolResults.LimitFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitFactor.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CompressiveLimit"></a>

### *property* StressToolResults.CompressiveLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.StressLimit"></a>

### *property* StressToolResults.StressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.TensileLimit"></a>

### *property* StressToolResults.TensileLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CompressiveLimitType"></a>

### *property* StressToolResults.CompressiveLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CompressiveLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Theory"></a>

### *property* StressToolResults.Theory *: [Ansys.Mechanical.DataModel.Enums.SafetyTheoryType](../../../../../Mechanical/DataModel/Enums/SafetyTheoryType.md#SafetyTheoryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Theory.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.StressLimitType"></a>

### *property* StressToolResults.StressLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.TensileLimitType"></a>

### *property* StressToolResults.TensileLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#SafetyLimitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TensileLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.DataModelObjectCategory"></a>

### *property* StressToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Children"></a>

### *property* StressToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Comments"></a>

### *property* StressToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Figures"></a>

### *property* StressToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Images"></a>

### *property* StressToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* StressToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Properties"></a>

### *property* StressToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.VisibleProperties"></a>

### *property* StressToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressToolResults.EvaluateAllResults"></a>

### StressToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddStressRatio"></a>

### StressToolResults.AddStressRatio()

Creates a new StressRatio

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddSafetyFactor"></a>

### StressToolResults.AddSafetyFactor()

Creates a new StressSafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddSafetyMargin"></a>

### StressToolResults.AddSafetyMargin()

Creates a new StressSafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Delete"></a>

### StressToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.GetChildren"></a>

### StressToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### StressToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddComment"></a>

### StressToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddFigure"></a>

### StressToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddImage"></a>

### StressToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Activate"></a>

### StressToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CopyTo"></a>

### StressToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Duplicate"></a>

### StressToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.GroupAllSimilarChildren"></a>

### StressToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.GroupSimilarObjects"></a>

### StressToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.PropertyByName"></a>

### StressToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.PropertyByAPIName"></a>

### StressToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CreateParameter"></a>

### StressToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.GetParameter"></a>

### StressToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.RemoveParameter"></a>

### StressToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.StressToolResult"></a>

### *class* StressToolResults.StressToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressToolResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id253)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id254)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id255)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id256)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id257)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id258) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id259)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id260) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id261)         | CreateParameter method.                                                           |
| [`AddAlert`](#id262)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id263)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id264) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id265)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id268)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id269)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id270)                | Creates a new child Image.                                                        |
| [`Activate`](#id271)                | Activate the current object.                                                      |
| [`CopyTo`](#id272)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id273)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id274) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id275)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id276)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id277)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id278)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id279)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`AverageAcrossBodies`](#id201)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id202)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id203)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id204)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id205)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id206)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id207)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id208)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id209)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id210)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id211)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id212)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id214)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id215)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id216)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id217)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id219)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id220)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id221)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id222)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id223)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id224)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id225)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id226)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id227)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id228)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id229)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id230)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id231)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id232)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id233)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id234)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id235)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id236)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id237)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id239)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id240)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id241)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id242)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id243)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id244)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id245)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id246)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id247)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id248)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id250)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id251)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults import StressToolResult
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* StressToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AverageAcrossBodies"></a>

### *property* StressToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* StressToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.PlotData"></a>

### *property* StressToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Location"></a>

### *property* StressToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.TimeForMinimumOfMinimumValues"></a>

### *property* StressToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.TimeForMinimumOfMaximumValues"></a>

### *property* StressToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* StressToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* StressToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.TimeForMaximumOfMinimumValues"></a>

### *property* StressToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.TimeForMaximumOfMaximumValues"></a>

### *property* StressToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* StressToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* StressToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.IsSolved"></a>

### *property* StressToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CoordinateSystem"></a>

### *property* StressToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.ScopingMethod"></a>

### *property* StressToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.SetNumber"></a>

### *property* StressToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CombinationNumber"></a>

### *property* StressToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.SolutionCombinationDriver"></a>

### *property* StressToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Surface"></a>

### *property* StressToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CrackFrontNumber"></a>

### *property* StressToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.GlobalIDs"></a>

### *property* StressToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Identifier"></a>

### *property* StressToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.IterationNumber"></a>

### *property* StressToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LoadStep"></a>

### *property* StressToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.MaximumOccursOn"></a>

### *property* StressToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.MinimumOccursOn"></a>

### *property* StressToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.LoadStepNumber"></a>

### *property* StressToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.SolverComponentIDs"></a>

### *property* StressToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Substep"></a>

### *property* StressToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Average"></a>

### *property* StressToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Maximum"></a>

### *property* StressToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.MaximumOfMaximumOverTime"></a>

### *property* StressToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.MaximumOfMinimumOverTime"></a>

### *property* StressToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Minimum"></a>

### *property* StressToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.MinimumOfMaximumOverTime"></a>

### *property* StressToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.MinimumOfMinimumOverTime"></a>

### *property* StressToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Time"></a>

### *property* StressToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.DisplayTime"></a>

### *property* StressToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.GraphControlsXAxis"></a>

### *property* StressToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.DisplayOption"></a>

### *property* StressToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.DpfEvaluation"></a>

### *property* StressToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.By"></a>

### *property* StressToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.ItemType"></a>

### *property* StressToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CalculateTimeHistory"></a>

### *property* StressToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.Suppressed"></a>

### *property* StressToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* StressToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* StressToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* StressToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* StressToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* StressToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* StressToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* StressToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

## Method detail

<a id="StressToolResults.ClearGeneratedData"></a>

### StressToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### StressToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.FetchRemoteResults"></a>

### StressToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.ExportToTextFile"></a>

### StressToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.ExportAnimation"></a>

### StressToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.DuplicateWithoutResults"></a>

### StressToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.CreateResultsAtAllSets"></a>

### StressToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.PromoteToNamedSelection"></a>

### StressToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### StressToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddAlert"></a>

### StressToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.AddConvergence"></a>

### StressToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.RenameBasedOnDefinition"></a>

### StressToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### StressToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### StressToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### StressToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### StressToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### StressToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### StressToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### StressToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### StressToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### StressToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### StressToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### StressToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### StressToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### StressToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### StressToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### StressToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.StressRatio"></a>

### *class* StressToolResults.StressRatio

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressRatio.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id253)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id254)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id255)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id256)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id257)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id258) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id259)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id260) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id261)         | CreateParameter method.                                                           |
| [`AddAlert`](#id262)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id263)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id264) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id265)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id268)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id269)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id270)                | Creates a new child Image.                                                        |
| [`Activate`](#id271)                | Activate the current object.                                                      |
| [`CopyTo`](#id272)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id273)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id274) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id275)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id276)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id277)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id278)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id279)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`AverageAcrossBodies`](#id201)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id202)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id203)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id204)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id205)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id206)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id207)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id208)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id209)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id210)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id211)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id212)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id214)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id215)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id216)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id217)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id219)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id220)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id221)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id222)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id223)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id224)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id225)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id226)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id227)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id228)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id229)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id230)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id231)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id232)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id233)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id234)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id235)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id236)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id237)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id239)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id240)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id241)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id242)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id243)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id244)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id245)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id246)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id247)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id248)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id250)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id251)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id31"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults import StressRatio
```

<a id="id32"></a>

## Property detail

<a id="id33"></a>

### *property* StressToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* StressToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* StressToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* StressToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* StressToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* StressToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* StressToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* StressToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* StressToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* StressToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* StressToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* StressToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* StressToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* StressToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* StressToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* StressToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* StressToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* StressToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* StressToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* StressToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* StressToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* StressToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* StressToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* StressToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* StressToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* StressToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* StressToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* StressToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* StressToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* StressToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* StressToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* StressToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* StressToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* StressToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* StressToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* StressToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* StressToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* StressToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* StressToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* StressToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* StressToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* StressToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* StressToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* StressToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* StressToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* StressToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* StressToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* StressToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* StressToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* StressToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* StressToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* StressToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* StressToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

## Method detail

<a id="id87"></a>

### StressToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### StressToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### StressToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### StressToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### StressToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### StressToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### StressToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### StressToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### StressToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### StressToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### StressToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### StressToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### StressToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### StressToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### StressToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### StressToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### StressToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### StressToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### StressToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### StressToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### StressToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### StressToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### StressToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### StressToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### StressToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### StressToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### StressToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.StressSafetyFactor"></a>

### *class* StressToolResults.StressSafetyFactor

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressSafetyFactor.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id253)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id254)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id255)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id256)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id257)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id258) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id259)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id260) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id261)         | CreateParameter method.                                                           |
| [`AddAlert`](#id262)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id263)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id264) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id265)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id268)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id269)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id270)                | Creates a new child Image.                                                        |
| [`Activate`](#id271)                | Activate the current object.                                                      |
| [`CopyTo`](#id272)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id273)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id274) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id275)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id276)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id277)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id278)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id279)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`AverageAcrossBodies`](#id201)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id202)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id203)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id204)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id205)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id206)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id207)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id208)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id209)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id210)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id211)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id212)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id214)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id215)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id216)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id217)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id219)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id220)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id221)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id222)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id223)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id224)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id225)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id226)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id227)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id228)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id229)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id230)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id231)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id232)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id233)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id234)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id235)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id236)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id237)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id239)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id240)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id241)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id242)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id243)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id244)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id245)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id246)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id247)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id248)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id250)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id251)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id114"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults import StressSafetyFactor
```

<a id="id115"></a>

## Property detail

<a id="id116"></a>

### *property* StressToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* StressToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* StressToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* StressToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* StressToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* StressToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* StressToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* StressToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* StressToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* StressToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* StressToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* StressToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* StressToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* StressToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* StressToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* StressToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* StressToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* StressToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* StressToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* StressToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* StressToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* StressToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* StressToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* StressToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* StressToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* StressToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* StressToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* StressToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* StressToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* StressToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* StressToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* StressToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* StressToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* StressToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* StressToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* StressToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* StressToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* StressToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* StressToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* StressToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* StressToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* StressToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* StressToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* StressToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* StressToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* StressToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* StressToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* StressToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* StressToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* StressToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* StressToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* StressToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* StressToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

## Method detail

<a id="id170"></a>

### StressToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### StressToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### StressToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### StressToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### StressToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### StressToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### StressToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### StressToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### StressToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### StressToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### StressToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### StressToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### StressToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### StressToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### StressToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### StressToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### StressToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### StressToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### StressToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### StressToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### StressToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### StressToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### StressToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### StressToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### StressToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### StressToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### StressToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressToolResults.StressSafetyMargin"></a>

### *class* StressToolResults.StressSafetyMargin

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a StressSafetyMargin.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id253)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id254)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id255)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id256)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id257)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id258) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id259)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id260) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id261)         | CreateParameter method.                                                           |
| [`AddAlert`](#id262)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id263)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id264) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id265)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id267)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id268)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id269)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id270)                | Creates a new child Image.                                                        |
| [`Activate`](#id271)                | Activate the current object.                                                      |
| [`CopyTo`](#id272)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id273)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id274) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id275)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id276)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id277)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id278)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id279)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`AverageAcrossBodies`](#id201)                                                                                           | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#id202)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id203)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id204)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id205)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id206)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id207)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id208)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id209)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id210)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id211)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id212)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id214)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id215)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id216)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id217)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id219)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id220)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id221)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id222)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id223)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id224)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id225)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id226)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id227)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id228)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id229)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id230)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id231)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id232)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id233)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id234)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id235)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id236)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id237)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id239)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id240)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id241)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id242)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id243)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id244)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id245)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id246)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id247)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id248)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id249)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id250)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id251)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id197"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.StressToolResults import StressSafetyMargin
```

<a id="id198"></a>

## Property detail

<a id="id199"></a>

### *property* StressToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* StressToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* StressToolResults.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* StressToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* StressToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* StressToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* StressToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* StressToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* StressToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* StressToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* StressToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* StressToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* StressToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* StressToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* StressToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* StressToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* StressToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* StressToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* StressToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* StressToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* StressToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* StressToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* StressToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* StressToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* StressToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* StressToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* StressToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* StressToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* StressToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* StressToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* StressToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* StressToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* StressToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* StressToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* StressToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* StressToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* StressToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* StressToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* StressToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* StressToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* StressToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* StressToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* StressToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* StressToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* StressToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* StressToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* StressToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* StressToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* StressToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* StressToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* StressToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* StressToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* StressToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

## Method detail

<a id="id253"></a>

### StressToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### StressToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### StressToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### StressToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### StressToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### StressToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### StressToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### StressToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### StressToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### StressToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### StressToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### StressToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### StressToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### StressToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### StressToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### StressToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### StressToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### StressToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### StressToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### StressToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### StressToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### StressToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### StressToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### StressToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### StressToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### StressToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### StressToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
