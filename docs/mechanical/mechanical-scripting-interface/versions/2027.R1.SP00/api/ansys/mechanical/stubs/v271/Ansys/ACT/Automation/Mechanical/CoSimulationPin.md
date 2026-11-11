# `CoSimulationPin`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoSimulationPin"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CoSimulationPin(internalObject: Any)

<a id="CoSimulationPin"></a>

### *class* CoSimulationPin(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CoSimulationPin.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CoSimulationPin.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#CoSimulationPin.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CoSimulationPin.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CoSimulationPin.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CoSimulationPin.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CoSimulationPin.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CoSimulationPin.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CoSimulationPin.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CoSimulationPin.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CoSimulationPin.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CoSimulationPin.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CoSimulationPin.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CoSimulationPin.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CoSimulationPin.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CoSimulationPin.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CoSimulationPin.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CoSimulationPin.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CoSimulationPin.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CoSimulationPin.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CoSimulationPin.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CoSimulationPin.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CoSimulationPin.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CoSimulationPin.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CoSimulationPin.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CoSimulationPin.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CoSimulationPin.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CoSimulationPin.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CoSimulationPin.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CoSimulationPin.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CoSimulationPin.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CoSimulationPin.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CoSimulationPin.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CoSimulationPin.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CoSimulationPin.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CoSimulationPin.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CoSimulationPin.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CoSimulationPin.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CoSimulationPin.ClsId)                                     | ClsId property.                                               |
| [`DOF`](#CoSimulationPin.DOF)                                         | Gets or sets the DOF.                                         |
| [`DataModelObjectCategory`](#CoSimulationPin.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#CoSimulationPin.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CoSimulationPin.IconName)                               | IconName property.                                            |
| [`InternalObject`](#CoSimulationPin.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`JointType`](#CoSimulationPin.JointType)                             | Gets or sets the Joint Type.                                  |
| [`Name`](#CoSimulationPin.Name)                                       | Name property.                                                |
| [`ObjectId`](#CoSimulationPin.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CoSimulationPin.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CoSimulationPin.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CoSimulationPin.Parent)                                   | Parent property.                                              |
| [`PinBehavior`](#CoSimulationPin.PinBehavior)                         | Gets or sets the Pin Behavior.                                |
| [`PinNature`](#CoSimulationPin.PinNature)                             | Gets or sets the Pin Nature.                                  |
| [`Properties`](#CoSimulationPin.Properties)                           | Gets the list of properties for this object.                  |
| [`Scope`](#CoSimulationPin.Scope)                                     | Gets or sets the Joint through Scope.                         |
| [`State`](#CoSimulationPin.State)                                     | State property.                                               |
| [`Suppressed`](#CoSimulationPin.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#CoSimulationPin.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CoSimulationPin.AttachedRefs"></a>

### *property* CoSimulationPin.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Children"></a>

### *property* CoSimulationPin.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.ClsId"></a>

### *property* CoSimulationPin.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.DOF"></a>

### *property* CoSimulationPin.DOF *: [Ansys.Mechanical.DataModel.Enums.KinematicDOF](../../../Mechanical/DataModel/Enums/KinematicDOF.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.KinematicDOF) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DOF.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.DataModelObjectCategory"></a>

### *property* CoSimulationPin.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupingFolder"></a>

### *property* CoSimulationPin.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.IconName"></a>

### *property* CoSimulationPin.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.InternalObject"></a>

### *property* CoSimulationPin.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSimplorerPinAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.JointType"></a>

### *property* CoSimulationPin.JointType *: [Ansys.Mechanical.DataModel.Enums.JointType](../../../Mechanical/DataModel/Enums/JointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.JointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Joint Type.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Name"></a>

### *property* CoSimulationPin.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.ObjectId"></a>

### *property* CoSimulationPin.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.ObjectState"></a>

### *property* CoSimulationPin.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.ObjectTags"></a>

### *property* CoSimulationPin.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Parent"></a>

### *property* CoSimulationPin.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PinBehavior"></a>

### *property* CoSimulationPin.PinBehavior *: [Ansys.Mechanical.DataModel.Enums.PinBehavior](../../../Mechanical/DataModel/Enums/PinBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PinBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Pin Behavior.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PinNature"></a>

### *property* CoSimulationPin.PinNature *: [Ansys.Mechanical.DataModel.Enums.PinNature](../../../Mechanical/DataModel/Enums/PinNature.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PinNature) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Pin Nature.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Properties"></a>

### *property* CoSimulationPin.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Scope"></a>

### *property* CoSimulationPin.Scope *: [Ansys.ACT.Automation.Mechanical.Connections.Joint](Connections/Joint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Joint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Joint through Scope.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.State"></a>

### *property* CoSimulationPin.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Suppressed"></a>

### *property* CoSimulationPin.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.VisibleProperties"></a>

### *property* CoSimulationPin.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CoSimulationPin.Activate"></a>

### CoSimulationPin.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Copy"></a>

### CoSimulationPin.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CopyTo"></a>

### CoSimulationPin.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CreateObjRef"></a>

### CoSimulationPin.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.CreateParameter"></a>

### CoSimulationPin.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Cut"></a>

### CoSimulationPin.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Delete"></a>

### CoSimulationPin.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Duplicate"></a>

### CoSimulationPin.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Equals"></a>

### CoSimulationPin.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetAPIName"></a>

### CoSimulationPin.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetAllProperties"></a>

### CoSimulationPin.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetChildren"></a>

### CoSimulationPin.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CoSimulationPin.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetDetailsView"></a>

### CoSimulationPin.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetEnumName"></a>

### CoSimulationPin.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetHashCode"></a>

### CoSimulationPin.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetIconFile"></a>

### CoSimulationPin.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetLifetimeService"></a>

### CoSimulationPin.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetObjectData"></a>

### CoSimulationPin.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetParameter"></a>

### CoSimulationPin.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetPath"></a>

### CoSimulationPin.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetPropertyName"></a>

### CoSimulationPin.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetPropertyValue"></a>

### CoSimulationPin.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetVisibleProperties"></a>

### CoSimulationPin.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GetVisiblePropertyNames"></a>

### CoSimulationPin.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupAllSimilarChildren"></a>

### CoSimulationPin.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.GroupSimilarObjects"></a>

### CoSimulationPin.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.InitializeLifetimeService"></a>

### CoSimulationPin.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.IsPropertyEditable"></a>

### CoSimulationPin.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CoSimulationPin.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.IsPropertyVisible"></a>

### CoSimulationPin.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CoSimulationPin.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.Paste"></a>

### CoSimulationPin.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyByAPIName"></a>

### CoSimulationPin.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyById"></a>

### CoSimulationPin.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.PropertyByName"></a>

### CoSimulationPin.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.RemoveFromGroup"></a>

### CoSimulationPin.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CoSimulationPin.RemoveParameter"></a>

### CoSimulationPin.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

