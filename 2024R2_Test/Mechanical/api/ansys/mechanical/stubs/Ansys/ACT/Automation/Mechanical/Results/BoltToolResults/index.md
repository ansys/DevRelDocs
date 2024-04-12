<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults"></a>

<a id="the-bolttoolresults-package"></a>

# The `BoltToolResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|---------------------------------------------------------|----------------------------|
| [`BoltTool`](BoltTool.md#BoltTool)                      | Defines a BoltTool.        |
| [`BoltToolResult`](BoltToolResult.md#BoltToolResult)    | Defines a BoltToolResult.  |
| [`BoltAdjustment`](BoltAdjustment.md#BoltAdjustment)    | Defines a BoltAdjustment.  |
| [`BoltWorkingLoad`](BoltWorkingLoad.md#BoltWorkingLoad) | Defines a BoltWorkingLoad. |

<a id="description"></a>

## Description

BoltToolResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="BoltToolResults.BoltTool"></a>

### *class* BoltToolResults.BoltTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-----------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id170)                      | Run the EvaluateAllResults action.                                                |
| [`AddAdjustment`](#BoltToolResults.AddAdjustment)   | Creates a new BoltAdjustment                                                      |
| [`AddWorkingLoad`](#BoltToolResults.AddWorkingLoad) | Creates a new BoltWorkingLoad                                                     |
| [`Delete`](#id181)                                  | Run the Delete action.                                                            |
| [`GetChildren`](#id183)                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id183)                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id184)                              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id185)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#id186)                                | Creates a new child Image.                                                        |
| [`Activate`](#id187)                                | Activate the current object.                                                      |
| [`CopyTo`](#id188)                                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id189)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id190)                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id191)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id192)                          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id193)                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id177)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id194)                            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id195)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id161)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id162)                                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#id163)                                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#id164)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id166)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id167)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults import BoltTool
```

<a id="property-detail"></a>

## Property detail

<a id="BoltToolResults.InternalObject"></a>

### *property* BoltToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBoltToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.DataModelObjectCategory"></a>

### *property* BoltToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Children"></a>

### *property* BoltToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Comments"></a>

### *property* BoltToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Figures"></a>

### *property* BoltToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Images"></a>

### *property* BoltToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BoltToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Properties"></a>

### *property* BoltToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.VisibleProperties"></a>

### *property* BoltToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltToolResults.EvaluateAllResults"></a>

### BoltToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddAdjustment"></a>

### BoltToolResults.AddAdjustment()

Creates a new BoltAdjustment

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddWorkingLoad"></a>

### BoltToolResults.AddWorkingLoad()

Creates a new BoltWorkingLoad

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Delete"></a>

### BoltToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.GetChildren"></a>

### BoltToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BoltToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddComment"></a>

### BoltToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddFigure"></a>

### BoltToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddImage"></a>

### BoltToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Activate"></a>

### BoltToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CopyTo"></a>

### BoltToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Duplicate"></a>

### BoltToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.GroupAllSimilarChildren"></a>

### BoltToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.GroupSimilarObjects"></a>

### BoltToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.PropertyByName"></a>

### BoltToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.PropertyByAPIName"></a>

### BoltToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CreateParameter"></a>

### BoltToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.GetParameter"></a>

### BoltToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.RemoveParameter"></a>

### BoltToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.BoltToolResult"></a>

### *class* BoltToolResults.BoltToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltToolResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id169)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id170)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id171)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id172)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id173)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id174) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id175)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id176) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id177)         | CreateParameter method.                                                           |
| [`AddAlert`](#id178)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id179)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id180) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id181)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id183)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id183)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id184)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id185)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id186)                | Creates a new child Image.                                                        |
| [`Activate`](#id187)                | Activate the current object.                                                      |
| [`CopyTo`](#id188)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id189)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id190) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id191)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id192)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id193)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id194)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id195)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id118)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id119)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id120)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id121)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id122)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id123)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id124)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id125)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id126)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id127)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id128)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id130)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id131)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id132)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id133)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id135)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id136)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id137)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id138)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id139)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id140)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id141)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id142)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id143)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id144)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id145)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id146)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id147)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id148)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id149)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id150)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id151)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id152)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id153)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id155)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id156)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id157)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id158)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id159)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id160)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id161)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id162)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id163)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id164)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id166)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id167)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults import BoltToolResult
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* BoltToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* BoltToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.PlotData"></a>

### *property* BoltToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Location"></a>

### *property* BoltToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.TimeForMinimumOfMinimumValues"></a>

### *property* BoltToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.TimeForMinimumOfMaximumValues"></a>

### *property* BoltToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* BoltToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* BoltToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.TimeForMaximumOfMinimumValues"></a>

### *property* BoltToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.TimeForMaximumOfMaximumValues"></a>

### *property* BoltToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* BoltToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* BoltToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.IsSolved"></a>

### *property* BoltToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CoordinateSystem"></a>

### *property* BoltToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.ScopingMethod"></a>

### *property* BoltToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.SetNumber"></a>

### *property* BoltToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CombinationNumber"></a>

### *property* BoltToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.SolutionCombinationDriver"></a>

### *property* BoltToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Surface"></a>

### *property* BoltToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CrackFrontNumber"></a>

### *property* BoltToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.GlobalIDs"></a>

### *property* BoltToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Identifier"></a>

### *property* BoltToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.IterationNumber"></a>

### *property* BoltToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.LoadStep"></a>

### *property* BoltToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.MaximumOccursOn"></a>

### *property* BoltToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.MinimumOccursOn"></a>

### *property* BoltToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.LoadStepNumber"></a>

### *property* BoltToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.SolverComponentIDs"></a>

### *property* BoltToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Substep"></a>

### *property* BoltToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Average"></a>

### *property* BoltToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Maximum"></a>

### *property* BoltToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.MaximumOfMaximumOverTime"></a>

### *property* BoltToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.MaximumOfMinimumOverTime"></a>

### *property* BoltToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Minimum"></a>

### *property* BoltToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.MinimumOfMaximumOverTime"></a>

### *property* BoltToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.MinimumOfMinimumOverTime"></a>

### *property* BoltToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Time"></a>

### *property* BoltToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.DisplayTime"></a>

### *property* BoltToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.GraphControlsXAxis"></a>

### *property* BoltToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.DisplayOption"></a>

### *property* BoltToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.DpfEvaluation"></a>

### *property* BoltToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.By"></a>

### *property* BoltToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.ItemType"></a>

### *property* BoltToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CalculateTimeHistory"></a>

### *property* BoltToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.Suppressed"></a>

### *property* BoltToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* BoltToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* BoltToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* BoltToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* BoltToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* BoltToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* BoltToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* BoltToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

## Method detail

<a id="BoltToolResults.ClearGeneratedData"></a>

### BoltToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### BoltToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.FetchRemoteResults"></a>

### BoltToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.ExportToTextFile"></a>

### BoltToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.ExportAnimation"></a>

### BoltToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.DuplicateWithoutResults"></a>

### BoltToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.CreateResultsAtAllSets"></a>

### BoltToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.PromoteToNamedSelection"></a>

### BoltToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### BoltToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddAlert"></a>

### BoltToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.AddConvergence"></a>

### BoltToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.RenameBasedOnDefinition"></a>

### BoltToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### BoltToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### BoltToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### BoltToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### BoltToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### BoltToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### BoltToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### BoltToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### BoltToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### BoltToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### BoltToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### BoltToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### BoltToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### BoltToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### BoltToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### BoltToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.BoltAdjustment"></a>

### *class* BoltToolResults.BoltAdjustment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltAdjustment.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id169)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id170)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id171)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id172)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id173)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id174) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id175)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id176) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id177)         | CreateParameter method.                                                           |
| [`AddAlert`](#id178)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id179)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id180) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id181)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id183)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id183)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id184)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id185)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id186)                | Creates a new child Image.                                                        |
| [`Activate`](#id187)                | Activate the current object.                                                      |
| [`CopyTo`](#id188)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id189)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id190) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id191)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id192)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id193)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id194)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id195)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`BoltResultType`](../../../../../Mechanical/DataModel/Enums/BoltResultType.md#BoltResultType)                            | Gets or sets the BoltResultType.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id118)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id119)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id120)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id121)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id122)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id123)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id124)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id125)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id126)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id127)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id128)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id130)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id131)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id132)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id133)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id135)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id136)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id137)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id138)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id139)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id140)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id141)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id142)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id143)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id144)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id145)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id146)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id147)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id148)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id149)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id150)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id151)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id152)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id153)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id155)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id156)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id157)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id158)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id159)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id160)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id161)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id162)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id163)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id164)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id166)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id167)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id31"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults import BoltAdjustment
```

<a id="id32"></a>

## Property detail

<a id="id33"></a>

### *property* BoltToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.BoltResultType"></a>

### *property* BoltToolResults.BoltResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoltResultType.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* BoltToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* BoltToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* BoltToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* BoltToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* BoltToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* BoltToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* BoltToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* BoltToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* BoltToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* BoltToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* BoltToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* BoltToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* BoltToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* BoltToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* BoltToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* BoltToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* BoltToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* BoltToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* BoltToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* BoltToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* BoltToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* BoltToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* BoltToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* BoltToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* BoltToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* BoltToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* BoltToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* BoltToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* BoltToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* BoltToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* BoltToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* BoltToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* BoltToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* BoltToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* BoltToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* BoltToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* BoltToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* BoltToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* BoltToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* BoltToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* BoltToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* BoltToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* BoltToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* BoltToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* BoltToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* BoltToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* BoltToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* BoltToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* BoltToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* BoltToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* BoltToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

## Method detail

<a id="id86"></a>

### BoltToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### BoltToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### BoltToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### BoltToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### BoltToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### BoltToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### BoltToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### BoltToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### BoltToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### BoltToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### BoltToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### BoltToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### BoltToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### BoltToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### BoltToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### BoltToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### BoltToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### BoltToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### BoltToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### BoltToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### BoltToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### BoltToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### BoltToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### BoltToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### BoltToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### BoltToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### BoltToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltToolResults.BoltWorkingLoad"></a>

### *class* BoltToolResults.BoltWorkingLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltWorkingLoad.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id169)      | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id170)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id171)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id172)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id173)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id174) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id175)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id176) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id177)         | CreateParameter method.                                                           |
| [`AddAlert`](#id178)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id179)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id180) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id181)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id183)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id183)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id184)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id185)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id186)                | Creates a new child Image.                                                        |
| [`Activate`](#id187)                | Activate the current object.                                                      |
| [`CopyTo`](#id188)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id189)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id190) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id191)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id192)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id193)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id194)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id195)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`BoltResultType`](../../../../../Mechanical/DataModel/Enums/BoltResultType.md#BoltResultType)                            | Gets or sets the BoltResultType.                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id118)                                                                                                      | Gets the result table.                                                 |
| [`Location`](#id119)                                                                                                      | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id120)                                                                                 | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id121)                                                                                 | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id122)                                                                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id123)                                                                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id124)                                                                                 | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id125)                                                                                 | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id126)                                                                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id127)                                                                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id128)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id130)                                                                                                 | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id131)                                                                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id132)                                                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id133)                                                                                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id135)                                                                                              | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id136)                                                                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id137)                                                                                                    | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id138)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id139)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id140)                                                                                               | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id141)                                                                                               | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id142)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id143)                                                                                            | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id144)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#id145)                                                                                                       | Gets the Average.                                                      |
| [`Maximum`](#id146)                                                                                                       | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id147)                                                                                      | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id148)                                                                                      | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id149)                                                                                                       | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id150)                                                                                      | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id151)                                                                                      | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id152)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id153)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id155)                                                                                                 | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id156)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id157)                                                                                                            | Gets or sets the By.                                                   |
| [`ItemType`](#id158)                                                                                                      | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id159)                                                                                          | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id160)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id161)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id162)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id163)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id164)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id165)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id166)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id167)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id113"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults import BoltWorkingLoad
```

<a id="id114"></a>

## Property detail

<a id="id115"></a>

### *property* BoltToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* BoltToolResults.BoltResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoltResultType.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* BoltToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* BoltToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* BoltToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* BoltToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* BoltToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* BoltToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* BoltToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* BoltToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* BoltToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* BoltToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* BoltToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* BoltToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* BoltToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* BoltToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* BoltToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* BoltToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* BoltToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* BoltToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* BoltToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* BoltToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* BoltToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* BoltToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* BoltToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* BoltToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* BoltToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* BoltToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* BoltToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* BoltToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* BoltToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* BoltToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* BoltToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* BoltToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* BoltToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* BoltToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* BoltToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* BoltToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* BoltToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* BoltToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* BoltToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* BoltToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* BoltToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* BoltToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* BoltToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* BoltToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* BoltToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* BoltToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* BoltToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* BoltToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* BoltToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* BoltToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* BoltToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

## Method detail

<a id="id169"></a>

### BoltToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### BoltToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### BoltToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### BoltToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### BoltToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### BoltToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### BoltToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### BoltToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### BoltToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### BoltToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### BoltToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### BoltToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### BoltToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### BoltToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### BoltToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### BoltToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### BoltToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### BoltToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### BoltToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### BoltToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### BoltToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### BoltToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### BoltToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### BoltToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### BoltToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### BoltToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### BoltToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
