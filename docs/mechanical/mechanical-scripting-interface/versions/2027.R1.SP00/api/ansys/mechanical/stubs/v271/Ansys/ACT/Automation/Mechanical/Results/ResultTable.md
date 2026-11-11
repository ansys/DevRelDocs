# `ResultTable`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ResultTable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTable(internalObject: Any)

<a id="ResultTable"></a>

### *class* ResultTable(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ResultTable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ResultTable.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ResultTable.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ResultTable.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ResultTable.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ResultTable.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ResultTable.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ResultTable.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ResultTable.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ResultTable.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ResultTable.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ResultTable.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ResultTable.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ResultTable.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ResultTable.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ResultTable.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ResultTable.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ResultTable.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ResultTable.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ResultTable.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ResultTable.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ResultTable.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ResultTable.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ResultTable.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ResultTable.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ResultTable.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ResultTable.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ResultTable.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ResultTable.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ResultTable.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ResultTable.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ResultTable.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ResultTable.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ResultTable.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ResultTable.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ResultTable.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ResultTable.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ResultTable.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ResultTable.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ResultTable.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ResultTable.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ResultTable.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ResultTable.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#ResultTable.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ResultTable.IconName)                               | IconName property.                                            |
| [`Images`](#ResultTable.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ResultTable.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](#ResultTable.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Name`](#ResultTable.Name)                                       | Name property.                                                |
| [`ObjectId`](#ResultTable.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ResultTable.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ResultTable.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ResultTable.Parent)                                   | Parent property.                                              |
| [`Properties`](#ResultTable.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ResultTable.State)                                     | State property.                                               |
| [`VisibleProperties`](#ResultTable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResultTable.AttachedRefs"></a>

### *property* ResultTable.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Children"></a>

### *property* ResultTable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.ClsId"></a>

### *property* ResultTable.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Comments"></a>

### *property* ResultTable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.DataModelObjectCategory"></a>

### *property* ResultTable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupingFolder"></a>

### *property* ResultTable.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.IconName"></a>

### *property* ResultTable.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Images"></a>

### *property* ResultTable.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.InternalObject"></a>

### *property* ResultTable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Multiplier"></a>

### *property* ResultTable.Multiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Name"></a>

### *property* ResultTable.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.ObjectId"></a>

### *property* ResultTable.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.ObjectState"></a>

### *property* ResultTable.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.ObjectTags"></a>

### *property* ResultTable.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Parent"></a>

### *property* ResultTable.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Properties"></a>

### *property* ResultTable.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.State"></a>

### *property* ResultTable.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.VisibleProperties"></a>

### *property* ResultTable.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultTable.Activate"></a>

### ResultTable.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.AddComment"></a>

### ResultTable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.AddImage"></a>

### ResultTable.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Copy"></a>

### ResultTable.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CopyTo"></a>

### ResultTable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CreateObjRef"></a>

### ResultTable.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.CreateParameter"></a>

### ResultTable.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Cut"></a>

### ResultTable.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Delete"></a>

### ResultTable.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Duplicate"></a>

### ResultTable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Equals"></a>

### ResultTable.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetAPIName"></a>

### ResultTable.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetAllProperties"></a>

### ResultTable.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetChildren"></a>

### ResultTable.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ResultTable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetDetailsView"></a>

### ResultTable.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetEnumName"></a>

### ResultTable.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetHashCode"></a>

### ResultTable.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetIconFile"></a>

### ResultTable.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetLifetimeService"></a>

### ResultTable.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetObjectData"></a>

### ResultTable.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetParameter"></a>

### ResultTable.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetPath"></a>

### ResultTable.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetPropertyName"></a>

### ResultTable.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetPropertyValue"></a>

### ResultTable.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetVisibleProperties"></a>

### ResultTable.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GetVisiblePropertyNames"></a>

### ResultTable.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupAllSimilarChildren"></a>

### ResultTable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.GroupSimilarObjects"></a>

### ResultTable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.InitializeLifetimeService"></a>

### ResultTable.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.IsPropertyEditable"></a>

### ResultTable.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResultTable.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.IsPropertyVisible"></a>

### ResultTable.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResultTable.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.Paste"></a>

### ResultTable.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyByAPIName"></a>

### ResultTable.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyById"></a>

### ResultTable.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.PropertyByName"></a>

### ResultTable.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.RemoveFromGroup"></a>

### ResultTable.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ResultTable.RemoveParameter"></a>

### ResultTable.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

