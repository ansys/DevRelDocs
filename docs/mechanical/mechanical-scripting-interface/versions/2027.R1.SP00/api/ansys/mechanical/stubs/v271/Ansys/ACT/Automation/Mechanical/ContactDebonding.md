# `ContactDebonding`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactDebonding"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactDebonding(internalObject: Any)

<a id="ContactDebonding"></a>

### *class* ContactDebonding(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactDebonding.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactDebonding.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#ContactDebonding.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`Copy`](#ContactDebonding.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactDebonding.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactDebonding.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactDebonding.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactDebonding.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactDebonding.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactDebonding.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactDebonding.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ContactDebonding.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactDebonding.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetDetailsView`](#ContactDebonding.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactDebonding.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactDebonding.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactDebonding.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactDebonding.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactDebonding.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactDebonding.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactDebonding.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactDebonding.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactDebonding.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactDebonding.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactDebonding.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactDebonding.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactDebonding.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactDebonding.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactDebonding.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactDebonding.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactDebonding.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactDebonding.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactDebonding.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactDebonding.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactDebonding.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactDebonding.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactDebonding.AttachedRefs)                       | AttachedRefs property.                                        |
| [`ClsId`](#ContactDebonding.ClsId)                                     | ClsId property.                                               |
| [`ContactRegion`](Connections/ContactRegion.md#ContactRegion)          | Gets or sets the ContactRegion.                               |
| [`CriticalRate`](#ContactDebonding.CriticalRate)                       | Gets or sets the CriticalRate.                                |
| [`DataModelObjectCategory`](#ContactDebonding.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GenerationMethod`](#ContactDebonding.GenerationMethod)               | Gets or sets the GenerationMethod.                            |
| [`GroupingFolder`](#ContactDebonding.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactDebonding.IconName)                               | IconName property.                                            |
| [`InitialCrack`](#ContactDebonding.InitialCrack)                       | Gets or sets the InitialCrack.                                |
| [`InitialTimeStep`](#ContactDebonding.InitialTimeStep)                 | Gets or sets the InitialTimeStep.                             |
| [`InternalObject`](#ContactDebonding.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                     | Gets or sets the Material.                                    |
| [`MaximumTimeStep`](#ContactDebonding.MaximumTimeStep)                 | Gets or sets the MaximumTimeStep.                             |
| [`Method`](#ContactDebonding.Method)                                   | Gets or sets the Method.                                      |
| [`MinimumTimeStep`](#ContactDebonding.MinimumTimeStep)                 | Gets or sets the MinimumTimeStep.                             |
| [`Name`](#ContactDebonding.Name)                                       | Name property.                                                |
| [`ObjectId`](#ContactDebonding.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactDebonding.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactDebonding.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactDebonding.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactDebonding.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ContactDebonding.State)                                     | State property.                                               |
| [`Suppressed`](#ContactDebonding.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Type`](#ContactDebonding.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ContactDebonding.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactDebonding.AttachedRefs"></a>

### *property* ContactDebonding.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.ClsId"></a>

### *property* ContactDebonding.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.ContactRegion"></a>

### *property* ContactDebonding.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CriticalRate"></a>

### *property* ContactDebonding.CriticalRate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.DataModelObjectCategory"></a>

### *property* ContactDebonding.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GenerationMethod"></a>

### *property* ContactDebonding.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](../../../Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupingFolder"></a>

### *property* ContactDebonding.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.IconName"></a>

### *property* ContactDebonding.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitialCrack"></a>

### *property* ContactDebonding.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitialTimeStep"></a>

### *property* ContactDebonding.InitialTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InternalObject"></a>

### *property* ContactDebonding.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Material"></a>

### *property* ContactDebonding.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.MaximumTimeStep"></a>

### *property* ContactDebonding.MaximumTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Method"></a>

### *property* ContactDebonding.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.MinimumTimeStep"></a>

### *property* ContactDebonding.MinimumTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Name"></a>

### *property* ContactDebonding.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.ObjectId"></a>

### *property* ContactDebonding.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.ObjectState"></a>

### *property* ContactDebonding.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.ObjectTags"></a>

### *property* ContactDebonding.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Parent"></a>

### *property* ContactDebonding.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Properties"></a>

### *property* ContactDebonding.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.State"></a>

### *property* ContactDebonding.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Suppressed"></a>

### *property* ContactDebonding.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Type"></a>

### *property* ContactDebonding.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.VisibleProperties"></a>

### *property* ContactDebonding.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDebonding.Activate"></a>

### ContactDebonding.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.AddCommandSnippet"></a>

### ContactDebonding.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Copy"></a>

### ContactDebonding.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CopyTo"></a>

### ContactDebonding.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CreateObjRef"></a>

### ContactDebonding.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CreateParameter"></a>

### ContactDebonding.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Cut"></a>

### ContactDebonding.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Delete"></a>

### ContactDebonding.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Duplicate"></a>

### ContactDebonding.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Equals"></a>

### ContactDebonding.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetAPIName"></a>

### ContactDebonding.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetAllProperties"></a>

### ContactDebonding.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetDetailsView"></a>

### ContactDebonding.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetEnumName"></a>

### ContactDebonding.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetHashCode"></a>

### ContactDebonding.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetIconFile"></a>

### ContactDebonding.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetLifetimeService"></a>

### ContactDebonding.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetObjectData"></a>

### ContactDebonding.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetParameter"></a>

### ContactDebonding.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetPath"></a>

### ContactDebonding.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetPropertyName"></a>

### ContactDebonding.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetPropertyValue"></a>

### ContactDebonding.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetVisibleProperties"></a>

### ContactDebonding.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetVisiblePropertyNames"></a>

### ContactDebonding.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupAllSimilarChildren"></a>

### ContactDebonding.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupSimilarObjects"></a>

### ContactDebonding.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitializeLifetimeService"></a>

### ContactDebonding.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.IsPropertyEditable"></a>

### ContactDebonding.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDebonding.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.IsPropertyVisible"></a>

### ContactDebonding.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDebonding.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Paste"></a>

### ContactDebonding.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyByAPIName"></a>

### ContactDebonding.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyById"></a>

### ContactDebonding.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyByName"></a>

### ContactDebonding.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.RemoveFromGroup"></a>

### ContactDebonding.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.RemoveParameter"></a>

### ContactDebonding.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

