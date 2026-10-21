# `PSDPressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDPressure(internalObject: Any)

<a id="PSDPressure"></a>

### *class* PSDPressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PSDPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PSDPressure.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#PSDPressure.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PSDPressure.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PSDPressure.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PSDPressure.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PSDPressure.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#PSDPressure.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PSDPressure.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PSDPressure.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PSDPressure.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetDetailsView`](#PSDPressure.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PSDPressure.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PSDPressure.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PSDPressure.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PSDPressure.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PSDPressure.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PSDPressure.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PSDPressure.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PSDPressure.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PSDPressure.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PSDPressure.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PSDPressure.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PSDPressure.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PSDPressure.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PSDPressure.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PSDPressure.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PSDPressure.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PSDPressure.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PSDPressure.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PSDPressure.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PSDPressure.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PSDPressure.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PSDPressure.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PSDPressure.AttachedRefs)                       | AttachedRefs property.                                        |
| [`ClsId`](#PSDPressure.ClsId)                                     | ClsId property.                                               |
| [`Component`](#PSDPressure.Component)                             |                                                               |
| [`DataModelObjectCategory`](#PSDPressure.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#PSDPressure.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#PSDPressure.IconName)                               | IconName property.                                            |
| [`InternalObject`](#PSDPressure.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDPressure.LoadData)                               |                                                               |
| [`Name`](#PSDPressure.Name)                                       | Name property.                                                |
| [`ObjectId`](#PSDPressure.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#PSDPressure.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#PSDPressure.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#PSDPressure.Parent)                                   | Parent property.                                              |
| [`Properties`](#PSDPressure.Properties)                           | Gets the list of properties for this object.                  |
| [`Source`](#PSDPressure.Source)                                   |                                                               |
| [`State`](#PSDPressure.State)                                     | State property.                                               |
| [`Suppressed`](#PSDPressure.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PSDPressure.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDPressure.AttachedRefs"></a>

### *property* PSDPressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.ClsId"></a>

### *property* PSDPressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Component"></a>

### *property* PSDPressure.Component *: [Ansys.Mechanical.DataModel.Enums.LoadComponentType](../../../../Mechanical/DataModel/Enums/LoadComponentType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadComponentType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="PSDPressure.DataModelObjectCategory"></a>

### *property* PSDPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GroupingFolder"></a>

### *property* PSDPressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.IconName"></a>

### *property* PSDPressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.InternalObject"></a>

### *property* PSDPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.LoadData"></a>

### *property* PSDPressure.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="PSDPressure.Name"></a>

### *property* PSDPressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.ObjectId"></a>

### *property* PSDPressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.ObjectState"></a>

### *property* PSDPressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.ObjectTags"></a>

### *property* PSDPressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Parent"></a>

### *property* PSDPressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Properties"></a>

### *property* PSDPressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Source"></a>

### *property* PSDPressure.Source *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="PSDPressure.State"></a>

### *property* PSDPressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Suppressed"></a>

### *property* PSDPressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.VisibleProperties"></a>

### *property* PSDPressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDPressure.Activate"></a>

### PSDPressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Copy"></a>

### PSDPressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.CopyTo"></a>

### PSDPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.CreateObjRef"></a>

### PSDPressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.CreateParameter"></a>

### PSDPressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Cut"></a>

### PSDPressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Duplicate"></a>

### PSDPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Equals"></a>

### PSDPressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetAPIName"></a>

### PSDPressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetAllProperties"></a>

### PSDPressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetDetailsView"></a>

### PSDPressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetEnumName"></a>

### PSDPressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetHashCode"></a>

### PSDPressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetIconFile"></a>

### PSDPressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetLifetimeService"></a>

### PSDPressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetObjectData"></a>

### PSDPressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetParameter"></a>

### PSDPressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetPath"></a>

### PSDPressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetPropertyName"></a>

### PSDPressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetPropertyValue"></a>

### PSDPressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetVisibleProperties"></a>

### PSDPressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GetVisiblePropertyNames"></a>

### PSDPressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GroupAllSimilarChildren"></a>

### PSDPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.GroupSimilarObjects"></a>

### PSDPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.InitializeLifetimeService"></a>

### PSDPressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.IsPropertyEditable"></a>

### PSDPressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDPressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.IsPropertyVisible"></a>

### PSDPressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDPressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.Paste"></a>

### PSDPressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.PropertyByAPIName"></a>

### PSDPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.PropertyById"></a>

### PSDPressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.PropertyByName"></a>

### PSDPressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.RemoveFromGroup"></a>

### PSDPressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PSDPressure.RemoveParameter"></a>

### PSDPressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

