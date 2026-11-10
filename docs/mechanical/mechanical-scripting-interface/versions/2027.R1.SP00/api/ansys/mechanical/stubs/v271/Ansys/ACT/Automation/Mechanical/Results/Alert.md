# `Alert`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.Alert(internalObject: Any)

<a id="Alert"></a>

### *class* Alert(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Alert.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Alert.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Alert.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#Alert.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Alert.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Alert.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Alert.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Alert.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Alert.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Alert.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Alert.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Alert.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Alert.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Alert.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Alert.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Alert.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Alert.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Alert.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Alert.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Alert.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Alert.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Alert.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Alert.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Alert.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Alert.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Alert.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Alert.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Alert.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Alert.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Alert.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Alert.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Alert.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Alert.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Alert.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Alert.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Alert.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Alert.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Alert.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Alert.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Alert.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Alert.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Alert.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Alert.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`FailsIf`](#Alert.FailsIf)                                 | Gets or sets the FailsIf.                                     |
| [`GroupingFolder`](#Alert.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Alert.IconName)                               | IconName property.                                            |
| [`Images`](#Alert.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Alert.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#Alert.Name)                                       | Name property.                                                |
| [`ObjectId`](#Alert.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Alert.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Alert.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Alert.Parent)                                   | Parent property.                                              |
| [`Properties`](#Alert.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#Alert.State)                                     | State property.                                               |
| [`Status`](#Alert.Status)                                   | Gets the Status.                                              |
| [`Value`](#Alert.Value)                                     | Gets or sets the Value.                                       |
| [`VisibleProperties`](#Alert.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Alert.AttachedRefs"></a>

### *property* Alert.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Children"></a>

### *property* Alert.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Alert.ClsId"></a>

### *property* Alert.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Comments"></a>

### *property* Alert.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Alert.DataModelObjectCategory"></a>

### *property* Alert.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Alert.FailsIf"></a>

### *property* Alert.FailsIf *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FailsIf.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GroupingFolder"></a>

### *property* Alert.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.IconName"></a>

### *property* Alert.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Images"></a>

### *property* Alert.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Alert.InternalObject"></a>

### *property* Alert.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAlertAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Name"></a>

### *property* Alert.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.ObjectId"></a>

### *property* Alert.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.ObjectState"></a>

### *property* Alert.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.ObjectTags"></a>

### *property* Alert.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Parent"></a>

### *property* Alert.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Properties"></a>

### *property* Alert.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Alert.State"></a>

### *property* Alert.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Status"></a>

### *property* Alert.Status *: [Ansys.Mechanical.DataModel.Enums.PassFailResult](../../../../Mechanical/DataModel/Enums/PassFailResult.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PassFailResult) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Value"></a>

### *property* Alert.Value *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Value.

<!-- !! processed by numpydoc !! -->

<a id="Alert.VisibleProperties"></a>

### *property* Alert.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Alert.Activate"></a>

### Alert.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Alert.AddComment"></a>

### Alert.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Alert.AddImage"></a>

### Alert.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Alert.Copy"></a>

### Alert.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Alert.CopyTo"></a>

### Alert.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Alert.CreateObjRef"></a>

### Alert.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.CreateParameter"></a>

### Alert.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Cut"></a>

### Alert.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Delete"></a>

### Alert.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Duplicate"></a>

### Alert.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Equals"></a>

### Alert.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetAPIName"></a>

### Alert.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetAllProperties"></a>

### Alert.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetChildren"></a>

### Alert.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Alert.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetDetailsView"></a>

### Alert.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetEnumName"></a>

### Alert.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetHashCode"></a>

### Alert.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetIconFile"></a>

### Alert.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetLifetimeService"></a>

### Alert.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetObjectData"></a>

### Alert.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetParameter"></a>

### Alert.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetPath"></a>

### Alert.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetPropertyName"></a>

### Alert.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetPropertyValue"></a>

### Alert.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetVisibleProperties"></a>

### Alert.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GetVisiblePropertyNames"></a>

### Alert.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GroupAllSimilarChildren"></a>

### Alert.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Alert.GroupSimilarObjects"></a>

### Alert.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Alert.InitializeLifetimeService"></a>

### Alert.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.IsPropertyEditable"></a>

### Alert.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Alert.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.IsPropertyVisible"></a>

### Alert.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Alert.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.Paste"></a>

### Alert.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Alert.PropertyByAPIName"></a>

### Alert.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Alert.PropertyById"></a>

### Alert.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Alert.PropertyByName"></a>

### Alert.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Alert.RemoveFromGroup"></a>

### Alert.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Alert.RemoveParameter"></a>

### Alert.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

