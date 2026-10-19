# `Inductance`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance(internalObject: Any)

<a id="Inductance"></a>

### *class* Inductance(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Inductance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Inductance.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Inductance.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#Inductance.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Inductance.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Inductance.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Inductance.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Inductance.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Inductance.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Inductance.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Inductance.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Inductance.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Inductance.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Inductance.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Inductance.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Inductance.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Inductance.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Inductance.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Inductance.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Inductance.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Inductance.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Inductance.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Inductance.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Inductance.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Inductance.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Inductance.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Inductance.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Inductance.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Inductance.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Inductance.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Inductance.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Inductance.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Inductance.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Inductance.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Inductance.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Inductance.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Inductance.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Inductance.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Inductance.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Inductance.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Inductance.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Inductance.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Inductance.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#Inductance.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Inductance.IconName)                               | IconName property.                                            |
| [`Images`](#Inductance.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Inductance.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](#Inductance.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Name`](#Inductance.Name)                                       | Name property.                                                |
| [`ObjectId`](#Inductance.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Inductance.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Inductance.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Inductance.Parent)                                   | Parent property.                                              |
| [`Properties`](#Inductance.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#Inductance.State)                                     | State property.                                               |
| [`VisibleProperties`](#Inductance.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Inductance.AttachedRefs"></a>

### *property* Inductance.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Children"></a>

### *property* Inductance.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.ClsId"></a>

### *property* Inductance.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Comments"></a>

### *property* Inductance.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.DataModelObjectCategory"></a>

### *property* Inductance.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupingFolder"></a>

### *property* Inductance.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.IconName"></a>

### *property* Inductance.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Images"></a>

### *property* Inductance.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.InternalObject"></a>

### *property* Inductance.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Multiplier"></a>

### *property* Inductance.Multiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Name"></a>

### *property* Inductance.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.ObjectId"></a>

### *property* Inductance.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.ObjectState"></a>

### *property* Inductance.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.ObjectTags"></a>

### *property* Inductance.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Parent"></a>

### *property* Inductance.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Properties"></a>

### *property* Inductance.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.State"></a>

### *property* Inductance.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.VisibleProperties"></a>

### *property* Inductance.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Inductance.Activate"></a>

### Inductance.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.AddComment"></a>

### Inductance.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.AddImage"></a>

### Inductance.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Copy"></a>

### Inductance.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CopyTo"></a>

### Inductance.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CreateObjRef"></a>

### Inductance.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CreateParameter"></a>

### Inductance.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Cut"></a>

### Inductance.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Delete"></a>

### Inductance.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Duplicate"></a>

### Inductance.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Equals"></a>

### Inductance.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetAPIName"></a>

### Inductance.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetAllProperties"></a>

### Inductance.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetChildren"></a>

### Inductance.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Inductance.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetDetailsView"></a>

### Inductance.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetEnumName"></a>

### Inductance.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetHashCode"></a>

### Inductance.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetIconFile"></a>

### Inductance.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetLifetimeService"></a>

### Inductance.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetObjectData"></a>

### Inductance.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetParameter"></a>

### Inductance.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetPath"></a>

### Inductance.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetPropertyName"></a>

### Inductance.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetPropertyValue"></a>

### Inductance.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetVisibleProperties"></a>

### Inductance.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetVisiblePropertyNames"></a>

### Inductance.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupAllSimilarChildren"></a>

### Inductance.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupSimilarObjects"></a>

### Inductance.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.InitializeLifetimeService"></a>

### Inductance.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.IsPropertyEditable"></a>

### Inductance.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Inductance.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.IsPropertyVisible"></a>

### Inductance.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Inductance.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Paste"></a>

### Inductance.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyByAPIName"></a>

### Inductance.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyById"></a>

### Inductance.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyByName"></a>

### Inductance.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.RemoveFromGroup"></a>

### Inductance.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.RemoveParameter"></a>

### Inductance.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

