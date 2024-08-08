# `FractureTool`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FractureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddSIFSK1`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddSIFSK1)                                     | Creates a new FractureSIFSK1                                                      |
| [`AddSIFSK2`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddSIFSK2)                                     | Creates a new FractureSIFSK2                                                      |
| [`AddSIFSK3`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddSIFSK3)                                     | Creates a new FractureSIFSK3                                                      |
| [`AddJINT`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddJINT)                                         | Creates a new FractureJINT                                                        |
| [`AddMaterialForceX`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddMaterialForceX)                     | Creates a new FractureMaterialForceX                                              |
| [`AddMaterialForceY`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddMaterialForceY)                     | Creates a new FractureMaterialForceY                                              |
| [`AddMaterialForceZ`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddMaterialForceZ)                     | Creates a new FractureMaterialForceZ                                              |
| [`AddTSTRESS`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddTSTRESS)                                   | Creates a new FractureTSTRESS                                                     |
| [`AddVCCTG1`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddVCCTG1)                                     | Creates a new FractureVCCTG1                                                      |
| [`AddVCCTG2`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddVCCTG2)                                     | Creates a new FractureVCCTG2                                                      |
| [`AddVCCTG3`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddVCCTG3)                                     | Creates a new FractureVCCTG3                                                      |
| [`AddVCCTGT`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddVCCTGT)                                     | Creates a new FractureVCCTGT                                                      |
| [`AddCStarIntegral`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddCStarIntegral)                       | Creates a new FractureCSTAR                                                       |
| [`AddEquivalentSIFSRange`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddEquivalentSIFSRange)           | Creates a new FractureEquivalentSIFSRange                                         |
| [`EvaluateAllResults`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.EvaluateAllResults)                   | Run the EvaluateAllResults action.                                                |
| [`AddCrackExtensionProbe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddCrackExtensionProbe)           | Creates a new FractureCrackExtensionProbe                                         |
| [`AddEquivalentSIFSRangeProbe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddEquivalentSIFSRangeProbe) | Creates a new FractureEquivalentSIFSRangeProbe                                    |
| [`AddJINTProbe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddJINTProbe)                               | Creates a new FractureJINTProbe                                                   |
| [`AddSIFSK1Probe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddSIFSK1Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK2Probe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddSIFSK2Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK3Probe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddSIFSK3Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddNumberOfCyclesProbe`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddNumberOfCyclesProbe)           | Creates a new FractureTotalNumberOfCyclesProbe                                    |
| [`Delete`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Delete)                                           | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddComment)                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddFigure)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.AddImage)                                       | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Activate)                                       | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.PropertyByName)                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MultipleCracksSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.MultipleCracksSelection)   | Get/Set multiple cracks to Fracture tool                      |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`CrackFrontNumber`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.CrackFrontNumber)                 | Gets or sets the CrackFrontNumber.                            |
| [`CrackSelectionMode`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.CrackSelectionMode)             | Gets or sets the CrackSelectionMode.                          |
| [`ScopingMethod`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.ScopingMethod)                       | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`CrackSelection`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.CrackSelection)                     | Gets or sets the CrackSelection.                              |
| [`DataModelObjectCategory`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Children)                                 | Gets the list of children.                                    |
| [`Comments`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Comments)                                 | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Figures)                                   | Gets the list of associated figures.                          |
| [`Images`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.Properties)                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/FractureToolResults/FractureTool.md#FractureTool.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FractureTool.MultipleCracksSelection"></a>

### *property* FractureTool.MultipleCracksSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericCrack)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get/Set multiple cracks to Fracture tool

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.InternalObject"></a>

### *property* FractureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackFrontNumber"></a>

### *property* FractureTool.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackSelectionMode"></a>

### *property* FractureTool.CrackSelectionMode *: [Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType](../../../../../Mechanical/DataModel/Enums/CrackSelectionModeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ScopingMethod"></a>

### *property* FractureTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.FractureToolScopeType](../../../../../Mechanical/DataModel/Enums/FractureToolScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FractureToolScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Suppressed"></a>

### *property* FractureTool.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackSelection"></a>

### *property* FractureTool.CrackSelection *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.DataModelObjectCategory"></a>

### *property* FractureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Children"></a>

### *property* FractureTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Comments"></a>

### *property* FractureTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Figures"></a>

### *property* FractureTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Images"></a>

### *property* FractureTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FractureTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Properties"></a>

### *property* FractureTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.VisibleProperties"></a>

### *property* FractureTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureTool.AddSIFSK1"></a>

### FractureTool.AddSIFSK1()

Creates a new FractureSIFSK1

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK2"></a>

### FractureTool.AddSIFSK2()

Creates a new FractureSIFSK2

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK3"></a>

### FractureTool.AddSIFSK3()

Creates a new FractureSIFSK3

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddJINT"></a>

### FractureTool.AddJINT()

Creates a new FractureJINT

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddMaterialForceX"></a>

### FractureTool.AddMaterialForceX()

Creates a new FractureMaterialForceX

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddMaterialForceY"></a>

### FractureTool.AddMaterialForceY()

Creates a new FractureMaterialForceY

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddMaterialForceZ"></a>

### FractureTool.AddMaterialForceZ()

Creates a new FractureMaterialForceZ

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddTSTRESS"></a>

### FractureTool.AddTSTRESS()

Creates a new FractureTSTRESS

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTG1"></a>

### FractureTool.AddVCCTG1()

Creates a new FractureVCCTG1

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTG2"></a>

### FractureTool.AddVCCTG2()

Creates a new FractureVCCTG2

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTG3"></a>

### FractureTool.AddVCCTG3()

Creates a new FractureVCCTG3

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTGT"></a>

### FractureTool.AddVCCTGT()

Creates a new FractureVCCTGT

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddCStarIntegral"></a>

### FractureTool.AddCStarIntegral()

Creates a new FractureCSTAR

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddEquivalentSIFSRange"></a>

### FractureTool.AddEquivalentSIFSRange()

Creates a new FractureEquivalentSIFSRange

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.EvaluateAllResults"></a>

### FractureTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddCrackExtensionProbe"></a>

### FractureTool.AddCrackExtensionProbe()

Creates a new FractureCrackExtensionProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddEquivalentSIFSRangeProbe"></a>

### FractureTool.AddEquivalentSIFSRangeProbe()

Creates a new FractureEquivalentSIFSRangeProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddJINTProbe"></a>

### FractureTool.AddJINTProbe()

Creates a new FractureJINTProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK1Probe"></a>

### FractureTool.AddSIFSK1Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK2Probe"></a>

### FractureTool.AddSIFSK2Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK3Probe"></a>

### FractureTool.AddSIFSK3Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddNumberOfCyclesProbe"></a>

### FractureTool.AddNumberOfCyclesProbe()

Creates a new FractureTotalNumberOfCyclesProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Delete"></a>

### FractureTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetChildren"></a>

### FractureTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FractureTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddComment"></a>

### FractureTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddFigure"></a>

### FractureTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddImage"></a>

### FractureTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Activate"></a>

### FractureTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CopyTo"></a>

### FractureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Duplicate"></a>

### FractureTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupAllSimilarChildren"></a>

### FractureTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupSimilarObjects"></a>

### FractureTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyByName"></a>

### FractureTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyByAPIName"></a>

### FractureTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CreateParameter"></a>

### FractureTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetParameter"></a>

### FractureTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.RemoveParameter"></a>

### FractureTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

