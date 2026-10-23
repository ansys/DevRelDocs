# `ContactSolutionInformation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactSolutionInformation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactSolutionInformation(internalObject: Any)

<a id="ContactSolutionInformation"></a>

### *class* ContactSolutionInformation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactSolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactSolutionInformation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactSolutionInformation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ContactSolutionInformation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ContactSolutionInformation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactSolutionInformation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactSolutionInformation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactSolutionInformation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactSolutionInformation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactSolutionInformation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactSolutionInformation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactSolutionInformation.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ContactSolutionInformation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactSolutionInformation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactSolutionInformation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactSolutionInformation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactSolutionInformation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactSolutionInformation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactSolutionInformation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactSolutionInformation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactSolutionInformation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactSolutionInformation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactSolutionInformation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactSolutionInformation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactSolutionInformation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactSolutionInformation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactSolutionInformation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactSolutionInformation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactSolutionInformation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactSolutionInformation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactSolutionInformation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactSolutionInformation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactSolutionInformation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactSolutionInformation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactSolutionInformation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactSolutionInformation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactSolutionInformation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactSolutionInformation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactSolutionInformation.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ContactSolutionInformation.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ContactSolutionInformation.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ContactSolutionInformation.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactSolutionInformation.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#ContactSolutionInformation.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactSolutionInformation.IconName)                               | IconName property.                                            |
| [`Images`](#ContactSolutionInformation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactSolutionInformation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ContactSolutionInformation.Name)                                       | Name property.                                                |
| [`ObjectId`](#ContactSolutionInformation.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactSolutionInformation.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactSolutionInformation.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactSolutionInformation.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactSolutionInformation.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ContactSolutionInformation.State)                                     | State property.                                               |
| [`UpdateInterval`](#ContactSolutionInformation.UpdateInterval)                   | Gets or sets the UpdateInterval.                              |
| [`VisibleProperties`](#ContactSolutionInformation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactSolutionInformation.AttachedRefs"></a>

### *property* ContactSolutionInformation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Children"></a>

### *property* ContactSolutionInformation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.ClsId"></a>

### *property* ContactSolutionInformation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Comments"></a>

### *property* ContactSolutionInformation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.DataModelObjectCategory"></a>

### *property* ContactSolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupingFolder"></a>

### *property* ContactSolutionInformation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.IconName"></a>

### *property* ContactSolutionInformation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Images"></a>

### *property* ContactSolutionInformation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.InternalObject"></a>

### *property* ContactSolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactInfoToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Name"></a>

### *property* ContactSolutionInformation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.ObjectId"></a>

### *property* ContactSolutionInformation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.ObjectState"></a>

### *property* ContactSolutionInformation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.ObjectTags"></a>

### *property* ContactSolutionInformation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Parent"></a>

### *property* ContactSolutionInformation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Properties"></a>

### *property* ContactSolutionInformation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.State"></a>

### *property* ContactSolutionInformation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.UpdateInterval"></a>

### *property* ContactSolutionInformation.UpdateInterval *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.VisibleProperties"></a>

### *property* ContactSolutionInformation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactSolutionInformation.Activate"></a>

### ContactSolutionInformation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.AddComment"></a>

### ContactSolutionInformation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.AddImage"></a>

### ContactSolutionInformation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Copy"></a>

### ContactSolutionInformation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CopyTo"></a>

### ContactSolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CreateObjRef"></a>

### ContactSolutionInformation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.CreateParameter"></a>

### ContactSolutionInformation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Cut"></a>

### ContactSolutionInformation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Delete"></a>

### ContactSolutionInformation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Duplicate"></a>

### ContactSolutionInformation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Equals"></a>

### ContactSolutionInformation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetAPIName"></a>

### ContactSolutionInformation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetAllProperties"></a>

### ContactSolutionInformation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetChildren"></a>

### ContactSolutionInformation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactSolutionInformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetDetailsView"></a>

### ContactSolutionInformation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetEnumName"></a>

### ContactSolutionInformation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetHashCode"></a>

### ContactSolutionInformation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetIconFile"></a>

### ContactSolutionInformation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetLifetimeService"></a>

### ContactSolutionInformation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetObjectData"></a>

### ContactSolutionInformation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetParameter"></a>

### ContactSolutionInformation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetPath"></a>

### ContactSolutionInformation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetPropertyName"></a>

### ContactSolutionInformation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetPropertyValue"></a>

### ContactSolutionInformation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetVisibleProperties"></a>

### ContactSolutionInformation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GetVisiblePropertyNames"></a>

### ContactSolutionInformation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupAllSimilarChildren"></a>

### ContactSolutionInformation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.GroupSimilarObjects"></a>

### ContactSolutionInformation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.InitializeLifetimeService"></a>

### ContactSolutionInformation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.IsPropertyEditable"></a>

### ContactSolutionInformation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactSolutionInformation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.IsPropertyVisible"></a>

### ContactSolutionInformation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactSolutionInformation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.Paste"></a>

### ContactSolutionInformation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyByAPIName"></a>

### ContactSolutionInformation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyById"></a>

### ContactSolutionInformation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.PropertyByName"></a>

### ContactSolutionInformation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.RemoveFromGroup"></a>

### ContactSolutionInformation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactSolutionInformation.RemoveParameter"></a>

### ContactSolutionInformation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

