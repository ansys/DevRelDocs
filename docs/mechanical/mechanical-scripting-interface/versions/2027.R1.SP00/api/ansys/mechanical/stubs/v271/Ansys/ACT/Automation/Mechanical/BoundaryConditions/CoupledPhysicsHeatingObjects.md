# `CoupledPhysicsHeatingObjects`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CoupledPhysicsHeatingObjects"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.CoupledPhysicsHeatingObjects(internalObject: Any)

<a id="CoupledPhysicsHeatingObjects"></a>

### *class* CoupledPhysicsHeatingObjects(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CoupledPhysicsHeatingObjects.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CoupledPhysicsHeatingObjects.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CoupledPhysicsHeatingObjects.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#CoupledPhysicsHeatingObjects.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CoupledPhysicsHeatingObjects.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CoupledPhysicsHeatingObjects.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CoupledPhysicsHeatingObjects.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CoupledPhysicsHeatingObjects.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CoupledPhysicsHeatingObjects.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CoupledPhysicsHeatingObjects.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CoupledPhysicsHeatingObjects.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CoupledPhysicsHeatingObjects.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CoupledPhysicsHeatingObjects.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CoupledPhysicsHeatingObjects.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CoupledPhysicsHeatingObjects.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CoupledPhysicsHeatingObjects.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CoupledPhysicsHeatingObjects.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CoupledPhysicsHeatingObjects.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CoupledPhysicsHeatingObjects.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CoupledPhysicsHeatingObjects.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CoupledPhysicsHeatingObjects.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CoupledPhysicsHeatingObjects.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CoupledPhysicsHeatingObjects.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CoupledPhysicsHeatingObjects.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CoupledPhysicsHeatingObjects.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CoupledPhysicsHeatingObjects.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CoupledPhysicsHeatingObjects.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CoupledPhysicsHeatingObjects.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CoupledPhysicsHeatingObjects.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CoupledPhysicsHeatingObjects.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CoupledPhysicsHeatingObjects.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CoupledPhysicsHeatingObjects.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CoupledPhysicsHeatingObjects.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CoupledPhysicsHeatingObjects.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CoupledPhysicsHeatingObjects.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CoupledPhysicsHeatingObjects.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CoupledPhysicsHeatingObjects.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CoupledPhysicsHeatingObjects.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CoupledPhysicsHeatingObjects.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CoupledPhysicsHeatingObjects.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CoupledPhysicsHeatingObjects.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#CoupledPhysicsHeatingObjects.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CoupledPhysicsHeatingObjects.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#CoupledPhysicsHeatingObjects.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CoupledPhysicsHeatingObjects.IconName)                               | IconName property.                                            |
| [`Images`](#CoupledPhysicsHeatingObjects.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CoupledPhysicsHeatingObjects.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CoupledPhysicsHeatingObjects.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#CoupledPhysicsHeatingObjects.Name)                                       | Name property.                                                |
| [`ObjectId`](#CoupledPhysicsHeatingObjects.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CoupledPhysicsHeatingObjects.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CoupledPhysicsHeatingObjects.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CoupledPhysicsHeatingObjects.Parent)                                   | Parent property.                                              |
| [`Properties`](#CoupledPhysicsHeatingObjects.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#CoupledPhysicsHeatingObjects.State)                                     | State property.                                               |
| [`Suppressed`](#CoupledPhysicsHeatingObjects.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CoupledPhysicsHeatingObjects.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CoupledPhysicsHeatingObjects.AttachedRefs"></a>

### *property* CoupledPhysicsHeatingObjects.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Children"></a>

### *property* CoupledPhysicsHeatingObjects.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.ClsId"></a>

### *property* CoupledPhysicsHeatingObjects.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Comments"></a>

### *property* CoupledPhysicsHeatingObjects.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.DataModelObjectCategory"></a>

### *property* CoupledPhysicsHeatingObjects.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GroupingFolder"></a>

### *property* CoupledPhysicsHeatingObjects.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.IconName"></a>

### *property* CoupledPhysicsHeatingObjects.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Images"></a>

### *property* CoupledPhysicsHeatingObjects.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.InternalObject"></a>

### *property* CoupledPhysicsHeatingObjects.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Location"></a>

### *property* CoupledPhysicsHeatingObjects.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Name"></a>

### *property* CoupledPhysicsHeatingObjects.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.ObjectId"></a>

### *property* CoupledPhysicsHeatingObjects.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.ObjectState"></a>

### *property* CoupledPhysicsHeatingObjects.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.ObjectTags"></a>

### *property* CoupledPhysicsHeatingObjects.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Parent"></a>

### *property* CoupledPhysicsHeatingObjects.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Properties"></a>

### *property* CoupledPhysicsHeatingObjects.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.State"></a>

### *property* CoupledPhysicsHeatingObjects.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Suppressed"></a>

### *property* CoupledPhysicsHeatingObjects.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.VisibleProperties"></a>

### *property* CoupledPhysicsHeatingObjects.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoupledPhysicsHeatingObjects.Activate"></a>

### CoupledPhysicsHeatingObjects.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.AddComment"></a>

### CoupledPhysicsHeatingObjects.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.AddImage"></a>

### CoupledPhysicsHeatingObjects.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Copy"></a>

### CoupledPhysicsHeatingObjects.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.CopyTo"></a>

### CoupledPhysicsHeatingObjects.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.CreateObjRef"></a>

### CoupledPhysicsHeatingObjects.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.CreateParameter"></a>

### CoupledPhysicsHeatingObjects.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Cut"></a>

### CoupledPhysicsHeatingObjects.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Delete"></a>

### CoupledPhysicsHeatingObjects.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Duplicate"></a>

### CoupledPhysicsHeatingObjects.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Equals"></a>

### CoupledPhysicsHeatingObjects.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetAPIName"></a>

### CoupledPhysicsHeatingObjects.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetAllProperties"></a>

### CoupledPhysicsHeatingObjects.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetChildren"></a>

### CoupledPhysicsHeatingObjects.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CoupledPhysicsHeatingObjects.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetDetailsView"></a>

### CoupledPhysicsHeatingObjects.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetEnumName"></a>

### CoupledPhysicsHeatingObjects.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetHashCode"></a>

### CoupledPhysicsHeatingObjects.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetIconFile"></a>

### CoupledPhysicsHeatingObjects.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetLifetimeService"></a>

### CoupledPhysicsHeatingObjects.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetObjectData"></a>

### CoupledPhysicsHeatingObjects.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetParameter"></a>

### CoupledPhysicsHeatingObjects.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetPath"></a>

### CoupledPhysicsHeatingObjects.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetPropertyName"></a>

### CoupledPhysicsHeatingObjects.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetPropertyValue"></a>

### CoupledPhysicsHeatingObjects.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetVisibleProperties"></a>

### CoupledPhysicsHeatingObjects.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GetVisiblePropertyNames"></a>

### CoupledPhysicsHeatingObjects.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GroupAllSimilarChildren"></a>

### CoupledPhysicsHeatingObjects.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.GroupSimilarObjects"></a>

### CoupledPhysicsHeatingObjects.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.InitializeLifetimeService"></a>

### CoupledPhysicsHeatingObjects.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.IsPropertyEditable"></a>

### CoupledPhysicsHeatingObjects.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CoupledPhysicsHeatingObjects.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.IsPropertyVisible"></a>

### CoupledPhysicsHeatingObjects.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CoupledPhysicsHeatingObjects.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.Paste"></a>

### CoupledPhysicsHeatingObjects.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.PropertyByAPIName"></a>

### CoupledPhysicsHeatingObjects.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.PropertyById"></a>

### CoupledPhysicsHeatingObjects.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.PropertyByName"></a>

### CoupledPhysicsHeatingObjects.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.RemoveFromGroup"></a>

### CoupledPhysicsHeatingObjects.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CoupledPhysicsHeatingObjects.RemoveParameter"></a>

### CoupledPhysicsHeatingObjects.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

