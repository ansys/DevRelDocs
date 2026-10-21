# `NodalOrientation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation(internalObject: Any)

<a id="NodalOrientation"></a>

### *class* NodalOrientation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NodalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NodalOrientation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#NodalOrientation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#NodalOrientation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#NodalOrientation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NodalOrientation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NodalOrientation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NodalOrientation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NodalOrientation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NodalOrientation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NodalOrientation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NodalOrientation.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#NodalOrientation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NodalOrientation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NodalOrientation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NodalOrientation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NodalOrientation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NodalOrientation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NodalOrientation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NodalOrientation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NodalOrientation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NodalOrientation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NodalOrientation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NodalOrientation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NodalOrientation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NodalOrientation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NodalOrientation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NodalOrientation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NodalOrientation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NodalOrientation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NodalOrientation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NodalOrientation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NodalOrientation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NodalOrientation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NodalOrientation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NodalOrientation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NodalOrientation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NodalOrientation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#NodalOrientation.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#NodalOrientation.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#NodalOrientation.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#NodalOrientation.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)          | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#NodalOrientation.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#NodalOrientation.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#NodalOrientation.IconName)                               | IconName property.                                            |
| [`Images`](#NodalOrientation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NodalOrientation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#NodalOrientation.Location)                               | Gets the Location.                                            |
| [`Name`](#NodalOrientation.Name)                                       | Name property.                                                |
| [`ObjectId`](#NodalOrientation.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#NodalOrientation.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#NodalOrientation.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#NodalOrientation.Parent)                                   | Parent property.                                              |
| [`Properties`](#NodalOrientation.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#NodalOrientation.State)                                     | State property.                                               |
| [`Suppressed`](#NodalOrientation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#NodalOrientation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodalOrientation.AttachedRefs"></a>

### *property* NodalOrientation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Children"></a>

### *property* NodalOrientation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.ClsId"></a>

### *property* NodalOrientation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Comments"></a>

### *property* NodalOrientation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CoordinateSystem"></a>

### *property* NodalOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.DataModelObjectCategory"></a>

### *property* NodalOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupingFolder"></a>

### *property* NodalOrientation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.IconName"></a>

### *property* NodalOrientation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Images"></a>

### *property* NodalOrientation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.InternalObject"></a>

### *property* NodalOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodalRotationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Location"></a>

### *property* NodalOrientation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Name"></a>

### *property* NodalOrientation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.ObjectId"></a>

### *property* NodalOrientation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.ObjectState"></a>

### *property* NodalOrientation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.ObjectTags"></a>

### *property* NodalOrientation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Parent"></a>

### *property* NodalOrientation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Properties"></a>

### *property* NodalOrientation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.State"></a>

### *property* NodalOrientation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Suppressed"></a>

### *property* NodalOrientation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.VisibleProperties"></a>

### *property* NodalOrientation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalOrientation.Activate"></a>

### NodalOrientation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.AddComment"></a>

### NodalOrientation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.AddImage"></a>

### NodalOrientation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Copy"></a>

### NodalOrientation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CopyTo"></a>

### NodalOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CreateObjRef"></a>

### NodalOrientation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CreateParameter"></a>

### NodalOrientation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Cut"></a>

### NodalOrientation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Delete"></a>

### NodalOrientation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Duplicate"></a>

### NodalOrientation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Equals"></a>

### NodalOrientation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetAPIName"></a>

### NodalOrientation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetAllProperties"></a>

### NodalOrientation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetChildren"></a>

### NodalOrientation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NodalOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetDetailsView"></a>

### NodalOrientation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetEnumName"></a>

### NodalOrientation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetHashCode"></a>

### NodalOrientation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetIconFile"></a>

### NodalOrientation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetLifetimeService"></a>

### NodalOrientation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetObjectData"></a>

### NodalOrientation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetParameter"></a>

### NodalOrientation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetPath"></a>

### NodalOrientation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetPropertyName"></a>

### NodalOrientation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetPropertyValue"></a>

### NodalOrientation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetVisibleProperties"></a>

### NodalOrientation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetVisiblePropertyNames"></a>

### NodalOrientation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupAllSimilarChildren"></a>

### NodalOrientation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupSimilarObjects"></a>

### NodalOrientation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.InitializeLifetimeService"></a>

### NodalOrientation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.IsPropertyEditable"></a>

### NodalOrientation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodalOrientation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.IsPropertyVisible"></a>

### NodalOrientation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodalOrientation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Paste"></a>

### NodalOrientation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyByAPIName"></a>

### NodalOrientation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyById"></a>

### NodalOrientation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyByName"></a>

### NodalOrientation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.RemoveFromGroup"></a>

### NodalOrientation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.RemoveParameter"></a>

### NodalOrientation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

