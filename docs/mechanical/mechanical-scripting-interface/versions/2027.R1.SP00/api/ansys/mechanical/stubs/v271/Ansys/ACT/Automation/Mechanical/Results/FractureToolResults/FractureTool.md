# `FractureTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool(internalObject: Any)

<a id="FractureTool"></a>

### *class* FractureTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FractureTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FractureTool.Activate)                                       | Activate the current object.                                                                |
| [`AddCStarIntegral`](#FractureTool.AddCStarIntegral)                       | Creates a new FractureCSTAR                                                                 |
| [`AddComment`](#FractureTool.AddComment)                                   | Creates a new child Comment.                                                                |
| [`AddCrackExtensionProbe`](#FractureTool.AddCrackExtensionProbe)           | Creates a new FractureCrackExtensionProbe                                                   |
| [`AddEquivalentSIFSRange`](#FractureTool.AddEquivalentSIFSRange)           | Creates a new FractureEquivalentSIFSRange                                                   |
| [`AddEquivalentSIFSRangeProbe`](#FractureTool.AddEquivalentSIFSRangeProbe) | Creates a new FractureEquivalentSIFSRangeProbe                                              |
| [`AddFigure`](#FractureTool.AddFigure)                                     | Creates a new child Figure.                                                                 |
| [`AddImage`](#FractureTool.AddImage)                                       | Creates a new child Image.                                                                  |
| [`AddJINT`](#FractureTool.AddJINT)                                         | Creates a new FractureJINT                                                                  |
| [`AddJINTProbe`](#FractureTool.AddJINTProbe)                               | Creates a new FractureJINTProbe                                                             |
| [`AddMaterialForceX`](#FractureTool.AddMaterialForceX)                     | Creates a new FractureMaterialForceX                                                        |
| [`AddMaterialForceY`](#FractureTool.AddMaterialForceY)                     | Creates a new FractureMaterialForceY                                                        |
| [`AddMaterialForceZ`](#FractureTool.AddMaterialForceZ)                     | Creates a new FractureMaterialForceZ                                                        |
| [`AddNumberOfCyclesProbe`](#FractureTool.AddNumberOfCyclesProbe)           | Creates a new FractureTotalNumberOfCyclesProbe                                              |
| [`AddSIFSK1`](#FractureTool.AddSIFSK1)                                     | Creates a new FractureSIFSK1                                                                |
| [`AddSIFSK1Probe`](#FractureTool.AddSIFSK1Probe)                           | Creates a new FractureSIFSProbe                                                             |
| [`AddSIFSK2`](#FractureTool.AddSIFSK2)                                     | Creates a new FractureSIFSK2                                                                |
| [`AddSIFSK2Probe`](#FractureTool.AddSIFSK2Probe)                           | Creates a new FractureSIFSProbe                                                             |
| [`AddSIFSK3`](#FractureTool.AddSIFSK3)                                     | Creates a new FractureSIFSK3                                                                |
| [`AddSIFSK3Probe`](#FractureTool.AddSIFSK3Probe)                           | Creates a new FractureSIFSProbe                                                             |
| [`AddTSTRESS`](#FractureTool.AddTSTRESS)                                   | Creates a new FractureTSTRESS                                                               |
| [`AddVCCTG1`](#FractureTool.AddVCCTG1)                                     | Creates a new FractureVCCTG1                                                                |
| [`AddVCCTG2`](#FractureTool.AddVCCTG2)                                     | Creates a new FractureVCCTG2                                                                |
| [`AddVCCTG3`](#FractureTool.AddVCCTG3)                                     | Creates a new FractureVCCTG3                                                                |
| [`AddVCCTGT`](#FractureTool.AddVCCTGT)                                     | Creates a new FractureVCCTGT                                                                |
| [`Copy`](#FractureTool.Copy)                                               | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FractureTool.CopyTo)                                           | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FractureTool.CreateObjRef)                               | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FractureTool.CreateParameter)                         | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FractureTool.Cut)                                                 | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FractureTool.Delete)                                           | Run the Delete action.                                                                      |
| [`Duplicate`](#FractureTool.Duplicate)                                     | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FractureTool.Equals)                                           | Equals method.                                                                              |
| [`EvaluateAllResults`](#FractureTool.EvaluateAllResults)                   | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#FractureTool.GetAPIName)                                   | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FractureTool.GetAllProperties)                       | GetAllProperties method.                                                                    |
| [`GetChildren`](#FractureTool.GetChildren)                                 | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FractureTool.GetDetailsView)                           | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FractureTool.GetEnumName)                                 | Enum name bound to value                                                                    |
| [`GetHashCode`](#FractureTool.GetHashCode)                                 | GetHashCode method.                                                                         |
| [`GetIconFile`](#FractureTool.GetIconFile)                                 | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FractureTool.GetLifetimeService)                   | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FractureTool.GetObjectData)                             | GetObjectData method.                                                                       |
| [`GetParameter`](#FractureTool.GetParameter)                               | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FractureTool.GetPath)                                         | GetPath method.                                                                             |
| [`GetPropertyName`](#FractureTool.GetPropertyName)                         | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FractureTool.GetPropertyValue)                       | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FractureTool.GetVisibleProperties)               | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FractureTool.GetVisiblePropertyNames)         | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FractureTool.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FractureTool.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FractureTool.InitializeLifetimeService)     | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FractureTool.IsPropertyEditable)                   | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FractureTool.IsPropertyVisible)                     | IsPropertyVisible method.                                                                   |
| [`Paste`](#FractureTool.Paste)                                             | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FractureTool.PropertyByAPIName)                     | Get a property by its API name.                                                             |
| [`PropertyById`](#FractureTool.PropertyById)                               | PropertyById method.                                                                        |
| [`PropertyByName`](#FractureTool.PropertyByName)                           | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FractureTool.RemoveFromGroup)                         | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FractureTool.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FractureTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#FractureTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#FractureTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#FractureTool.Comments)                               | Gets the list of associated comments.                         |
| [`CrackFrontNumber`](#FractureTool.CrackFrontNumber)               | Gets or sets the CrackFrontNumber.                            |
| [`CrackSelection`](#FractureTool.CrackSelection)                   | Gets or sets the CrackSelection.                              |
| [`CrackSelectionMode`](#FractureTool.CrackSelectionMode)           | Gets or sets the CrackSelectionMode.                          |
| [`DataModelObjectCategory`](#FractureTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#FractureTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#FractureTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#FractureTool.IconName)                               | IconName property.                                            |
| [`Images`](#FractureTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FractureTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MultipleCracksSelection`](#FractureTool.MultipleCracksSelection) | Get/Set multiple cracks to Fracture tool                      |
| [`Name`](#FractureTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#FractureTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#FractureTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#FractureTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#FractureTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#FractureTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#FractureTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#FractureTool.State)                                     | State property.                                               |
| [`Suppressed`](#FractureTool.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FractureTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FractureTool.AttachedRefs"></a>

### *property* FractureTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Children"></a>

### *property* FractureTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ClsId"></a>

### *property* FractureTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Comments"></a>

### *property* FractureTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackFrontNumber"></a>

### *property* FractureTool.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackSelection"></a>

### *property* FractureTool.CrackSelection *: [Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CrackSelectionMode"></a>

### *property* FractureTool.CrackSelectionMode *: [Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType](../../../../../Mechanical/DataModel/Enums/CrackSelectionModeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSelectionModeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.DataModelObjectCategory"></a>

### *property* FractureTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Figures"></a>

### *property* FractureTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupingFolder"></a>

### *property* FractureTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.IconName"></a>

### *property* FractureTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Images"></a>

### *property* FractureTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.InternalObject"></a>

### *property* FractureTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFractureToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.MultipleCracksSelection"></a>

### *property* FractureTool.MultipleCracksSelection *: Iterable[[Ansys.ACT.Automation.Mechanical.GenericCrack](../../GenericCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get/Set multiple cracks to Fracture tool

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Name"></a>

### *property* FractureTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ObjectId"></a>

### *property* FractureTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ObjectState"></a>

### *property* FractureTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ObjectTags"></a>

### *property* FractureTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Parent"></a>

### *property* FractureTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Properties"></a>

### *property* FractureTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.ScopingMethod"></a>

### *property* FractureTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.FractureToolScopeType](../../../../../Mechanical/DataModel/Enums/FractureToolScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FractureToolScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.State"></a>

### *property* FractureTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Suppressed"></a>

### *property* FractureTool.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.VisibleProperties"></a>

### *property* FractureTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureTool.Activate"></a>

### FractureTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddCStarIntegral"></a>

### FractureTool.AddCStarIntegral() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureCSTAR

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddComment"></a>

### FractureTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddCrackExtensionProbe"></a>

### FractureTool.AddCrackExtensionProbe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureCrackExtensionProbe](FractureCrackExtensionProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureCrackExtensionProbe)

Creates a new FractureCrackExtensionProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddEquivalentSIFSRange"></a>

### FractureTool.AddEquivalentSIFSRange() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureEquivalentSIFSRange

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddEquivalentSIFSRangeProbe"></a>

### FractureTool.AddEquivalentSIFSRangeProbe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureEquivalentSIFSRangeProbe](FractureEquivalentSIFSRangeProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureEquivalentSIFSRangeProbe)

Creates a new FractureEquivalentSIFSRangeProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddFigure"></a>

### FractureTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddImage"></a>

### FractureTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddJINT"></a>

### FractureTool.AddJINT() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureJINT

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddJINTProbe"></a>

### FractureTool.AddJINTProbe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureJINTProbe](FractureJINTProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureJINTProbe)

Creates a new FractureJINTProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddMaterialForceX"></a>

### FractureTool.AddMaterialForceX() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureMaterialForceX

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddMaterialForceY"></a>

### FractureTool.AddMaterialForceY() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureMaterialForceY

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddMaterialForceZ"></a>

### FractureTool.AddMaterialForceZ() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureMaterialForceZ

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddNumberOfCyclesProbe"></a>

### FractureTool.AddNumberOfCyclesProbe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTotalNumberOfCyclesProbe](FractureTotalNumberOfCyclesProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTotalNumberOfCyclesProbe)

Creates a new FractureTotalNumberOfCyclesProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK1"></a>

### FractureTool.AddSIFSK1() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureSIFSK1

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK1Probe"></a>

### FractureTool.AddSIFSK1Probe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureSIFSProbe](FractureSIFSProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureSIFSProbe)

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK2"></a>

### FractureTool.AddSIFSK2() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureSIFSK2

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK2Probe"></a>

### FractureTool.AddSIFSK2Probe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureSIFSProbe](FractureSIFSProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureSIFSProbe)

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK3"></a>

### FractureTool.AddSIFSK3() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureSIFSK3

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddSIFSK3Probe"></a>

### FractureTool.AddSIFSK3Probe() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureSIFSProbe](FractureSIFSProbe.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureSIFSProbe)

Creates a new FractureSIFSProbe

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddTSTRESS"></a>

### FractureTool.AddTSTRESS() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureTSTRESS

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTG1"></a>

### FractureTool.AddVCCTG1() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureVCCTG1

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTG2"></a>

### FractureTool.AddVCCTG2() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureVCCTG2

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTG3"></a>

### FractureTool.AddVCCTG3() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureVCCTG3

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.AddVCCTGT"></a>

### FractureTool.AddVCCTGT() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult](FractureToolResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureToolResult)

Creates a new FractureVCCTGT

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Copy"></a>

### FractureTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CopyTo"></a>

### FractureTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CreateObjRef"></a>

### FractureTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.CreateParameter"></a>

### FractureTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Cut"></a>

### FractureTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Delete"></a>

### FractureTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Duplicate"></a>

### FractureTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Equals"></a>

### FractureTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.EvaluateAllResults"></a>

### FractureTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetAPIName"></a>

### FractureTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetAllProperties"></a>

### FractureTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetChildren"></a>

### FractureTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FractureTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetDetailsView"></a>

### FractureTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetEnumName"></a>

### FractureTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetHashCode"></a>

### FractureTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetIconFile"></a>

### FractureTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetLifetimeService"></a>

### FractureTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetObjectData"></a>

### FractureTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetParameter"></a>

### FractureTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetPath"></a>

### FractureTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetPropertyName"></a>

### FractureTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetPropertyValue"></a>

### FractureTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetVisibleProperties"></a>

### FractureTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GetVisiblePropertyNames"></a>

### FractureTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupAllSimilarChildren"></a>

### FractureTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.GroupSimilarObjects"></a>

### FractureTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.InitializeLifetimeService"></a>

### FractureTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.IsPropertyEditable"></a>

### FractureTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FractureTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.IsPropertyVisible"></a>

### FractureTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FractureTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.Paste"></a>

### FractureTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyByAPIName"></a>

### FractureTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyById"></a>

### FractureTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.PropertyByName"></a>

### FractureTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.RemoveFromGroup"></a>

### FractureTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FractureTool.RemoveParameter"></a>

### FractureTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

