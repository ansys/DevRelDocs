# `PlasticHeating`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating(internalObject: Any)

<a id="PlasticHeating"></a>

### *class* PlasticHeating(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PlasticHeating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PlasticHeating.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PlasticHeating.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#PlasticHeating.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PlasticHeating.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PlasticHeating.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PlasticHeating.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PlasticHeating.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PlasticHeating.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PlasticHeating.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PlasticHeating.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PlasticHeating.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PlasticHeating.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PlasticHeating.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PlasticHeating.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PlasticHeating.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PlasticHeating.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PlasticHeating.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PlasticHeating.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PlasticHeating.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PlasticHeating.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PlasticHeating.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PlasticHeating.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PlasticHeating.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PlasticHeating.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PlasticHeating.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PlasticHeating.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PlasticHeating.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PlasticHeating.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PlasticHeating.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PlasticHeating.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PlasticHeating.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PlasticHeating.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PlasticHeating.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PlasticHeating.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PlasticHeating.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PlasticHeating.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PlasticHeating.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PlasticHeating.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#PlasticHeating.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#PlasticHeating.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#PlasticHeating.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PlasticHeating.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#PlasticHeating.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#PlasticHeating.IconName)                               | IconName property.                                            |
| [`Images`](#PlasticHeating.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PlasticHeating.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PlasticHeating.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#PlasticHeating.Name)                                       | Name property.                                                |
| [`ObjectId`](#PlasticHeating.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#PlasticHeating.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#PlasticHeating.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#PlasticHeating.Parent)                                   | Parent property.                                              |
| [`PlasticWorkFraction`](#PlasticHeating.PlasticWorkFraction)         | Gets or sets the PlasticWorkFraction.                         |
| [`Properties`](#PlasticHeating.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#PlasticHeating.State)                                     | State property.                                               |
| [`Suppressed`](#PlasticHeating.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PlasticHeating.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PlasticHeating.AttachedRefs"></a>

### *property* PlasticHeating.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Children"></a>

### *property* PlasticHeating.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.ClsId"></a>

### *property* PlasticHeating.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Comments"></a>

### *property* PlasticHeating.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.DataModelObjectCategory"></a>

### *property* PlasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupingFolder"></a>

### *property* PlasticHeating.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.IconName"></a>

### *property* PlasticHeating.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Images"></a>

### *property* PlasticHeating.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.InternalObject"></a>

### *property* PlasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Location"></a>

### *property* PlasticHeating.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Name"></a>

### *property* PlasticHeating.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.ObjectId"></a>

### *property* PlasticHeating.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.ObjectState"></a>

### *property* PlasticHeating.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.ObjectTags"></a>

### *property* PlasticHeating.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Parent"></a>

### *property* PlasticHeating.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PlasticWorkFraction"></a>

### *property* PlasticHeating.PlasticWorkFraction *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PlasticWorkFraction.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Properties"></a>

### *property* PlasticHeating.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.State"></a>

### *property* PlasticHeating.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Suppressed"></a>

### *property* PlasticHeating.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.VisibleProperties"></a>

### *property* PlasticHeating.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PlasticHeating.Activate"></a>

### PlasticHeating.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.AddComment"></a>

### PlasticHeating.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.AddImage"></a>

### PlasticHeating.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Copy"></a>

### PlasticHeating.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CopyTo"></a>

### PlasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CreateObjRef"></a>

### PlasticHeating.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.CreateParameter"></a>

### PlasticHeating.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Cut"></a>

### PlasticHeating.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Delete"></a>

### PlasticHeating.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Duplicate"></a>

### PlasticHeating.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Equals"></a>

### PlasticHeating.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetAPIName"></a>

### PlasticHeating.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetAllProperties"></a>

### PlasticHeating.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetChildren"></a>

### PlasticHeating.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PlasticHeating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetDetailsView"></a>

### PlasticHeating.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetEnumName"></a>

### PlasticHeating.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetHashCode"></a>

### PlasticHeating.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetIconFile"></a>

### PlasticHeating.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetLifetimeService"></a>

### PlasticHeating.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetObjectData"></a>

### PlasticHeating.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetParameter"></a>

### PlasticHeating.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetPath"></a>

### PlasticHeating.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetPropertyName"></a>

### PlasticHeating.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetPropertyValue"></a>

### PlasticHeating.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetVisibleProperties"></a>

### PlasticHeating.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GetVisiblePropertyNames"></a>

### PlasticHeating.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupAllSimilarChildren"></a>

### PlasticHeating.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.GroupSimilarObjects"></a>

### PlasticHeating.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.InitializeLifetimeService"></a>

### PlasticHeating.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.IsPropertyEditable"></a>

### PlasticHeating.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PlasticHeating.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.IsPropertyVisible"></a>

### PlasticHeating.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PlasticHeating.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.Paste"></a>

### PlasticHeating.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyByAPIName"></a>

### PlasticHeating.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyById"></a>

### PlasticHeating.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.PropertyByName"></a>

### PlasticHeating.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.RemoveFromGroup"></a>

### PlasticHeating.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PlasticHeating.RemoveParameter"></a>

### PlasticHeating.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

