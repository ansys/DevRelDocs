# `FractureTool`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FractureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FractureTool.Activate)                                       | Activate the current object.                                                      |
| [`AddCStarIntegral`](#FractureTool.AddCStarIntegral)                       | Creates a new FractureCSTAR                                                       |
| [`AddComment`](#FractureTool.AddComment)                                   | Creates a new child Comment.                                                      |
| [`AddCrackExtensionProbe`](#FractureTool.AddCrackExtensionProbe)           | Creates a new FractureCrackExtensionProbe                                         |
| [`AddEquivalentSIFSRange`](#FractureTool.AddEquivalentSIFSRange)           | Creates a new FractureEquivalentSIFSRange                                         |
| [`AddEquivalentSIFSRangeProbe`](#FractureTool.AddEquivalentSIFSRangeProbe) | Creates a new FractureEquivalentSIFSRangeProbe                                    |
| [`AddFigure`](#FractureTool.AddFigure)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureTool.AddImage)                                       | Creates a new child Image.                                                        |
| [`AddJINT`](#FractureTool.AddJINT)                                         | Creates a new FractureJINT                                                        |
| [`AddJINTProbe`](#FractureTool.AddJINTProbe)                               | Creates a new FractureJINTProbe                                                   |
| [`AddMaterialForceX`](#FractureTool.AddMaterialForceX)                     | Creates a new FractureMaterialForceX                                              |
| [`AddMaterialForceY`](#FractureTool.AddMaterialForceY)                     | Creates a new FractureMaterialForceY                                              |
| [`AddMaterialForceZ`](#FractureTool.AddMaterialForceZ)                     | Creates a new FractureMaterialForceZ                                              |
| [`AddNumberOfCyclesProbe`](#FractureTool.AddNumberOfCyclesProbe)           | Creates a new FractureTotalNumberOfCyclesProbe                                    |
| [`AddSIFSK1`](#FractureTool.AddSIFSK1)                                     | Creates a new FractureSIFSK1                                                      |
| [`AddSIFSK1Probe`](#FractureTool.AddSIFSK1Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK2`](#FractureTool.AddSIFSK2)                                     | Creates a new FractureSIFSK2                                                      |
| [`AddSIFSK2Probe`](#FractureTool.AddSIFSK2Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK3`](#FractureTool.AddSIFSK3)                                     | Creates a new FractureSIFSK3                                                      |
| [`AddSIFSK3Probe`](#FractureTool.AddSIFSK3Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddTSTRESS`](#FractureTool.AddTSTRESS)                                   | Creates a new FractureTSTRESS                                                     |
| [`AddVCCTG1`](#FractureTool.AddVCCTG1)                                     | Creates a new FractureVCCTG1                                                      |
| [`AddVCCTG2`](#FractureTool.AddVCCTG2)                                     | Creates a new FractureVCCTG2                                                      |
| [`AddVCCTG3`](#FractureTool.AddVCCTG3)                                     | Creates a new FractureVCCTG3                                                      |
| [`AddVCCTGT`](#FractureTool.AddVCCTGT)                                     | Creates a new FractureVCCTGT                                                      |
| [`CopyTo`](#FractureTool.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FractureTool.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`Delete`](#FractureTool.Delete)                                           | Run the Delete action.                                                            |
| [`Duplicate`](#FractureTool.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#FractureTool.EvaluateAllResults)                   | Run the EvaluateAllResults action.                                                |
| [`GetChildren`](#FractureTool.GetChildren)                                 | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FractureTool.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FractureTool.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureTool.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#FractureTool.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`PropertyByName`](#FractureTool.PropertyByName)                           | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FractureTool.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FractureTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FractureTool.Comments)                               | Gets the list of associated comments.                         |
| [`CrackFrontNumber`](#FractureTool.CrackFrontNumber)               | Gets or sets the CrackFrontNumber.                            |
| [`CrackSelection`](#FractureTool.CrackSelection)                   | Gets or sets the CrackSelection.                              |
| [`CrackSelectionMode`](#FractureTool.CrackSelectionMode)           | Gets or sets the CrackSelectionMode.                          |
| [`DataModelObjectCategory`](#FractureTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#FractureTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FractureTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FractureTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MultipleCracksSelection`](#FractureTool.MultipleCracksSelection) | Get/Set multiple cracks to Fracture tool                      |
| [`Properties`](#FractureTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#FractureTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#FractureTool.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FractureTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FractureTool.Children"></a>

### *property* FractureTool.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Comments"></a>

### *property* FractureTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackFrontNumber"></a>

### *property* FractureTool.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackSelection"></a>

### *property* FractureTool.CrackSelection *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackSelectionMode"></a>

### *property* FractureTool.CrackSelectionMode *: [Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType](../../../../../Mechanical/DataModel/Enums/CrackSelectionModeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.DataModelObjectCategory"></a>

### *property* FractureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Figures"></a>

### *property* FractureTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Images"></a>

### *property* FractureTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.InternalObject"></a>

### *property* FractureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.MultipleCracksSelection"></a>

### *property* FractureTool.MultipleCracksSelection *: Iterable[[Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GenericCrack)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get/Set multiple cracks to Fracture tool

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Properties"></a>

### *property* FractureTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ScopingMethod"></a>

### *property* FractureTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.FractureToolScopeType](../../../../../Mechanical/DataModel/Enums/FractureToolScopeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FractureToolScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Suppressed"></a>

### *property* FractureTool.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.VisibleProperties"></a>

### *property* FractureTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureTool.Activate"></a>

### FractureTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddCStarIntegral"></a>

### FractureTool.AddCStarIntegral()

Creates a new FractureCSTAR

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddComment"></a>

### FractureTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddCrackExtensionProbe"></a>

### FractureTool.AddCrackExtensionProbe()

Creates a new FractureCrackExtensionProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddEquivalentSIFSRange"></a>

### FractureTool.AddEquivalentSIFSRange()

Creates a new FractureEquivalentSIFSRange

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddEquivalentSIFSRangeProbe"></a>

### FractureTool.AddEquivalentSIFSRangeProbe()

Creates a new FractureEquivalentSIFSRangeProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddFigure"></a>

### FractureTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddImage"></a>

### FractureTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddJINT"></a>

### FractureTool.AddJINT()

Creates a new FractureJINT

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddJINTProbe"></a>

### FractureTool.AddJINTProbe()

Creates a new FractureJINTProbe

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

<a id="FractureTool.AddNumberOfCyclesProbe"></a>

### FractureTool.AddNumberOfCyclesProbe()

Creates a new FractureTotalNumberOfCyclesProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK1"></a>

### FractureTool.AddSIFSK1()

Creates a new FractureSIFSK1

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK1Probe"></a>

### FractureTool.AddSIFSK1Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK2"></a>

### FractureTool.AddSIFSK2()

Creates a new FractureSIFSK2

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK2Probe"></a>

### FractureTool.AddSIFSK2Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK3"></a>

### FractureTool.AddSIFSK3()

Creates a new FractureSIFSK3

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK3Probe"></a>

### FractureTool.AddSIFSK3Probe()

Creates a new FractureSIFSProbe

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

<a id="FractureTool.CopyTo"></a>

### FractureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CreateParameter"></a>

### FractureTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Delete"></a>

### FractureTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Duplicate"></a>

### FractureTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.EvaluateAllResults"></a>

### FractureTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetChildren"></a>

### FractureTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetParameter"></a>

### FractureTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupAllSimilarChildren"></a>

### FractureTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupSimilarObjects"></a>

### FractureTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyByAPIName"></a>

### FractureTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyByName"></a>

### FractureTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.RemoveParameter"></a>

### FractureTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

