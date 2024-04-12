<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults"></a>

<a id="the-beamtoolresults-package"></a>

# The `BeamToolResults` package

<a id="summary"></a>

## Summary

### Classes

| [`BeamTool`](BeamTool.md#BeamTool)                                        | Defines a BeamTool.              |
|---------------------------------------------------------------------------|----------------------------------|
| [`BeamToolResult`](BeamToolResult.md#BeamToolResult)                      | Defines a BeamToolResult.        |
| [`DirectStress`](DirectStress.md#DirectStress)                            | Defines a DirectStress.          |
| [`MaximumBendingStress`](MaximumBendingStress.md#MaximumBendingStress)    | Defines a MaximumBendingStress.  |
| [`MaximumCombinedStress`](MaximumCombinedStress.md#MaximumCombinedStress) | Defines a MaximumCombinedStress. |
| [`MinimumBendingStress`](MinimumBendingStress.md#MinimumBendingStress)    | Defines a MinimumBendingStress.  |
| [`MinimumCombinedStress`](MinimumCombinedStress.md#MinimumCombinedStress) | Defines a MinimumCombinedStress. |

<a id="description"></a>

## Description

BeamToolResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="BeamToolResults.BeamTool"></a>

### *class* BeamToolResults.BeamTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BeamTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`EvaluateAllResults`](#id421)                                            | Run the EvaluateAllResults action.                                                |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddDirectionalDeformation`](#BeamToolResults.AddDirectionalDeformation) | Creates a new DirectionalDeformation                                              |
| [`AddDirectStress`](#BeamToolResults.AddDirectStress)                     | Creates a new DirectStress                                                        |
| [`AddMaximumBendingStress`](#BeamToolResults.AddMaximumBendingStress)     | Creates a new MaximumBendingStress                                                |
| [`AddMaximumCombinedStress`](#BeamToolResults.AddMaximumCombinedStress)   | Creates a new MaximumCombinedStress                                               |
| [`AddMinimumBendingStress`](#BeamToolResults.AddMinimumBendingStress)     | Creates a new MinimumBendingStress                                                |
| [`AddMinimumCombinedStress`](#BeamToolResults.AddMinimumCombinedStress)   | Creates a new MinimumCombinedStress                                               |
| [`AddTotalDeformation`](#BeamToolResults.AddTotalDeformation)             | Creates a new TotalDeformation                                                    |
| [`Delete`](#id432)                                                        | Run the Delete action.                                                            |
| [`GetChildren`](#id434)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)                                                    | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)                                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                                                      | Creates a new child Image.                                                        |
| [`Activate`](#id438)                                                      | Activate the current object.                                                      |
| [`CopyTo`](#id439)                                                        | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441)                                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)                                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)                                                | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)                                             | Get a property by its API name.                                                   |
| [`CreateParameter`](#id428)                                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id445)                                                  | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)                                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#id370)                                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id412)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id413)                                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#id414)                                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#id415)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id416)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id417)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id418)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import BeamTool
```

<a id="property-detail"></a>

## Property detail

<a id="BeamToolResults.InternalObject"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Location"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.DataModelObjectCategory"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Children"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Comments"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Figures"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Images"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Properties"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.VisibleProperties"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BeamToolResults.EvaluateAllResults"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddDirectionalDeformation"></a>

### BeamToolResults.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddDirectStress"></a>

### BeamToolResults.AddDirectStress()

Creates a new DirectStress

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddMaximumBendingStress"></a>

### BeamToolResults.AddMaximumBendingStress()

Creates a new MaximumBendingStress

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddMaximumCombinedStress"></a>

### BeamToolResults.AddMaximumCombinedStress()

Creates a new MaximumCombinedStress

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddMinimumBendingStress"></a>

### BeamToolResults.AddMinimumBendingStress()

Creates a new MinimumBendingStress

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddMinimumCombinedStress"></a>

### BeamToolResults.AddMinimumCombinedStress()

Creates a new MinimumCombinedStress

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddTotalDeformation"></a>

### BeamToolResults.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Delete"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.GetChildren"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddComment"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddFigure"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddImage"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Activate"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CopyTo"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Duplicate"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.GroupAllSimilarChildren"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.GroupSimilarObjects"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.PropertyByName"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.PropertyByAPIName"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CreateParameter"></a>

### BeamToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.GetParameter"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.RemoveParameter"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.BeamToolResult"></a>

### *class* BeamToolResults.BeamToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BeamToolResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id420)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id421)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id422)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id423)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id424)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id425) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id426)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id427) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id428)         | CreateParameter method.                                                           |
| [`AddAlert`](#id429)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id430)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id431) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id432)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                | Creates a new child Image.                                                        |
| [`Activate`](#id438)                | Activate the current object.                                                      |
| [`CopyTo`](#id439)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id445)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#id369)                                                                                                         | Gets the result table.                                                 |
| [`Location`](#id370)                                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id371)                                                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id372)                                                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id373)                                                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id374)                                                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id375)                                                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id376)                                                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id377)                                                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id378)                                                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id379)                                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id381)                                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id382)                                                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id383)                                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id384)                                                                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`CrackFrontNumber`](#id386)                                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id387)                                                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id388)                                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id389)                                                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#id390)                                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id391)                                                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id392)                                                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id393)                                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id394)                                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id395)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#id396)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#id397)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id398)                                                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id399)                                                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id400)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id401)                                                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id402)                                                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id403)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#id404)                                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id406)                                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id407)                                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id408)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#id409)                                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id410)                                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id411)                                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id412)                                                                                                         | Gets the list of children.                                             |
| [`Comments`](#id413)                                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#id414)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#id415)                                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id417)                                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id418)                                                                                                | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import BeamToolResult
```

<a id="id3"></a>

## Property detail

<a id="id4"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.BeamToolStressResultType"></a>

### *property* BeamToolResults.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.PlotData"></a>

### *property* BeamToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.TimeForMinimumOfMinimumValues"></a>

### *property* BeamToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.TimeForMinimumOfMaximumValues"></a>

### *property* BeamToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.TimeForMaximumOfMinimumValues"></a>

### *property* BeamToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.TimeForMaximumOfMaximumValues"></a>

### *property* BeamToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.IsSolved"></a>

### *property* BeamToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CoordinateSystem"></a>

### *property* BeamToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.ScopingMethod"></a>

### *property* BeamToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.SetNumber"></a>

### *property* BeamToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CombinationNumber"></a>

### *property* BeamToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.SolutionCombinationDriver"></a>

### *property* BeamToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Surface"></a>

### *property* BeamToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CrackFrontNumber"></a>

### *property* BeamToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.GlobalIDs"></a>

### *property* BeamToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Identifier"></a>

### *property* BeamToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.IterationNumber"></a>

### *property* BeamToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.LoadStep"></a>

### *property* BeamToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MaximumOccursOn"></a>

### *property* BeamToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MinimumOccursOn"></a>

### *property* BeamToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.LoadStepNumber"></a>

### *property* BeamToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.SolverComponentIDs"></a>

### *property* BeamToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Substep"></a>

### *property* BeamToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Average"></a>

### *property* BeamToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Maximum"></a>

### *property* BeamToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MaximumOfMaximumOverTime"></a>

### *property* BeamToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MaximumOfMinimumOverTime"></a>

### *property* BeamToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Minimum"></a>

### *property* BeamToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MinimumOfMaximumOverTime"></a>

### *property* BeamToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MinimumOfMinimumOverTime"></a>

### *property* BeamToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Time"></a>

### *property* BeamToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.DisplayTime"></a>

### *property* BeamToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.GraphControlsXAxis"></a>

### *property* BeamToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.DisplayOption"></a>

### *property* BeamToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.DpfEvaluation"></a>

### *property* BeamToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.By"></a>

### *property* BeamToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.ItemType"></a>

### *property* BeamToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CalculateTimeHistory"></a>

### *property* BeamToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.Suppressed"></a>

### *property* BeamToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

## Method detail

<a id="BeamToolResults.ClearGeneratedData"></a>

### BeamToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.FetchRemoteResults"></a>

### BeamToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.ExportToTextFile"></a>

### BeamToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.ExportAnimation"></a>

### BeamToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.DuplicateWithoutResults"></a>

### BeamToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.CreateResultsAtAllSets"></a>

### BeamToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.PromoteToNamedSelection"></a>

### BeamToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### BeamToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddAlert"></a>

### BeamToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.AddConvergence"></a>

### BeamToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.RenameBasedOnDefinition"></a>

### BeamToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.DirectStress"></a>

### *class* BeamToolResults.DirectStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DirectStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id420)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id421)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id422)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id423)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id424)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id425) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id426)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id427) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id428)         | CreateParameter method.                                                           |
| [`AddAlert`](#id429)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id430)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id431) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id432)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                | Creates a new child Image.                                                        |
| [`Activate`](#id438)                | Activate the current object.                                                      |
| [`CopyTo`](#id439)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id445)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#id369)                                                                                                         | Gets the result table.                                                 |
| [`Location`](#id370)                                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id371)                                                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id372)                                                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id373)                                                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id374)                                                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id375)                                                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id376)                                                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id377)                                                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id378)                                                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id379)                                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id381)                                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id382)                                                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id383)                                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id384)                                                                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`CrackFrontNumber`](#id386)                                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id387)                                                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id388)                                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id389)                                                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#id390)                                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id391)                                                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id392)                                                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id393)                                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id394)                                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id395)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#id396)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#id397)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id398)                                                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id399)                                                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id400)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id401)                                                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id402)                                                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id403)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#id404)                                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id406)                                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id407)                                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id408)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#id409)                                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id410)                                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id411)                                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id412)                                                                                                         | Gets the list of children.                                             |
| [`Comments`](#id413)                                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#id414)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#id415)                                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id417)                                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id418)                                                                                                | Gets the list of properties that are visible for this object.          |

<a id="id32"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import DirectStress
```

<a id="id33"></a>

## Property detail

<a id="id34"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* BeamToolResults.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* BeamToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* BeamToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* BeamToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* BeamToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* BeamToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* BeamToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* BeamToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* BeamToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* BeamToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* BeamToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* BeamToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* BeamToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* BeamToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* BeamToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* BeamToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### *property* BeamToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### *property* BeamToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### *property* BeamToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* BeamToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* BeamToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### *property* BeamToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### *property* BeamToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### *property* BeamToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* BeamToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* BeamToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* BeamToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### *property* BeamToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### *property* BeamToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* BeamToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* BeamToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### *property* BeamToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### *property* BeamToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* BeamToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* BeamToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* BeamToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* BeamToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* BeamToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* BeamToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

## Method detail

<a id="id88"></a>

### BeamToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### BeamToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### BeamToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### BeamToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### BeamToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### BeamToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### BeamToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### BeamToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### BeamToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### BeamToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### BeamToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MaximumBendingStress"></a>

### *class* BeamToolResults.MaximumBendingStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumBendingStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id420)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id421)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id422)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id423)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id424)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id425) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id426)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id427) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id428)         | CreateParameter method.                                                           |
| [`AddAlert`](#id429)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id430)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id431) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id432)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                | Creates a new child Image.                                                        |
| [`Activate`](#id438)                | Activate the current object.                                                      |
| [`CopyTo`](#id439)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id445)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#id369)                                                                                                         | Gets the result table.                                                 |
| [`Location`](#id370)                                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id371)                                                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id372)                                                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id373)                                                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id374)                                                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id375)                                                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id376)                                                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id377)                                                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id378)                                                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id379)                                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id381)                                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id382)                                                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id383)                                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id384)                                                                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`CrackFrontNumber`](#id386)                                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id387)                                                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id388)                                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id389)                                                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#id390)                                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id391)                                                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id392)                                                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id393)                                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id394)                                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id395)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#id396)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#id397)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id398)                                                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id399)                                                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id400)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id401)                                                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id402)                                                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id403)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#id404)                                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id406)                                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id407)                                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id408)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#id409)                                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id410)                                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id411)                                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id412)                                                                                                         | Gets the list of children.                                             |
| [`Comments`](#id413)                                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#id414)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#id415)                                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id417)                                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id418)                                                                                                | Gets the list of properties that are visible for this object.          |

<a id="id115"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MaximumBendingStress
```

<a id="id116"></a>

## Property detail

<a id="id117"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* BeamToolResults.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* BeamToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* BeamToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* BeamToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* BeamToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* BeamToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* BeamToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* BeamToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* BeamToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* BeamToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### *property* BeamToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### *property* BeamToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* BeamToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* BeamToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* BeamToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### *property* BeamToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### *property* BeamToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### *property* BeamToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* BeamToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* BeamToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### *property* BeamToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### *property* BeamToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### *property* BeamToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* BeamToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* BeamToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### *property* BeamToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### *property* BeamToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### *property* BeamToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* BeamToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* BeamToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* BeamToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* BeamToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id156"></a>

### *property* BeamToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* BeamToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* BeamToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* BeamToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* BeamToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* BeamToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* BeamToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

## Method detail

<a id="id171"></a>

### BeamToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### BeamToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### BeamToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### BeamToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### BeamToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### BeamToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### BeamToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### BeamToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### BeamToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### BeamToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### BeamToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MaximumCombinedStress"></a>

### *class* BeamToolResults.MaximumCombinedStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaximumCombinedStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id420)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id421)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id422)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id423)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id424)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id425) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id426)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id427) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id428)         | CreateParameter method.                                                           |
| [`AddAlert`](#id429)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id430)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id431) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id432)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                | Creates a new child Image.                                                        |
| [`Activate`](#id438)                | Activate the current object.                                                      |
| [`CopyTo`](#id439)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id445)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#id369)                                                                                                         | Gets the result table.                                                 |
| [`Location`](#id370)                                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id371)                                                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id372)                                                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id373)                                                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id374)                                                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id375)                                                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id376)                                                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id377)                                                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id378)                                                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id379)                                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id381)                                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id382)                                                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id383)                                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id384)                                                                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`CrackFrontNumber`](#id386)                                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id387)                                                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id388)                                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id389)                                                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#id390)                                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id391)                                                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id392)                                                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id393)                                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id394)                                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id395)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#id396)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#id397)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id398)                                                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id399)                                                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id400)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id401)                                                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id402)                                                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id403)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#id404)                                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id406)                                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id407)                                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id408)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#id409)                                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id410)                                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id411)                                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id412)                                                                                                         | Gets the list of children.                                             |
| [`Comments`](#id413)                                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#id414)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#id415)                                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id417)                                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id418)                                                                                                | Gets the list of properties that are visible for this object.          |

<a id="id198"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MaximumCombinedStress
```

<a id="id199"></a>

## Property detail

<a id="id200"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* BeamToolResults.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* BeamToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* BeamToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* BeamToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* BeamToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* BeamToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* BeamToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* BeamToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* BeamToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* BeamToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* BeamToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* BeamToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* BeamToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* BeamToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* BeamToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* BeamToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* BeamToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* BeamToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* BeamToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* BeamToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### *property* BeamToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### *property* BeamToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* BeamToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* BeamToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* BeamToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* BeamToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* BeamToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* BeamToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* BeamToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* BeamToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* BeamToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* BeamToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* BeamToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* BeamToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* BeamToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* BeamToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* BeamToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* BeamToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* BeamToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

## Method detail

<a id="id254"></a>

### BeamToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### BeamToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### BeamToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### BeamToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### BeamToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### BeamToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### BeamToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### BeamToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### BeamToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### BeamToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### BeamToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MinimumBendingStress"></a>

### *class* BeamToolResults.MinimumBendingStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MinimumBendingStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id420)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id421)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id422)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id423)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id424)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id425) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id426)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id427) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id428)         | CreateParameter method.                                                           |
| [`AddAlert`](#id429)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id430)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id431) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id432)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                | Creates a new child Image.                                                        |
| [`Activate`](#id438)                | Activate the current object.                                                      |
| [`CopyTo`](#id439)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id445)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#id369)                                                                                                         | Gets the result table.                                                 |
| [`Location`](#id370)                                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id371)                                                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id372)                                                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id373)                                                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id374)                                                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id375)                                                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id376)                                                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id377)                                                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id378)                                                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id379)                                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id381)                                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id382)                                                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id383)                                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id384)                                                                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`CrackFrontNumber`](#id386)                                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id387)                                                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id388)                                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id389)                                                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#id390)                                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id391)                                                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id392)                                                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id393)                                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id394)                                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id395)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#id396)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#id397)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id398)                                                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id399)                                                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id400)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id401)                                                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id402)                                                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id403)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#id404)                                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id406)                                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id407)                                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id408)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#id409)                                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id410)                                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id411)                                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id412)                                                                                                         | Gets the list of children.                                             |
| [`Comments`](#id413)                                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#id414)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#id415)                                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id417)                                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id418)                                                                                                | Gets the list of properties that are visible for this object.          |

<a id="id281"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MinimumBendingStress
```

<a id="id282"></a>

## Property detail

<a id="id283"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id284"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### *property* BeamToolResults.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### *property* BeamToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### *property* BeamToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### *property* BeamToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### *property* BeamToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### *property* BeamToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### *property* BeamToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### *property* BeamToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### *property* BeamToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### *property* BeamToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### *property* BeamToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### *property* BeamToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### *property* BeamToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### *property* BeamToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### *property* BeamToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### *property* BeamToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id306"></a>

### *property* BeamToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id307"></a>

### *property* BeamToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id308"></a>

### *property* BeamToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* BeamToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* BeamToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* BeamToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* BeamToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* BeamToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* BeamToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* BeamToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* BeamToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* BeamToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* BeamToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* BeamToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* BeamToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* BeamToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* BeamToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* BeamToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* BeamToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* BeamToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* BeamToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* BeamToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* BeamToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

## Method detail

<a id="id337"></a>

### BeamToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### BeamToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### BeamToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### BeamToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### BeamToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### BeamToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### BeamToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### BeamToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### BeamToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### BeamToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### BeamToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id357"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamToolResults.MinimumCombinedStress"></a>

### *class* BeamToolResults.MinimumCombinedStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MinimumCombinedStress.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id420)      | Run the ClearGeneratedData action.                                                |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#id421)      | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#id422)      | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#id423)        | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id424)         | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id425) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#id426)  | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#id427) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id428)         | CreateParameter method.                                                           |
| [`AddAlert`](#id429)                | Creates a new Alert                                                               |
| [`AddConvergence`](#id430)          | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id431) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id432)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id434)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id435)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id436)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id437)                | Creates a new child Image.                                                        |
| [`Activate`](#id438)                | Activate the current object.                                                      |
| [`CopyTo`](#id439)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id440)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id441) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id442)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id443)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id444)       | Get a property by its API name.                                                   |
| [`GetParameter`](#id445)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id446)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)    | Gets the current DataModelObject’s category.                           |
| [`BeamToolStressResultType`](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | Gets or sets the BeamToolStressResultType.                             |
| [`PlotData`](#id369)                                                                                                         | Gets the result table.                                                 |
| [`Location`](#id370)                                                                                                         | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#id371)                                                                                    | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#id372)                                                                                    | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#id373)                                                                                | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#id374)                                                                                | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#id375)                                                                                    | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#id376)                                                                                    | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#id377)                                                                                | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#id378)                                                                                | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id379)                                                                                                         | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id381)                                                                                                    | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#id382)                                                                                                        | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#id383)                                                                                                | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#id384)                                                                                        | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                        | Surface property.                                                      |
| [`CrackFrontNumber`](#id386)                                                                                                 | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#id387)                                                                                                        | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#id388)                                                                                                       | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id389)                                                                                                  | Gets the IterationNumber.                                              |
| [`LoadStep`](#id390)                                                                                                         | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#id391)                                                                                                  | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#id392)                                                                                                  | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id393)                                                                                                   | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#id394)                                                                                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id395)                                                                                                          | Gets the Substep.                                                      |
| [`Average`](#id396)                                                                                                          | Gets the Average.                                                      |
| [`Maximum`](#id397)                                                                                                          | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#id398)                                                                                         | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#id399)                                                                                         | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#id400)                                                                                                          | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#id401)                                                                                         | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#id402)                                                                                         | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id403)                                                                                                             | Gets the Time.                                                         |
| [`DisplayTime`](#id404)                                                                                                      | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#id406)                                                                                                    | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id407)                                                                                                    | Gets or sets the DpfEvaluation.                                        |
| [`By`](#id408)                                                                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#id409)                                                                                                         | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#id410)                                                                                             | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id411)                                                                                                       | Gets or sets the Suppressed.                                           |
| [`Children`](#id412)                                                                                                         | Gets the list of children.                                             |
| [`Comments`](#id413)                                                                                                         | Gets the list of associated comments.                                  |
| [`Figures`](#id414)                                                                                                          | Gets the list of associated figures.                                   |
| [`Images`](#id415)                                                                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id416)                                                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id417)                                                                                                       | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id418)                                                                                                | Gets the list of properties that are visible for this object.          |

<a id="id364"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults import MinimumCombinedStress
```

<a id="id365"></a>

## Property detail

<a id="id366"></a>

### *property* BeamToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### *property* BeamToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### *property* BeamToolResults.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#BeamToolStressResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### *property* BeamToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### *property* BeamToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### *property* BeamToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### *property* BeamToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### *property* BeamToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### *property* BeamToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### *property* BeamToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### *property* BeamToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="id379"></a>

### *property* BeamToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id380"></a>

### *property* BeamToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id381"></a>

### *property* BeamToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* BeamToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* BeamToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* BeamToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* BeamToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* BeamToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* BeamToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* BeamToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* BeamToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* BeamToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* BeamToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* BeamToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* BeamToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* BeamToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* BeamToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* BeamToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* BeamToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* BeamToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* BeamToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* BeamToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* BeamToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* BeamToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* BeamToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* BeamToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* BeamToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* BeamToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* BeamToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* BeamToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* BeamToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* BeamToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* BeamToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* BeamToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* BeamToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* BeamToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* BeamToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* BeamToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* BeamToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* BeamToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

## Method detail

<a id="id420"></a>

### BeamToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### BeamToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### BeamToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### BeamToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### BeamToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### BeamToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### BeamToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### BeamToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### BeamToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### BeamToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### BeamToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### BeamToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

### BeamToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id433"></a>

### BeamToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### BeamToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### BeamToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### BeamToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### BeamToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### BeamToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### BeamToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### BeamToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### BeamToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### BeamToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### BeamToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### BeamToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### BeamToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### BeamToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
