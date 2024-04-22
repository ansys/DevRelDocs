<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults"></a>

<a id="the-fracturetoolresults-package"></a>

# The `FractureToolResults` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`FractureTool`](FractureTool.md#FractureTool)                                                             | Defines a FractureTool.                     |
| [`FractureToolResult`](FractureToolResult.md#FractureToolResult)                                           | Defines a FractureToolResult.               |
| [`FractureCrackExtensionProbe`](FractureCrackExtensionProbe.md#FractureCrackExtensionProbe)                | Defines a FractureCrackExtensionProbe.      |
| [`FractureEquivalentSIFSRangeProbe`](FractureEquivalentSIFSRangeProbe.md#FractureEquivalentSIFSRangeProbe) | Defines a FractureEquivalentSIFSRangeProbe. |
| [`FractureJINTProbe`](FractureJINTProbe.md#FractureJINTProbe)                                              | Defines a FractureJINTProbe.                |
| [`FractureSIFSProbe`](FractureSIFSProbe.md#FractureSIFSProbe)                                              | Defines a FractureSIFSProbe.                |
| [`FractureToolProbe`](FractureToolProbe.md#FractureToolProbe)                                              | Defines a FractureToolProbe.                |
| [`FractureTotalNumberOfCyclesProbe`](FractureTotalNumberOfCyclesProbe.md#FractureTotalNumberOfCyclesProbe) | Defines a FractureTotalNumberOfCyclesProbe. |

<a id="description"></a>

## Description

FractureToolResults subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="FractureToolResults.FractureTool"></a>

### *class* FractureToolResults.FractureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureTool.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddSIFSK1`](#FractureToolResults.AddSIFSK1)                                     | Creates a new FractureSIFSK1                                                      |
| [`AddSIFSK2`](#FractureToolResults.AddSIFSK2)                                     | Creates a new FractureSIFSK2                                                      |
| [`AddSIFSK3`](#FractureToolResults.AddSIFSK3)                                     | Creates a new FractureSIFSK3                                                      |
| [`AddJINT`](#FractureToolResults.AddJINT)                                         | Creates a new FractureJINT                                                        |
| [`AddMaterialForceX`](#FractureToolResults.AddMaterialForceX)                     | Creates a new FractureMaterialForceX                                              |
| [`AddMaterialForceY`](#FractureToolResults.AddMaterialForceY)                     | Creates a new FractureMaterialForceY                                              |
| [`AddMaterialForceZ`](#FractureToolResults.AddMaterialForceZ)                     | Creates a new FractureMaterialForceZ                                              |
| [`AddTSTRESS`](#FractureToolResults.AddTSTRESS)                                   | Creates a new FractureTSTRESS                                                     |
| [`AddVCCTG1`](#FractureToolResults.AddVCCTG1)                                     | Creates a new FractureVCCTG1                                                      |
| [`AddVCCTG2`](#FractureToolResults.AddVCCTG2)                                     | Creates a new FractureVCCTG2                                                      |
| [`AddVCCTG3`](#FractureToolResults.AddVCCTG3)                                     | Creates a new FractureVCCTG3                                                      |
| [`AddVCCTGT`](#FractureToolResults.AddVCCTGT)                                     | Creates a new FractureVCCTGT                                                      |
| [`AddCStarIntegral`](#FractureToolResults.AddCStarIntegral)                       | Creates a new FractureCSTAR                                                       |
| [`AddEquivalentSIFSRange`](#FractureToolResults.AddEquivalentSIFSRange)           | Creates a new FractureEquivalentSIFSRange                                         |
| [`EvaluateAllResults`](#id436)                                                    | Run the EvaluateAllResults action.                                                |
| [`AddCrackExtensionProbe`](#FractureToolResults.AddCrackExtensionProbe)           | Creates a new FractureCrackExtensionProbe                                         |
| [`AddEquivalentSIFSRangeProbe`](#FractureToolResults.AddEquivalentSIFSRangeProbe) | Creates a new FractureEquivalentSIFSRangeProbe                                    |
| [`AddJINTProbe`](#FractureToolResults.AddJINTProbe)                               | Creates a new FractureJINTProbe                                                   |
| [`AddSIFSK1Probe`](#FractureToolResults.AddSIFSK1Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK2Probe`](#FractureToolResults.AddSIFSK2Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK3Probe`](#FractureToolResults.AddSIFSK3Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddNumberOfCyclesProbe`](#FractureToolResults.AddNumberOfCyclesProbe)           | Creates a new FractureTotalNumberOfCyclesProbe                                    |
| [`Delete`](#id439)                                                                | Run the Delete action.                                                            |
| [`GetChildren`](#id441)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)                                                            | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                                                              | Creates a new child Image.                                                        |
| [`Activate`](#id445)                                                              | Activate the current object.                                                      |
| [`CopyTo`](#id446)                                                                | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)                                                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448)                                               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)                                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)                                                        | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)                                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)                                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)                                                          | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)                                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MultipleCracksSelection`](#FractureToolResults.MultipleCracksSelection)                                                 | Get/Set multiple cracks to Fracture tool                      |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`CrackFrontNumber`](#id7)                                                                                                | Gets or sets the CrackFrontNumber.                            |
| [`CrackSelectionMode`](#FractureToolResults.CrackSelectionMode)                                                           | Gets or sets the CrackSelectionMode.                          |
| [`ScopingMethod`](#id6)                                                                                                   | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                  |
| [`CrackSelection`](#FractureToolResults.CrackSelection)                                                                   | Gets or sets the CrackSelection.                              |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                    |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                           |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureTool
```

<a id="property-detail"></a>

## Property detail

<a id="FractureToolResults.MultipleCracksSelection"></a>

### *property* FractureToolResults.MultipleCracksSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#GenericCrack)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get/Set multiple cracks to Fracture tool

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.InternalObject"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CrackFrontNumber"></a>

### *property* FractureToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CrackSelectionMode"></a>

### *property* FractureToolResults.CrackSelectionMode *: [Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType](../../../../../Mechanical/DataModel/Enums/CrackSelectionModeType.md#CrackSelectionModeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ScopingMethod"></a>

### *property* FractureToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.FractureToolScopeType](../../../../../Mechanical/DataModel/Enums/FractureToolScopeType.md#FractureToolScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Suppressed"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CrackSelection"></a>

### *property* FractureToolResults.CrackSelection *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.DataModelObjectCategory"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Children"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Comments"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Figures"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Images"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Properties"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.VisibleProperties"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureToolResults.AddSIFSK1"></a>

### FractureToolResults.AddSIFSK1()

Creates a new FractureSIFSK1

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddSIFSK2"></a>

### FractureToolResults.AddSIFSK2()

Creates a new FractureSIFSK2

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddSIFSK3"></a>

### FractureToolResults.AddSIFSK3()

Creates a new FractureSIFSK3

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddJINT"></a>

### FractureToolResults.AddJINT()

Creates a new FractureJINT

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddMaterialForceX"></a>

### FractureToolResults.AddMaterialForceX()

Creates a new FractureMaterialForceX

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddMaterialForceY"></a>

### FractureToolResults.AddMaterialForceY()

Creates a new FractureMaterialForceY

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddMaterialForceZ"></a>

### FractureToolResults.AddMaterialForceZ()

Creates a new FractureMaterialForceZ

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddTSTRESS"></a>

### FractureToolResults.AddTSTRESS()

Creates a new FractureTSTRESS

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddVCCTG1"></a>

### FractureToolResults.AddVCCTG1()

Creates a new FractureVCCTG1

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddVCCTG2"></a>

### FractureToolResults.AddVCCTG2()

Creates a new FractureVCCTG2

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddVCCTG3"></a>

### FractureToolResults.AddVCCTG3()

Creates a new FractureVCCTG3

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddVCCTGT"></a>

### FractureToolResults.AddVCCTGT()

Creates a new FractureVCCTGT

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddCStarIntegral"></a>

### FractureToolResults.AddCStarIntegral()

Creates a new FractureCSTAR

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddEquivalentSIFSRange"></a>

### FractureToolResults.AddEquivalentSIFSRange()

Creates a new FractureEquivalentSIFSRange

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.EvaluateAllResults"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddCrackExtensionProbe"></a>

### FractureToolResults.AddCrackExtensionProbe()

Creates a new FractureCrackExtensionProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddEquivalentSIFSRangeProbe"></a>

### FractureToolResults.AddEquivalentSIFSRangeProbe()

Creates a new FractureEquivalentSIFSRangeProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddJINTProbe"></a>

### FractureToolResults.AddJINTProbe()

Creates a new FractureJINTProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddSIFSK1Probe"></a>

### FractureToolResults.AddSIFSK1Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddSIFSK2Probe"></a>

### FractureToolResults.AddSIFSK2Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddSIFSK3Probe"></a>

### FractureToolResults.AddSIFSK3Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddNumberOfCyclesProbe"></a>

### FractureToolResults.AddNumberOfCyclesProbe()

Creates a new FractureTotalNumberOfCyclesProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Delete"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GetChildren"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddComment"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddFigure"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddImage"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Activate"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CopyTo"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Duplicate"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GroupAllSimilarChildren"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GroupSimilarObjects"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.PropertyByName"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.PropertyByAPIName"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CreateParameter"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GetParameter"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.RemoveParameter"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureToolResult"></a>

### *class* FractureToolResults.FractureToolResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureToolResult.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#id434)                                            | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#id436)                                            | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FractureToolResults.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FractureToolResults.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#id433)                                               | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#id435)                                       | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FractureToolResults.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FractureToolResults.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#id452)                                               | CreateParameter method.                                                           |
| [`AddAlert`](#FractureToolResults.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FractureToolResults.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#id438)                                       | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                                                        | Run the Delete action.                                                            |
| [`GetChildren`](#id441)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)                                                    | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)                                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                                                      | Creates a new child Image.                                                        |
| [`Activate`](#id445)                                                      | Activate the current object.                                                      |
| [`CopyTo`](#id446)                                                        | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)                                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448)                                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)                                           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)                                                | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)                                             | Get a property by its API name.                                                   |
| [`GetParameter`](#id453)                                                  | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)                                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Mode`](#FractureToolResults.Mode)                                                                                       | Gets or sets the Mode.                                                 |
| [`FractureResultType`](#FractureToolResults.FractureResultType)                                                           | Gets or sets the FractureResultType.                                   |
| [`FractureResultSubType`](#FractureToolResults.FractureResultSubType)                                                     | Gets or sets the FractureResultSubType.                                |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                        |
| [`ActiveContourEnd`](#FractureToolResults.ActiveContourEnd)                                                               | Gets or sets the ActiveContourEnd.                                     |
| [`ActiveContourStart`](#FractureToolResults.ActiveContourStart)                                                           | Gets or sets the ActiveContourStart.                                   |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#FractureToolResults.PlotData)                                                                               | Gets the result table.                                                 |
| [`Location`](#FractureToolResults.Location)                                                                               | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FractureToolResults.TimeForMinimumOfMinimumValues)                                     | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FractureToolResults.TimeForMinimumOfMaximumValues)                                     | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FractureToolResults.LoadStepForMinimumOfMinimumValues)                             | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FractureToolResults.LoadStepForMinimumOfMaximumValues)                             | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FractureToolResults.TimeForMaximumOfMinimumValues)                                     | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FractureToolResults.TimeForMaximumOfMaximumValues)                                     | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FractureToolResults.LoadStepForMaximumOfMinimumValues)                             | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FractureToolResults.LoadStepForMaximumOfMaximumValues)                             | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#id6)                                                                                                   | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FractureToolResults.SetNumber)                                                                             | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FractureToolResults.CombinationNumber)                                                             | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FractureToolResults.SolutionCombinationDriver)                                             | Gets or sets the SolutionCombinationDriver.                            |
| [`Surface`](../../Surface.md#Surface)                                                                                     | Surface property.                                                      |
| [`CrackFrontNumber`](#id7)                                                                                                | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FractureToolResults.GlobalIDs)                                                                             | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FractureToolResults.Identifier)                                                                           | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                              |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FractureToolResults.MaximumOccursOn)                                                                 | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FractureToolResults.MinimumOccursOn)                                                                 | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FractureToolResults.SolverComponentIDs)                                                           | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                      |
| [`Average`](#FractureToolResults.Average)                                                                                 | Gets the Average.                                                      |
| [`Maximum`](#FractureToolResults.Maximum)                                                                                 | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FractureToolResults.MaximumOfMaximumOverTime)                                               | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FractureToolResults.MaximumOfMinimumOverTime)                                               | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FractureToolResults.Minimum)                                                                                 | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FractureToolResults.MinimumOfMaximumOverTime)                                               | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FractureToolResults.MinimumOfMinimumOverTime)                                               | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                         |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FractureToolResults.DisplayOption)                                                                     | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FractureToolResults.By)                                                                                           | Gets or sets the By.                                                   |
| [`ItemType`](#FractureToolResults.ItemType)                                                                               | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FractureToolResults.CalculateTimeHistory)                                                       | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                           |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                             |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                  |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                   |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                    |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.          |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureToolResult
```

<a id="id3"></a>

## Property detail

<a id="FractureToolResults.Mode"></a>

### *property* FractureToolResults.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureResultType"></a>

### *property* FractureToolResults.FractureResultType *: Ansys.Mechanical.DataModel.Enums.FractureResultType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureResultType.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureResultSubType"></a>

### *property* FractureToolResults.FractureResultSubType *: Ansys.Mechanical.DataModel.Enums.FractureResultSubType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureResultSubType.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ActiveContour"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ActiveContourEnd"></a>

### *property* FractureToolResults.ActiveContourEnd *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContourEnd.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ActiveContourStart"></a>

### *property* FractureToolResults.ActiveContourStart *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContourStart.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SolverID"></a>

### *property* FractureToolResults.SolverID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.PlotData"></a>

### *property* FractureToolResults.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Location"></a>

### *property* FractureToolResults.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.TimeForMinimumOfMinimumValues"></a>

### *property* FractureToolResults.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.TimeForMinimumOfMaximumValues"></a>

### *property* FractureToolResults.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LoadStepForMinimumOfMinimumValues"></a>

### *property* FractureToolResults.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LoadStepForMinimumOfMaximumValues"></a>

### *property* FractureToolResults.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.TimeForMaximumOfMinimumValues"></a>

### *property* FractureToolResults.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.TimeForMaximumOfMaximumValues"></a>

### *property* FractureToolResults.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LoadStepForMaximumOfMinimumValues"></a>

### *property* FractureToolResults.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LoadStepForMaximumOfMaximumValues"></a>

### *property* FractureToolResults.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.IsSolved"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CoordinateSystem"></a>

### *property* FractureToolResults.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* FractureToolResults.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SetNumber"></a>

### *property* FractureToolResults.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CombinationNumber"></a>

### *property* FractureToolResults.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SolutionCombinationDriver"></a>

### *property* FractureToolResults.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Surface"></a>

### *property* FractureToolResults.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* FractureToolResults.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GlobalIDs"></a>

### *property* FractureToolResults.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Identifier"></a>

### *property* FractureToolResults.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.IterationNumber"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LoadStep"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumOccursOn"></a>

### *property* FractureToolResults.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumOccursOn"></a>

### *property* FractureToolResults.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LoadStepNumber"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SolverComponentIDs"></a>

### *property* FractureToolResults.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Substep"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Average"></a>

### *property* FractureToolResults.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Maximum"></a>

### *property* FractureToolResults.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumOfMaximumOverTime"></a>

### *property* FractureToolResults.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumOfMinimumOverTime"></a>

### *property* FractureToolResults.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Minimum"></a>

### *property* FractureToolResults.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumOfMaximumOverTime"></a>

### *property* FractureToolResults.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumOfMinimumOverTime"></a>

### *property* FractureToolResults.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Time"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.DisplayTime"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GraphControlsXAxis"></a>

### *property* FractureToolResults.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.DisplayOption"></a>

### *property* FractureToolResults.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.DpfEvaluation"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.By"></a>

### *property* FractureToolResults.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ItemType"></a>

### *property* FractureToolResults.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CalculateTimeHistory"></a>

### *property* FractureToolResults.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

## Method detail

<a id="FractureToolResults.ClearGeneratedData"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FetchRemoteResults"></a>

### FractureToolResults.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ExportToTextFile"></a>

### FractureToolResults.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ExportAnimation"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.DuplicateWithoutResults"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CreateResultsAtAllSets"></a>

### FractureToolResults.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.PromoteToNamedSelection"></a>

### FractureToolResults.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### FractureToolResults.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddAlert"></a>

### FractureToolResults.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.AddConvergence"></a>

### FractureToolResults.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.RenameBasedOnDefinition"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureCrackExtensionProbe"></a>

### *class* FractureToolResults.FractureCrackExtensionProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureCrackExtensionProbe.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id433)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id434)      | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#id435) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#id436)      | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#id437)         | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#id438) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                | Creates a new child Image.                                                        |
| [`Activate`](#id445)                | Activate the current object.                                                      |
| [`CopyTo`](#id446)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#id382)                                                                                              | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#id383)                                                                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#id384)                                                                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#id387)                                                                                         | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#id389)                                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#id390)                                                                                                | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#id391)                                                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#id392)                                                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#id393)                                                                                    | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#id394)                                                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#id395)                                                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#id396)                                                                                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#id397)                                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#id398)                                                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#id399)                                                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#id401)                                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#id407)                                                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#id408)                                                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#id409)                                                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#id410)                                                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#id411)                                                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#id412)                                                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#id413)                                                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#id414)                                                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#id416)                                                                                                         | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#id417)                                                                                                         | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#id418)                                                                                                         | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#id419)                                                                                                         | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#id420)                                                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#id421)                                                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#id422)                                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="id34"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureCrackExtensionProbe
```

<a id="id35"></a>

## Property detail

<a id="id36"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ResultProbeValue"></a>

### *property* FractureToolResults.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumValueOverTime"></a>

### *property* FractureToolResults.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumValueOverTime"></a>

### *property* FractureToolResults.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CrackLengthPercentage"></a>

### *property* FractureToolResults.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* FractureToolResults.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Summation"></a>

### *property* FractureToolResults.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.LocationMethod"></a>

### *property* FractureToolResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.GeometryLocation"></a>

### *property* FractureToolResults.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.CoordinateSystemSelection"></a>

### *property* FractureToolResults.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.BoundaryConditionSelection"></a>

### *property* FractureToolResults.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ContactRegionSelection"></a>

### *property* FractureToolResults.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.RemotePointSelection"></a>

### *property* FractureToolResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.BeamSelection"></a>

### *property* FractureToolResults.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MeshConnectionSelection"></a>

### *property* FractureToolResults.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SurfaceSelection"></a>

### *property* FractureToolResults.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SpringSelection"></a>

### *property* FractureToolResults.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Orientation"></a>

### *property* FractureToolResults.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id43"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumTotal"></a>

### *property* FractureToolResults.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumXAxis"></a>

### *property* FractureToolResults.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumYAxis"></a>

### *property* FractureToolResults.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MaximumZAxis"></a>

### *property* FractureToolResults.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumTotal"></a>

### *property* FractureToolResults.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumXAxis"></a>

### *property* FractureToolResults.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumYAxis"></a>

### *property* FractureToolResults.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.MinimumZAxis"></a>

### *property* FractureToolResults.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Total"></a>

### *property* FractureToolResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.XAxis"></a>

### *property* FractureToolResults.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.YAxis"></a>

### *property* FractureToolResults.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ZAxis"></a>

### *property* FractureToolResults.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.ResultSelection"></a>

### *property* FractureToolResults.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SpatialResolution"></a>

### *property* FractureToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.Type"></a>

### *property* FractureToolResults.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

## Method detail

<a id="id57"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.SnapToMeshNodes"></a>

### FractureToolResults.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id72"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id73"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureEquivalentSIFSRangeProbe"></a>

### *class* FractureToolResults.FractureEquivalentSIFSRangeProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureEquivalentSIFSRangeProbe.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id433)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id434)      | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#id435) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#id436)      | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#id437)         | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#id438) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                | Creates a new child Image.                                                        |
| [`Activate`](#id445)                | Activate the current object.                                                      |
| [`CopyTo`](#id446)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#id382)                                                                                              | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#id383)                                                                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#id384)                                                                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#id387)                                                                                         | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#id389)                                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#id390)                                                                                                | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#id391)                                                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#id392)                                                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#id393)                                                                                    | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#id394)                                                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#id395)                                                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#id396)                                                                                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#id397)                                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#id398)                                                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#id399)                                                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#id401)                                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#id407)                                                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#id408)                                                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#id409)                                                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#id410)                                                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#id411)                                                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#id412)                                                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#id413)                                                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#id414)                                                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#id416)                                                                                                         | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#id417)                                                                                                         | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#id418)                                                                                                         | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#id419)                                                                                                         | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#id420)                                                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#id421)                                                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#id422)                                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="id78"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureEquivalentSIFSRangeProbe
```

<a id="id79"></a>

## Property detail

<a id="id80"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* FractureToolResults.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* FractureToolResults.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* FractureToolResults.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* FractureToolResults.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### *property* FractureToolResults.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### *property* FractureToolResults.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### *property* FractureToolResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* FractureToolResults.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* FractureToolResults.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* FractureToolResults.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* FractureToolResults.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### *property* FractureToolResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### *property* FractureToolResults.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### *property* FractureToolResults.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* FractureToolResults.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* FractureToolResults.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### *property* FractureToolResults.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* FractureToolResults.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* FractureToolResults.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* FractureToolResults.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* FractureToolResults.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* FractureToolResults.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* FractureToolResults.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* FractureToolResults.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* FractureToolResults.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* FractureToolResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* FractureToolResults.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* FractureToolResults.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* FractureToolResults.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* FractureToolResults.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* FractureToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* FractureToolResults.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

## Method detail

<a id="id132"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### FractureToolResults.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureJINTProbe"></a>

### *class* FractureToolResults.FractureJINTProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureJINTProbe.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id433)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id434)      | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#id435) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#id436)      | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#id437)         | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#id438) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                | Creates a new child Image.                                                        |
| [`Activate`](#id445)                | Activate the current object.                                                      |
| [`CopyTo`](#id446)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#id382)                                                                                              | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#id383)                                                                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#id384)                                                                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#id387)                                                                                         | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#id389)                                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#id390)                                                                                                | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#id391)                                                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#id392)                                                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#id393)                                                                                    | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#id394)                                                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#id395)                                                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#id396)                                                                                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#id397)                                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#id398)                                                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#id399)                                                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#id401)                                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#id407)                                                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#id408)                                                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#id409)                                                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#id410)                                                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#id411)                                                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#id412)                                                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#id413)                                                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#id414)                                                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#id416)                                                                                                         | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#id417)                                                                                                         | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#id418)                                                                                                         | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#id419)                                                                                                         | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#id420)                                                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#id421)                                                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#id422)                                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="id154"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureJINTProbe
```

<a id="id155"></a>

## Property detail

<a id="id156"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* FractureToolResults.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* FractureToolResults.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* FractureToolResults.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* FractureToolResults.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* FractureToolResults.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* FractureToolResults.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* FractureToolResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* FractureToolResults.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* FractureToolResults.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* FractureToolResults.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* FractureToolResults.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* FractureToolResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* FractureToolResults.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* FractureToolResults.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* FractureToolResults.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* FractureToolResults.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* FractureToolResults.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* FractureToolResults.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### *property* FractureToolResults.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### *property* FractureToolResults.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### *property* FractureToolResults.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* FractureToolResults.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### *property* FractureToolResults.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### *property* FractureToolResults.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* FractureToolResults.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### *property* FractureToolResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### *property* FractureToolResults.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### *property* FractureToolResults.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* FractureToolResults.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### *property* FractureToolResults.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### *property* FractureToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### *property* FractureToolResults.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id200"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id201"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

## Method detail

<a id="id208"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### FractureToolResults.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id228"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureSIFSProbe"></a>

### *class* FractureToolResults.FractureSIFSProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureSIFSProbe.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id433)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id434)      | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#id435) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#id436)      | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#id437)         | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#id438) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                | Creates a new child Image.                                                        |
| [`Activate`](#id445)                | Activate the current object.                                                      |
| [`CopyTo`](#id446)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#id382)                                                                                              | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#id383)                                                                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#id384)                                                                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`FractureProbeSubType`](#FractureToolResults.FractureProbeSubType)                                                       | Gets or sets the FractureProbeSubType.                                                                                                                                     |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#id387)                                                                                         | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#id389)                                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#id390)                                                                                                | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#id391)                                                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#id392)                                                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#id393)                                                                                    | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#id394)                                                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#id395)                                                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#id396)                                                                                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#id397)                                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#id398)                                                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#id399)                                                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#id401)                                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#id407)                                                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#id408)                                                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#id409)                                                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#id410)                                                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#id411)                                                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#id412)                                                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#id413)                                                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#id414)                                                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#id416)                                                                                                         | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#id417)                                                                                                         | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#id418)                                                                                                         | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#id419)                                                                                                         | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#id420)                                                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#id421)                                                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#id422)                                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="id230"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureSIFSProbe
```

<a id="id231"></a>

## Property detail

<a id="id232"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* FractureToolResults.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* FractureToolResults.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* FractureToolResults.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureProbeSubType"></a>

### *property* FractureToolResults.FractureProbeSubType *: [Ansys.Mechanical.DataModel.Enums.FractureSIFSProbeSubType](../../../../../Mechanical/DataModel/Enums/FractureSIFSProbeSubType.md#FractureSIFSProbeSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureProbeSubType.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* FractureToolResults.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* FractureToolResults.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### *property* FractureToolResults.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### *property* FractureToolResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### *property* FractureToolResults.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### *property* FractureToolResults.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### *property* FractureToolResults.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="id245"></a>

### *property* FractureToolResults.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id246"></a>

### *property* FractureToolResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id247"></a>

### *property* FractureToolResults.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="id248"></a>

### *property* FractureToolResults.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id249"></a>

### *property* FractureToolResults.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id250"></a>

### *property* FractureToolResults.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="id251"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id252"></a>

### *property* FractureToolResults.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id253"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id254"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id255"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id256"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id257"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id258"></a>

### *property* FractureToolResults.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id259"></a>

### *property* FractureToolResults.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id260"></a>

### *property* FractureToolResults.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id261"></a>

### *property* FractureToolResults.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id262"></a>

### *property* FractureToolResults.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id263"></a>

### *property* FractureToolResults.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id264"></a>

### *property* FractureToolResults.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id265"></a>

### *property* FractureToolResults.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id266"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id267"></a>

### *property* FractureToolResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id268"></a>

### *property* FractureToolResults.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="id269"></a>

### *property* FractureToolResults.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="id270"></a>

### *property* FractureToolResults.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id271"></a>

### *property* FractureToolResults.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="id272"></a>

### *property* FractureToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id273"></a>

### *property* FractureToolResults.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id274"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id275"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id276"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id277"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id278"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id279"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id280"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id281"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id282"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id283"></a>

## Method detail

<a id="id284"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id285"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id286"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id287"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id288"></a>

### FractureToolResults.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="id289"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id290"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id291"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id292"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id293"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id294"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id295"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id296"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id297"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id298"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id299"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id300"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id301"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id302"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id303"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id304"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id305"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureToolProbe"></a>

### *class* FractureToolResults.FractureToolProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureToolProbe.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id433)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id434)      | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#id435) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#id436)      | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#id437)         | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#id438) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                | Creates a new child Image.                                                        |
| [`Activate`](#id445)                | Activate the current object.                                                      |
| [`CopyTo`](#id446)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#id387)                                                                                         | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                                                                                                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#id389)                                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#id390)                                                                                                | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#id391)                                                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#id392)                                                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#id393)                                                                                    | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#id394)                                                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#id395)                                                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#id396)                                                                                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#id397)                                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#id398)                                                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#id399)                                                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#id401)                                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#id407)                                                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#id408)                                                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#id409)                                                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#id410)                                                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#id411)                                                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#id412)                                                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#id413)                                                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#id414)                                                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#id416)                                                                                                         | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#id417)                                                                                                         | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#id418)                                                                                                         | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#id419)                                                                                                         | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#id420)                                                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#id421)                                                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#id422)                                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="id306"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureToolProbe
```

<a id="id307"></a>

## Property detail

<a id="id308"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id309"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="id310"></a>

### *property* FractureToolResults.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="id311"></a>

### *property* FractureToolResults.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="id312"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id313"></a>

### *property* FractureToolResults.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="id314"></a>

### *property* FractureToolResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id315"></a>

### *property* FractureToolResults.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="id316"></a>

### *property* FractureToolResults.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="id317"></a>

### *property* FractureToolResults.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="id318"></a>

### *property* FractureToolResults.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id319"></a>

### *property* FractureToolResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id320"></a>

### *property* FractureToolResults.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="id321"></a>

### *property* FractureToolResults.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id322"></a>

### *property* FractureToolResults.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id323"></a>

### *property* FractureToolResults.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="id324"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id325"></a>

### *property* FractureToolResults.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id326"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id327"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id328"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id329"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id330"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id331"></a>

### *property* FractureToolResults.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id332"></a>

### *property* FractureToolResults.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id333"></a>

### *property* FractureToolResults.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id334"></a>

### *property* FractureToolResults.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id335"></a>

### *property* FractureToolResults.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id336"></a>

### *property* FractureToolResults.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id337"></a>

### *property* FractureToolResults.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id338"></a>

### *property* FractureToolResults.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id339"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id340"></a>

### *property* FractureToolResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id341"></a>

### *property* FractureToolResults.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="id342"></a>

### *property* FractureToolResults.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="id343"></a>

### *property* FractureToolResults.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id344"></a>

### *property* FractureToolResults.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="id345"></a>

### *property* FractureToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id346"></a>

### *property* FractureToolResults.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id347"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id348"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id349"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id350"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id351"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id352"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id353"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id354"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id355"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id356"></a>

## Method detail

<a id="id357"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id358"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id359"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id360"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id361"></a>

### FractureToolResults.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="id362"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id363"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id364"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id365"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id366"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id367"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id368"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id369"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id370"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id371"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id372"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id373"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id374"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id375"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id376"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id377"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id378"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureToolResults.FractureTotalNumberOfCyclesProbe"></a>

### *class* FractureToolResults.FractureTotalNumberOfCyclesProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureTotalNumberOfCyclesProbe.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#id433)         | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#id434)      | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#id435) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#id436)      | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#id437)         | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#id438) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#id439)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id441)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id442)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id443)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id444)                | Creates a new child Image.                                                        |
| [`Activate`](#id445)                | Activate the current object.                                                      |
| [`CopyTo`](#id446)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id447)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id448) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id449)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id450)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id451)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id452)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id453)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id454)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#id382)                                                                                              | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#id383)                                                                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#id384)                                                                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#id386)                                                                                                 | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#id387)                                                                                         | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#id388)                                                                                                      | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#id389)                                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#id390)                                                                                                | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#id391)                                                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#id392)                                                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#id393)                                                                                    | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#id394)                                                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#id395)                                                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#id396)                                                                                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#id397)                                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#id398)                                                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#id399)                                                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#id400)                                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#id401)                                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#id402)                                                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#id403)                                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#id404)                                                                                                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#id405)                                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#id406)                                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#id407)                                                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#id408)                                                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#id409)                                                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#id410)                                                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#id411)                                                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#id412)                                                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#id413)                                                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#id414)                                                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#id415)                                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#id416)                                                                                                         | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#id417)                                                                                                         | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#id418)                                                                                                         | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#id419)                                                                                                         | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#id420)                                                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#id421)                                                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#id422)                                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#id423)                                                                                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#id424)                                                                                                    | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#id425)                                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#id426)                                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#id427)                                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#id428)                                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id429)                                                                                                | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#id430)                                                                                                    | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#id431)                                                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="id379"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureTotalNumberOfCyclesProbe
```

<a id="id380"></a>

## Property detail

<a id="id381"></a>

### *property* FractureToolResults.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id382"></a>

### *property* FractureToolResults.ResultProbeValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="id383"></a>

### *property* FractureToolResults.MaximumValueOverTime *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id384"></a>

### *property* FractureToolResults.MinimumValueOverTime *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="id385"></a>

### *property* FractureToolResults.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id386"></a>

### *property* FractureToolResults.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="id387"></a>

### *property* FractureToolResults.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="id388"></a>

### *property* FractureToolResults.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="id389"></a>

### *property* FractureToolResults.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="id390"></a>

### *property* FractureToolResults.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="id391"></a>

### *property* FractureToolResults.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="id392"></a>

### *property* FractureToolResults.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="id393"></a>

### *property* FractureToolResults.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="id394"></a>

### *property* FractureToolResults.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id395"></a>

### *property* FractureToolResults.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="id396"></a>

### *property* FractureToolResults.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="id397"></a>

### *property* FractureToolResults.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id398"></a>

### *property* FractureToolResults.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="id399"></a>

### *property* FractureToolResults.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="id400"></a>

### *property* FractureToolResults.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="id401"></a>

### *property* FractureToolResults.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="id402"></a>

### *property* FractureToolResults.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="id403"></a>

### *property* FractureToolResults.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="id404"></a>

### *property* FractureToolResults.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="id405"></a>

### *property* FractureToolResults.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="id406"></a>

### *property* FractureToolResults.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="id407"></a>

### *property* FractureToolResults.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id408"></a>

### *property* FractureToolResults.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id409"></a>

### *property* FractureToolResults.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id410"></a>

### *property* FractureToolResults.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id411"></a>

### *property* FractureToolResults.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="id412"></a>

### *property* FractureToolResults.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="id413"></a>

### *property* FractureToolResults.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="id414"></a>

### *property* FractureToolResults.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id415"></a>

### *property* FractureToolResults.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="id416"></a>

### *property* FractureToolResults.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="id417"></a>

### *property* FractureToolResults.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="id418"></a>

### *property* FractureToolResults.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="id419"></a>

### *property* FractureToolResults.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="id420"></a>

### *property* FractureToolResults.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="id421"></a>

### *property* FractureToolResults.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="id422"></a>

### *property* FractureToolResults.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="id423"></a>

### *property* FractureToolResults.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="id424"></a>

### *property* FractureToolResults.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id425"></a>

### *property* FractureToolResults.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id426"></a>

### *property* FractureToolResults.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id427"></a>

### *property* FractureToolResults.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id428"></a>

### *property* FractureToolResults.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id429"></a>

### *property* FractureToolResults.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id430"></a>

### *property* FractureToolResults.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id431"></a>

### *property* FractureToolResults.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id432"></a>

## Method detail

<a id="id433"></a>

### FractureToolResults.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="id434"></a>

### FractureToolResults.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id435"></a>

### FractureToolResults.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="id436"></a>

### FractureToolResults.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="id437"></a>

### FractureToolResults.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="id438"></a>

### FractureToolResults.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="id439"></a>

### FractureToolResults.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id440"></a>

### FractureToolResults.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id441"></a>

### FractureToolResults.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id442"></a>

### FractureToolResults.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id443"></a>

### FractureToolResults.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id444"></a>

### FractureToolResults.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id445"></a>

### FractureToolResults.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id446"></a>

### FractureToolResults.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id447"></a>

### FractureToolResults.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id448"></a>

### FractureToolResults.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id449"></a>

### FractureToolResults.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id450"></a>

### FractureToolResults.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id451"></a>

### FractureToolResults.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id452"></a>

### FractureToolResults.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id453"></a>

### FractureToolResults.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id454"></a>

### FractureToolResults.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
