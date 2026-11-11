# `FatigueSensitivity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSensitivity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueSensitivity(internalObject: Any)

<a id="FatigueSensitivity"></a>

### *class* FatigueSensitivity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueSensitivity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueSensitivity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FatigueSensitivity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#FatigueSensitivity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FatigueSensitivity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueSensitivity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueSensitivity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueSensitivity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FatigueSensitivity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueSensitivity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueSensitivity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FatigueSensitivity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FatigueSensitivity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FatigueSensitivity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueSensitivity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueSensitivity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueSensitivity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueSensitivity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueSensitivity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueSensitivity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FatigueSensitivity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueSensitivity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueSensitivity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueSensitivity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueSensitivity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FatigueSensitivity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueSensitivity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueSensitivity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueSensitivity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueSensitivity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueSensitivity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueSensitivity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueSensitivity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FatigueSensitivity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueSensitivity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueSensitivity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueSensitivity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueSensitivity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FatigueSensitivity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FatigueSensitivity.AttachedRefs)                       | AttachedRefs property.                                        |
| [`ChartViewingStyle`](#FatigueSensitivity.ChartViewingStyle)             | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#FatigueSensitivity.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#FatigueSensitivity.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#FatigueSensitivity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FatigueSensitivity.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`DesignLife`](#FatigueSensitivity.DesignLife)                           | Gets or sets the DesignLife.                                  |
| [`GroupingFolder`](#FatigueSensitivity.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#FatigueSensitivity.IconName)                               | IconName property.                                            |
| [`Images`](#FatigueSensitivity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FatigueSensitivity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FatigueSensitivity.Location)                               | Gets or sets the Location.                                    |
| [`LowerVariation`](#FatigueSensitivity.LowerVariation)                   | Gets or sets the LowerVariation.                              |
| [`Name`](#FatigueSensitivity.Name)                                       | Name property.                                                |
| [`NumberOfFillPoints`](#FatigueSensitivity.NumberOfFillPoints)           | Gets or sets the NumberOfFillPoints.                          |
| [`ObjectId`](#FatigueSensitivity.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#FatigueSensitivity.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#FatigueSensitivity.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#FatigueSensitivity.Parent)                                   | Parent property.                                              |
| [`Properties`](#FatigueSensitivity.Properties)                           | Gets the list of properties for this object.                  |
| [`Sensitivity`](#FatigueSensitivity.Sensitivity)                         | Gets or sets the Sensitivity.                                 |
| [`State`](#FatigueSensitivity.State)                                     | State property.                                               |
| [`Suppressed`](#FatigueSensitivity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`UpperVariation`](#FatigueSensitivity.UpperVariation)                   | Gets or sets the UpperVariation.                              |
| [`VisibleProperties`](#FatigueSensitivity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueSensitivity.AttachedRefs"></a>

### *property* FatigueSensitivity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.ChartViewingStyle"></a>

### *property* FatigueSensitivity.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Children"></a>

### *property* FatigueSensitivity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.ClsId"></a>

### *property* FatigueSensitivity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Comments"></a>

### *property* FatigueSensitivity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.DataModelObjectCategory"></a>

### *property* FatigueSensitivity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.DesignLife"></a>

### *property* FatigueSensitivity.DesignLife *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GroupingFolder"></a>

### *property* FatigueSensitivity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.IconName"></a>

### *property* FatigueSensitivity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Images"></a>

### *property* FatigueSensitivity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.InternalObject"></a>

### *property* FatigueSensitivity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Location"></a>

### *property* FatigueSensitivity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.LowerVariation"></a>

### *property* FatigueSensitivity.LowerVariation *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowerVariation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Name"></a>

### *property* FatigueSensitivity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.NumberOfFillPoints"></a>

### *property* FatigueSensitivity.NumberOfFillPoints *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfFillPoints.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.ObjectId"></a>

### *property* FatigueSensitivity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.ObjectState"></a>

### *property* FatigueSensitivity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.ObjectTags"></a>

### *property* FatigueSensitivity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Parent"></a>

### *property* FatigueSensitivity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Properties"></a>

### *property* FatigueSensitivity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Sensitivity"></a>

### *property* FatigueSensitivity.Sensitivity *: [Ansys.Mechanical.DataModel.Enums.FatigueSensitivityType](../../../../../Mechanical/DataModel/Enums/FatigueSensitivityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FatigueSensitivityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Sensitivity.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.State"></a>

### *property* FatigueSensitivity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Suppressed"></a>

### *property* FatigueSensitivity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.UpperVariation"></a>

### *property* FatigueSensitivity.UpperVariation *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UpperVariation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.VisibleProperties"></a>

### *property* FatigueSensitivity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueSensitivity.Activate"></a>

### FatigueSensitivity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.AddComment"></a>

### FatigueSensitivity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.AddImage"></a>

### FatigueSensitivity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Copy"></a>

### FatigueSensitivity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.CopyTo"></a>

### FatigueSensitivity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.CreateObjRef"></a>

### FatigueSensitivity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.CreateParameter"></a>

### FatigueSensitivity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Cut"></a>

### FatigueSensitivity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Delete"></a>

### FatigueSensitivity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Duplicate"></a>

### FatigueSensitivity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Equals"></a>

### FatigueSensitivity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetAPIName"></a>

### FatigueSensitivity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetAllProperties"></a>

### FatigueSensitivity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetChildren"></a>

### FatigueSensitivity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueSensitivity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetDetailsView"></a>

### FatigueSensitivity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetEnumName"></a>

### FatigueSensitivity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetHashCode"></a>

### FatigueSensitivity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetIconFile"></a>

### FatigueSensitivity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetLifetimeService"></a>

### FatigueSensitivity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetObjectData"></a>

### FatigueSensitivity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetParameter"></a>

### FatigueSensitivity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetPath"></a>

### FatigueSensitivity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetPropertyName"></a>

### FatigueSensitivity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetPropertyValue"></a>

### FatigueSensitivity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetVisibleProperties"></a>

### FatigueSensitivity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GetVisiblePropertyNames"></a>

### FatigueSensitivity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GroupAllSimilarChildren"></a>

### FatigueSensitivity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.GroupSimilarObjects"></a>

### FatigueSensitivity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.InitializeLifetimeService"></a>

### FatigueSensitivity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.IsPropertyEditable"></a>

### FatigueSensitivity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueSensitivity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.IsPropertyVisible"></a>

### FatigueSensitivity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueSensitivity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.Paste"></a>

### FatigueSensitivity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.PropertyByAPIName"></a>

### FatigueSensitivity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.PropertyById"></a>

### FatigueSensitivity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.PropertyByName"></a>

### FatigueSensitivity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.RemoveFromGroup"></a>

### FatigueSensitivity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.RemoveParameter"></a>

### FatigueSensitivity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueSensitivity.RenameBasedOnDefinition"></a>

### FatigueSensitivity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

