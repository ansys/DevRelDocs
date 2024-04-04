# FractureTool

### *class* FractureTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureTool.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddSIFSK1`](#FractureTool.AddSIFSK1)                                     | Creates a new FractureSIFSK1                                                      |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddSIFSK2`](#FractureTool.AddSIFSK2)                                     | Creates a new FractureSIFSK2                                                      |
| [`AddSIFSK3`](#FractureTool.AddSIFSK3)                                     | Creates a new FractureSIFSK3                                                      |
| [`AddJINT`](#FractureTool.AddJINT)                                         | Creates a new FractureJINT                                                        |
| [`AddMaterialForceX`](#FractureTool.AddMaterialForceX)                     | Creates a new FractureMaterialForceX                                              |
| [`AddMaterialForceY`](#FractureTool.AddMaterialForceY)                     | Creates a new FractureMaterialForceY                                              |
| [`AddMaterialForceZ`](#FractureTool.AddMaterialForceZ)                     | Creates a new FractureMaterialForceZ                                              |
| [`AddTSTRESS`](#FractureTool.AddTSTRESS)                                   | Creates a new FractureTSTRESS                                                     |
| [`AddVCCTG1`](#FractureTool.AddVCCTG1)                                     | Creates a new FractureVCCTG1                                                      |
| [`AddVCCTG2`](#FractureTool.AddVCCTG2)                                     | Creates a new FractureVCCTG2                                                      |
| [`AddVCCTG3`](#FractureTool.AddVCCTG3)                                     | Creates a new FractureVCCTG3                                                      |
| [`AddVCCTGT`](#FractureTool.AddVCCTGT)                                     | Creates a new FractureVCCTGT                                                      |
| [`AddCStarIntegral`](#FractureTool.AddCStarIntegral)                       | Creates a new FractureCSTAR                                                       |
| [`AddEquivalentSIFSRange`](#FractureTool.AddEquivalentSIFSRange)           | Creates a new FractureEquivalentSIFSRange                                         |
| [`EvaluateAllResults`](#FractureTool.EvaluateAllResults)                   | Run the EvaluateAllResults action.                                                |
| [`AddCrackExtensionProbe`](#FractureTool.AddCrackExtensionProbe)           | Creates a new FractureCrackExtensionProbe                                         |
| [`AddEquivalentSIFSRangeProbe`](#FractureTool.AddEquivalentSIFSRangeProbe) | Creates a new FractureEquivalentSIFSRangeProbe                                    |
| [`AddJINTProbe`](#FractureTool.AddJINTProbe)                               | Creates a new FractureJINTProbe                                                   |
| [`AddSIFSK1Probe`](#FractureTool.AddSIFSK1Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK2Probe`](#FractureTool.AddSIFSK2Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddSIFSK3Probe`](#FractureTool.AddSIFSK3Probe)                           | Creates a new FractureSIFSProbe                                                   |
| [`AddNumberOfCyclesProbe`](#FractureTool.AddNumberOfCyclesProbe)           | Creates a new FractureTotalNumberOfCyclesProbe                                    |
| [`Delete`](#FractureTool.Delete)                                           | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FractureTool.AddComment)                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](#FractureTool.AddFigure)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureTool.AddImage)                                       | Creates a new child Image.                                                        |
| [`Activate`](#FractureTool.Activate)                                       | Activate the current object.                                                      |
| [`CopyTo`](#FractureTool.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FractureTool.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FractureTool.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureTool.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FractureTool.PropertyByName)                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FractureTool.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#FractureTool.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FractureTool.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FractureTool.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`MultipleCracksSelection`](#FractureTool.MultipleCracksSelection)                                                        | Get/Set multiple cracks to Fracture tool                      |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`CrackFrontNumber`](#FractureTool.CrackFrontNumber)                                                                      | Gets or sets the CrackFrontNumber.                            |
| [`CrackSelectionMode`](#FractureTool.CrackSelectionMode)                                                                  | Gets or sets the CrackSelectionMode.                          |
| [`ScopingMethod`](#FractureTool.ScopingMethod)                                                                            | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#FractureTool.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`CrackSelection`](#FractureTool.CrackSelection)                                                                          | Gets or sets the CrackSelection.                              |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#FractureTool.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#FractureTool.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#FractureTool.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#FractureTool.Images)                                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FractureTool.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FractureTool.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureTool
```

## Property detail

### *property* FractureTool.MultipleCracksSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#GenericCrack)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get/Set multiple cracks to Fracture tool

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.CrackSelectionMode *: [Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType](../../../../../Mechanical/DataModel/Enums/CrackSelectionModeType.md#CrackSelectionModeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelectionMode.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.FractureToolScopeType](../../../../../Mechanical/DataModel/Enums/FractureToolScopeType.md#FractureToolScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.CrackSelection *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FractureTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FractureTool.AddSIFSK1()

Creates a new FractureSIFSK1

<!-- !! processed by numpydoc !! -->

### FractureTool.AddSIFSK2()

Creates a new FractureSIFSK2

<!-- !! processed by numpydoc !! -->

### FractureTool.AddSIFSK3()

Creates a new FractureSIFSK3

<!-- !! processed by numpydoc !! -->

### FractureTool.AddJINT()

Creates a new FractureJINT

<!-- !! processed by numpydoc !! -->

### FractureTool.AddMaterialForceX()

Creates a new FractureMaterialForceX

<!-- !! processed by numpydoc !! -->

### FractureTool.AddMaterialForceY()

Creates a new FractureMaterialForceY

<!-- !! processed by numpydoc !! -->

### FractureTool.AddMaterialForceZ()

Creates a new FractureMaterialForceZ

<!-- !! processed by numpydoc !! -->

### FractureTool.AddTSTRESS()

Creates a new FractureTSTRESS

<!-- !! processed by numpydoc !! -->

### FractureTool.AddVCCTG1()

Creates a new FractureVCCTG1

<!-- !! processed by numpydoc !! -->

### FractureTool.AddVCCTG2()

Creates a new FractureVCCTG2

<!-- !! processed by numpydoc !! -->

### FractureTool.AddVCCTG3()

Creates a new FractureVCCTG3

<!-- !! processed by numpydoc !! -->

### FractureTool.AddVCCTGT()

Creates a new FractureVCCTGT

<!-- !! processed by numpydoc !! -->

### FractureTool.AddCStarIntegral()

Creates a new FractureCSTAR

<!-- !! processed by numpydoc !! -->

### FractureTool.AddEquivalentSIFSRange()

Creates a new FractureEquivalentSIFSRange

<!-- !! processed by numpydoc !! -->

### FractureTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FractureTool.AddCrackExtensionProbe()

Creates a new FractureCrackExtensionProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.AddEquivalentSIFSRangeProbe()

Creates a new FractureEquivalentSIFSRangeProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.AddJINTProbe()

Creates a new FractureJINTProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.AddSIFSK1Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.AddSIFSK2Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.AddSIFSK3Probe()

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.AddNumberOfCyclesProbe()

Creates a new FractureTotalNumberOfCyclesProbe

<!-- !! processed by numpydoc !! -->

### FractureTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FractureTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FractureTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FractureTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FractureTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FractureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FractureTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FractureTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FractureTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FractureTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FractureTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FractureTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FractureTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FractureTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
