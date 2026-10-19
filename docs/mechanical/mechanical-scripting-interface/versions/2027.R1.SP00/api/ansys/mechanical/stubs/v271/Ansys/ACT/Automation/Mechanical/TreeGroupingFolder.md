# `TreeGroupingFolder`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.TreeGroupingFolder(internalObject: Any)

<a id="TreeGroupingFolder"></a>

### *class* TreeGroupingFolder(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TreeGroupingFolder.Activate)                                     | Activate the current object.                                                                |
| [`AddObject`](#TreeGroupingFolder.AddObject)                                   | Adds an object to this folder                                                               |
| [`Copy`](#TreeGroupingFolder.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TreeGroupingFolder.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TreeGroupingFolder.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TreeGroupingFolder.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#TreeGroupingFolder.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`DeleteTreeGroupAndChildren`](#TreeGroupingFolder.DeleteTreeGroupAndChildren) | Run the DeleteTreeGroupAndChildren action.                                                  |
| [`Duplicate`](#TreeGroupingFolder.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#TreeGroupingFolder.Equals)                                         | Equals method.                                                                              |
| [`GetAPIName`](#TreeGroupingFolder.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#TreeGroupingFolder.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#TreeGroupingFolder.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TreeGroupingFolder.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TreeGroupingFolder.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#TreeGroupingFolder.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#TreeGroupingFolder.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TreeGroupingFolder.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#TreeGroupingFolder.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#TreeGroupingFolder.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TreeGroupingFolder.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#TreeGroupingFolder.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TreeGroupingFolder.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#TreeGroupingFolder.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TreeGroupingFolder.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TreeGroupingFolder.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TreeGroupingFolder.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TreeGroupingFolder.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TreeGroupingFolder.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TreeGroupingFolder.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#TreeGroupingFolder.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#TreeGroupingFolder.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#TreeGroupingFolder.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#TreeGroupingFolder.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TreeGroupingFolder.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TreeGroupingFolder.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |
| [`Ungroup`](#TreeGroupingFolder.Ungroup)                                       | Run the Ungroup action.                                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#TreeGroupingFolder.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#TreeGroupingFolder.Children)                                 | Gets the list of children.                                    |
| [`ChildrenInGroup`](#TreeGroupingFolder.ChildrenInGroup)                   | Gets the ChildrenInGroup.                                     |
| [`ClsId`](#TreeGroupingFolder.ClsId)                                       | ClsId property.                                               |
| [`DataModelObjectCategory`](#TreeGroupingFolder.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#TreeGroupingFolder.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#TreeGroupingFolder.IconName)                                 | IconName property.                                            |
| [`ImportableObjectSourceId`](#TreeGroupingFolder.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#TreeGroupingFolder.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#TreeGroupingFolder.Name)                                         | Name property.                                                |
| [`ObjectId`](#TreeGroupingFolder.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#TreeGroupingFolder.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#TreeGroupingFolder.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#TreeGroupingFolder.Parent)                                     | Parent property.                                              |
| [`Properties`](#TreeGroupingFolder.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#TreeGroupingFolder.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#TreeGroupingFolder.State)                                       | State property.                                               |
| [`Suppressed`](#TreeGroupingFolder.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#TreeGroupingFolder.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#TreeGroupingFolder.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TreeGroupingFolder.AttachedRefs"></a>

### *property* TreeGroupingFolder.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Children"></a>

### *property* TreeGroupingFolder.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ChildrenInGroup"></a>

### *property* TreeGroupingFolder.ChildrenInGroup *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ChildrenInGroup.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ClsId"></a>

### *property* TreeGroupingFolder.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.DataModelObjectCategory"></a>

### *property* TreeGroupingFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupingFolder"></a>

### *property* TreeGroupingFolder.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.IconName"></a>

### *property* TreeGroupingFolder.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ImportableObjectSourceId"></a>

### *property* TreeGroupingFolder.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.InternalObject"></a>

### *property* TreeGroupingFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTreeGroupingFolderAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Name"></a>

### *property* TreeGroupingFolder.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ObjectId"></a>

### *property* TreeGroupingFolder.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ObjectState"></a>

### *property* TreeGroupingFolder.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ObjectTags"></a>

### *property* TreeGroupingFolder.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Parent"></a>

### *property* TreeGroupingFolder.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Properties"></a>

### *property* TreeGroupingFolder.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ReadOnly"></a>

### *property* TreeGroupingFolder.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.State"></a>

### *property* TreeGroupingFolder.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Suppressed"></a>

### *property* TreeGroupingFolder.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.TransferableObjectId"></a>

### *property* TreeGroupingFolder.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.VisibleProperties"></a>

### *property* TreeGroupingFolder.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TreeGroupingFolder.Activate"></a>

### TreeGroupingFolder.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.AddObject"></a>

### TreeGroupingFolder.AddObject(child: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds an object to this folder

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Copy"></a>

### TreeGroupingFolder.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CopyTo"></a>

### TreeGroupingFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CreateObjRef"></a>

### TreeGroupingFolder.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CreateParameter"></a>

### TreeGroupingFolder.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Cut"></a>

### TreeGroupingFolder.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.DeleteTreeGroupAndChildren"></a>

### TreeGroupingFolder.DeleteTreeGroupAndChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the DeleteTreeGroupAndChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Duplicate"></a>

### TreeGroupingFolder.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Equals"></a>

### TreeGroupingFolder.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetAPIName"></a>

### TreeGroupingFolder.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetAllProperties"></a>

### TreeGroupingFolder.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetChildren"></a>

### TreeGroupingFolder.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TreeGroupingFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetDetailsView"></a>

### TreeGroupingFolder.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetEnumName"></a>

### TreeGroupingFolder.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetHashCode"></a>

### TreeGroupingFolder.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetIconFile"></a>

### TreeGroupingFolder.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetLifetimeService"></a>

### TreeGroupingFolder.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetObjectData"></a>

### TreeGroupingFolder.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetParameter"></a>

### TreeGroupingFolder.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetPath"></a>

### TreeGroupingFolder.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetPropertyName"></a>

### TreeGroupingFolder.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetPropertyValue"></a>

### TreeGroupingFolder.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetVisibleProperties"></a>

### TreeGroupingFolder.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetVisiblePropertyNames"></a>

### TreeGroupingFolder.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupAllSimilarChildren"></a>

### TreeGroupingFolder.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupSimilarObjects"></a>

### TreeGroupingFolder.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.InitializeLifetimeService"></a>

### TreeGroupingFolder.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.IsPropertyEditable"></a>

### TreeGroupingFolder.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TreeGroupingFolder.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.IsPropertyVisible"></a>

### TreeGroupingFolder.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TreeGroupingFolder.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Paste"></a>

### TreeGroupingFolder.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyByAPIName"></a>

### TreeGroupingFolder.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyById"></a>

### TreeGroupingFolder.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyByName"></a>

### TreeGroupingFolder.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.RemoveFromGroup"></a>

### TreeGroupingFolder.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.RemoveParameter"></a>

### TreeGroupingFolder.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Ungroup"></a>

### TreeGroupingFolder.Ungroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Ungroup action.

<!-- !! processed by numpydoc !! -->

