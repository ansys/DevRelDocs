# `FluxLinkage`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage(internalObject: Any)

<a id="FluxLinkage"></a>

### *class* FluxLinkage(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FluxLinkage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FluxLinkage.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FluxLinkage.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#FluxLinkage.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FluxLinkage.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FluxLinkage.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FluxLinkage.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FluxLinkage.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FluxLinkage.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FluxLinkage.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FluxLinkage.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FluxLinkage.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FluxLinkage.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FluxLinkage.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FluxLinkage.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FluxLinkage.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FluxLinkage.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FluxLinkage.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FluxLinkage.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FluxLinkage.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FluxLinkage.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FluxLinkage.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FluxLinkage.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FluxLinkage.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FluxLinkage.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FluxLinkage.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FluxLinkage.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FluxLinkage.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FluxLinkage.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FluxLinkage.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FluxLinkage.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FluxLinkage.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FluxLinkage.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FluxLinkage.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FluxLinkage.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FluxLinkage.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FluxLinkage.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FluxLinkage.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FluxLinkage.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#FluxLinkage.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#FluxLinkage.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#FluxLinkage.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FluxLinkage.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#FluxLinkage.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#FluxLinkage.IconName)                               | IconName property.                                            |
| [`Images`](#FluxLinkage.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FluxLinkage.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](#FluxLinkage.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Name`](#FluxLinkage.Name)                                       | Name property.                                                |
| [`ObjectId`](#FluxLinkage.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#FluxLinkage.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#FluxLinkage.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#FluxLinkage.Parent)                                   | Parent property.                                              |
| [`Properties`](#FluxLinkage.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#FluxLinkage.State)                                     | State property.                                               |
| [`VisibleProperties`](#FluxLinkage.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FluxLinkage.AttachedRefs"></a>

### *property* FluxLinkage.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Children"></a>

### *property* FluxLinkage.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.ClsId"></a>

### *property* FluxLinkage.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Comments"></a>

### *property* FluxLinkage.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.DataModelObjectCategory"></a>

### *property* FluxLinkage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupingFolder"></a>

### *property* FluxLinkage.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.IconName"></a>

### *property* FluxLinkage.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Images"></a>

### *property* FluxLinkage.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.InternalObject"></a>

### *property* FluxLinkage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Multiplier"></a>

### *property* FluxLinkage.Multiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Name"></a>

### *property* FluxLinkage.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.ObjectId"></a>

### *property* FluxLinkage.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.ObjectState"></a>

### *property* FluxLinkage.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.ObjectTags"></a>

### *property* FluxLinkage.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Parent"></a>

### *property* FluxLinkage.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Properties"></a>

### *property* FluxLinkage.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.State"></a>

### *property* FluxLinkage.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.VisibleProperties"></a>

### *property* FluxLinkage.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluxLinkage.Activate"></a>

### FluxLinkage.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.AddComment"></a>

### FluxLinkage.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.AddImage"></a>

### FluxLinkage.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Copy"></a>

### FluxLinkage.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CopyTo"></a>

### FluxLinkage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CreateObjRef"></a>

### FluxLinkage.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.CreateParameter"></a>

### FluxLinkage.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Cut"></a>

### FluxLinkage.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Delete"></a>

### FluxLinkage.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Duplicate"></a>

### FluxLinkage.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Equals"></a>

### FluxLinkage.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetAPIName"></a>

### FluxLinkage.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetAllProperties"></a>

### FluxLinkage.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetChildren"></a>

### FluxLinkage.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FluxLinkage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetDetailsView"></a>

### FluxLinkage.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetEnumName"></a>

### FluxLinkage.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetHashCode"></a>

### FluxLinkage.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetIconFile"></a>

### FluxLinkage.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetLifetimeService"></a>

### FluxLinkage.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetObjectData"></a>

### FluxLinkage.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetParameter"></a>

### FluxLinkage.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetPath"></a>

### FluxLinkage.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetPropertyName"></a>

### FluxLinkage.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetPropertyValue"></a>

### FluxLinkage.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetVisibleProperties"></a>

### FluxLinkage.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GetVisiblePropertyNames"></a>

### FluxLinkage.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupAllSimilarChildren"></a>

### FluxLinkage.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.GroupSimilarObjects"></a>

### FluxLinkage.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.InitializeLifetimeService"></a>

### FluxLinkage.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.IsPropertyEditable"></a>

### FluxLinkage.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FluxLinkage.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.IsPropertyVisible"></a>

### FluxLinkage.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FluxLinkage.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.Paste"></a>

### FluxLinkage.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyByAPIName"></a>

### FluxLinkage.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyById"></a>

### FluxLinkage.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.PropertyByName"></a>

### FluxLinkage.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.RemoveFromGroup"></a>

### FluxLinkage.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FluxLinkage.RemoveParameter"></a>

### FluxLinkage.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

