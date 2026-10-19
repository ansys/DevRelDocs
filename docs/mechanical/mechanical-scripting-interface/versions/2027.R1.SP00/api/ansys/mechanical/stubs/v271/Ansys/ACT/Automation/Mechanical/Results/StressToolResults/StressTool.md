# `StressTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool(internalObject: Any)

<a id="StressTool"></a>

### *class* StressTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a StressTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#StressTool.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#StressTool.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#StressTool.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#StressTool.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddSafetyFactor`](#StressTool.AddSafetyFactor)                     | Creates a new StressSafetyFactor                                                            |
| [`AddSafetyMargin`](#StressTool.AddSafetyMargin)                     | Creates a new StressSafetyMargin                                                            |
| [`AddStressRatio`](#StressTool.AddStressRatio)                       | Creates a new StressRatio                                                                   |
| [`Copy`](#StressTool.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#StressTool.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#StressTool.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#StressTool.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#StressTool.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#StressTool.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#StressTool.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#StressTool.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#StressTool.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#StressTool.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#StressTool.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#StressTool.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#StressTool.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#StressTool.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#StressTool.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#StressTool.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#StressTool.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#StressTool.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#StressTool.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#StressTool.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#StressTool.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#StressTool.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#StressTool.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#StressTool.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#StressTool.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#StressTool.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#StressTool.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#StressTool.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#StressTool.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#StressTool.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#StressTool.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#StressTool.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#StressTool.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#StressTool.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#StressTool.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#StressTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#StressTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#StressTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#StressTool.Comments)                               | Gets the list of associated comments.                         |
| [`CompressiveLimit`](#StressTool.CompressiveLimit)               | Gets or sets the CompressiveLimit.                            |
| [`CompressiveLimitType`](#StressTool.CompressiveLimitType)       | Gets or sets the CompressiveLimitType.                        |
| [`DataModelObjectCategory`](#StressTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#StressTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#StressTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#StressTool.IconName)                               | IconName property.                                            |
| [`Images`](#StressTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#StressTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LimitFactor`](#StressTool.LimitFactor)                         | Gets or sets the LimitFactor.                                 |
| [`Name`](#StressTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#StressTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#StressTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#StressTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#StressTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#StressTool.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#StressTool.State)                                     | State property.                                               |
| [`StressLimit`](#StressTool.StressLimit)                         | Gets or sets the StressLimit.                                 |
| [`StressLimitType`](#StressTool.StressLimitType)                 | Gets or sets the StressLimitType.                             |
| [`TensileLimit`](#StressTool.TensileLimit)                       | Gets or sets the TensileLimit.                                |
| [`TensileLimitType`](#StressTool.TensileLimitType)               | Gets or sets the TensileLimitType.                            |
| [`Theory`](#StressTool.Theory)                                   | Gets or sets the Theory.                                      |
| [`VisibleProperties`](#StressTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="StressTool.AttachedRefs"></a>

### *property* StressTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Children"></a>

### *property* StressTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.ClsId"></a>

### *property* StressTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Comments"></a>

### *property* StressTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CompressiveLimit"></a>

### *property* StressTool.CompressiveLimit *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CompressiveLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CompressiveLimitType"></a>

### *property* StressTool.CompressiveLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CompressiveLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.DataModelObjectCategory"></a>

### *property* StressTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Figures"></a>

### *property* StressTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupingFolder"></a>

### *property* StressTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.IconName"></a>

### *property* StressTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Images"></a>

### *property* StressTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.InternalObject"></a>

### *property* StressTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStressSafetyToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.LimitFactor"></a>

### *property* StressTool.LimitFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LimitFactor.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Name"></a>

### *property* StressTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.ObjectId"></a>

### *property* StressTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.ObjectState"></a>

### *property* StressTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.ObjectTags"></a>

### *property* StressTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Parent"></a>

### *property* StressTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Properties"></a>

### *property* StressTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.State"></a>

### *property* StressTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.StressLimit"></a>

### *property* StressTool.StressLimit *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.StressLimitType"></a>

### *property* StressTool.StressLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.TensileLimit"></a>

### *property* StressTool.TensileLimit *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TensileLimit.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.TensileLimitType"></a>

### *property* StressTool.TensileLimitType *: [Ansys.Mechanical.DataModel.Enums.SafetyLimitType](../../../../../Mechanical/DataModel/Enums/SafetyLimitType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SafetyLimitType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TensileLimitType.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Theory"></a>

### *property* StressTool.Theory *: [Ansys.Mechanical.DataModel.Enums.SafetyTheoryType](../../../../../Mechanical/DataModel/Enums/SafetyTheoryType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SafetyTheoryType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Theory.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.VisibleProperties"></a>

### *property* StressTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressTool.Activate"></a>

### StressTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddComment"></a>

### StressTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddFigure"></a>

### StressTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddImage"></a>

### StressTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddSafetyFactor"></a>

### StressTool.AddSafetyFactor() → [Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyFactor](StressSafetyFactor.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyFactor)

Creates a new StressSafetyFactor

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddSafetyMargin"></a>

### StressTool.AddSafetyMargin() → [Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyMargin](StressSafetyMargin.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyMargin)

Creates a new StressSafetyMargin

<!-- !! processed by numpydoc !! -->

<a id="StressTool.AddStressRatio"></a>

### StressTool.AddStressRatio() → [Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressRatio](StressRatio.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressRatio)

Creates a new StressRatio

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Copy"></a>

### StressTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CopyTo"></a>

### StressTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CreateObjRef"></a>

### StressTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.CreateParameter"></a>

### StressTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Cut"></a>

### StressTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Delete"></a>

### StressTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Duplicate"></a>

### StressTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Equals"></a>

### StressTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.EvaluateAllResults"></a>

### StressTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetAPIName"></a>

### StressTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetAllProperties"></a>

### StressTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetChildren"></a>

### StressTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### StressTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetDetailsView"></a>

### StressTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetEnumName"></a>

### StressTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetHashCode"></a>

### StressTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetIconFile"></a>

### StressTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetLifetimeService"></a>

### StressTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetObjectData"></a>

### StressTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetParameter"></a>

### StressTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetPath"></a>

### StressTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetPropertyName"></a>

### StressTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetPropertyValue"></a>

### StressTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetVisibleProperties"></a>

### StressTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GetVisiblePropertyNames"></a>

### StressTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupAllSimilarChildren"></a>

### StressTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.GroupSimilarObjects"></a>

### StressTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.InitializeLifetimeService"></a>

### StressTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.IsPropertyEditable"></a>

### StressTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### StressTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.IsPropertyVisible"></a>

### StressTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### StressTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.Paste"></a>

### StressTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyByAPIName"></a>

### StressTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyById"></a>

### StressTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.PropertyByName"></a>

### StressTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.RemoveFromGroup"></a>

### StressTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="StressTool.RemoveParameter"></a>

### StressTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

