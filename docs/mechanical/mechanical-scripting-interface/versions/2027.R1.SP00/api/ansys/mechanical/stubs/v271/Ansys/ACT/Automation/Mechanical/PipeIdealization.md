# `PipeIdealization`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PipeIdealization"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PipeIdealization(internalObject: Any)

<a id="PipeIdealization"></a>

### *class* PipeIdealization(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PipeIdealization.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PipeIdealization.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#PipeIdealization.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PipeIdealization.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PipeIdealization.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PipeIdealization.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PipeIdealization.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PipeIdealization.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PipeIdealization.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PipeIdealization.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PipeIdealization.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PipeIdealization.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PipeIdealization.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PipeIdealization.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PipeIdealization.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PipeIdealization.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PipeIdealization.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PipeIdealization.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PipeIdealization.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PipeIdealization.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PipeIdealization.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PipeIdealization.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PipeIdealization.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PipeIdealization.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PipeIdealization.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PipeIdealization.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PipeIdealization.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PipeIdealization.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PipeIdealization.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PipeIdealization.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PipeIdealization.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PipeIdealization.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PipeIdealization.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PipeIdealization.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PipeIdealization.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PipeIdealization.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PipeIdealization.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#PipeIdealization.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#PipeIdealization.ClsId)                                     | ClsId property.                                               |
| [`DataModelObjectCategory`](#PipeIdealization.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Extend`](#PipeIdealization.Extend)                                   | Gets or sets the Extend.                                      |
| [`Factor`](#PipeIdealization.Factor)                                   | Gets or sets the Factor.                                      |
| [`GeometrySelection`](#PipeIdealization.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`GroupingFolder`](#PipeIdealization.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#PipeIdealization.IconName)                               | IconName property.                                            |
| [`InternalObject`](#PipeIdealization.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#PipeIdealization.Name)                                       | Name property.                                                |
| [`ObjectId`](#PipeIdealization.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#PipeIdealization.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#PipeIdealization.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#PipeIdealization.Parent)                                   | Parent property.                                              |
| [`Properties`](#PipeIdealization.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#PipeIdealization.State)                                     | State property.                                               |
| [`Suppressed`](#PipeIdealization.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PipeIdealization.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PipeIdealization.AttachedRefs"></a>

### *property* PipeIdealization.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Children"></a>

### *property* PipeIdealization.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.ClsId"></a>

### *property* PipeIdealization.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.DataModelObjectCategory"></a>

### *property* PipeIdealization.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Extend"></a>

### *property* PipeIdealization.Extend *: [Ansys.Mechanical.DataModel.Enums.GrowElbowElementsBy](../../../Mechanical/DataModel/Enums/GrowElbowElementsBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GrowElbowElementsBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Extend.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Factor"></a>

### *property* PipeIdealization.Factor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Factor.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GeometrySelection"></a>

### *property* PipeIdealization.GeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GroupingFolder"></a>

### *property* PipeIdealization.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.IconName"></a>

### *property* PipeIdealization.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.InternalObject"></a>

### *property* PipeIdealization.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPipeIdealizationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Name"></a>

### *property* PipeIdealization.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.ObjectId"></a>

### *property* PipeIdealization.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.ObjectState"></a>

### *property* PipeIdealization.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.ObjectTags"></a>

### *property* PipeIdealization.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Parent"></a>

### *property* PipeIdealization.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Properties"></a>

### *property* PipeIdealization.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.State"></a>

### *property* PipeIdealization.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Suppressed"></a>

### *property* PipeIdealization.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.VisibleProperties"></a>

### *property* PipeIdealization.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PipeIdealization.Activate"></a>

### PipeIdealization.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Copy"></a>

### PipeIdealization.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.CopyTo"></a>

### PipeIdealization.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.CreateObjRef"></a>

### PipeIdealization.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.CreateParameter"></a>

### PipeIdealization.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Cut"></a>

### PipeIdealization.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Delete"></a>

### PipeIdealization.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Duplicate"></a>

### PipeIdealization.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Equals"></a>

### PipeIdealization.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetAPIName"></a>

### PipeIdealization.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetAllProperties"></a>

### PipeIdealization.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetChildren"></a>

### PipeIdealization.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PipeIdealization.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetDetailsView"></a>

### PipeIdealization.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetEnumName"></a>

### PipeIdealization.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetHashCode"></a>

### PipeIdealization.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetIconFile"></a>

### PipeIdealization.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetLifetimeService"></a>

### PipeIdealization.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetObjectData"></a>

### PipeIdealization.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetParameter"></a>

### PipeIdealization.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetPath"></a>

### PipeIdealization.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetPropertyName"></a>

### PipeIdealization.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetPropertyValue"></a>

### PipeIdealization.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetVisibleProperties"></a>

### PipeIdealization.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GetVisiblePropertyNames"></a>

### PipeIdealization.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GroupAllSimilarChildren"></a>

### PipeIdealization.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.GroupSimilarObjects"></a>

### PipeIdealization.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.InitializeLifetimeService"></a>

### PipeIdealization.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.IsPropertyEditable"></a>

### PipeIdealization.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PipeIdealization.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.IsPropertyVisible"></a>

### PipeIdealization.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PipeIdealization.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.Paste"></a>

### PipeIdealization.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.PropertyByAPIName"></a>

### PipeIdealization.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.PropertyById"></a>

### PipeIdealization.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.PropertyByName"></a>

### PipeIdealization.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.RemoveFromGroup"></a>

### PipeIdealization.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PipeIdealization.RemoveParameter"></a>

### PipeIdealization.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

