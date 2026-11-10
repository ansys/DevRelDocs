# `ComplianceConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ComplianceConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ComplianceConstraint(internalObject: Any)

<a id="ComplianceConstraint"></a>

### *class* ComplianceConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ComplianceConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ComplianceConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#ComplianceConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ComplianceConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ComplianceConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ComplianceConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ComplianceConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ComplianceConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ComplianceConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ComplianceConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ComplianceConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ComplianceConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ComplianceConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ComplianceConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ComplianceConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ComplianceConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ComplianceConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ComplianceConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ComplianceConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ComplianceConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ComplianceConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ComplianceConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ComplianceConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ComplianceConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ComplianceConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ComplianceConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ComplianceConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ComplianceConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ComplianceConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ComplianceConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ComplianceConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ComplianceConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ComplianceConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ComplianceConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ComplianceConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ComplianceConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ComplianceConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ComplianceConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Children`](#ComplianceConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#ComplianceConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`ComplianceLimit`](#ComplianceConstraint.ComplianceLimit)                 | Gets or sets the ComplianceLimit.                                                                                                                                                                                                                                                                                                             |
| [`DataModelObjectCategory`](#ComplianceConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`EnvironmentSelection`](#ComplianceConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#ComplianceConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#ComplianceConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InternalObject`](#ComplianceConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`Name`](#ComplianceConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#ComplianceConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#ComplianceConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#ComplianceConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#ComplianceConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`Properties`](#ComplianceConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`State`](#ComplianceConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`Suppressed`](#ComplianceConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#ComplianceConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="ComplianceConstraint.AttachedRefs"></a>

### *property* ComplianceConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Children"></a>

### *property* ComplianceConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.ClsId"></a>

### *property* ComplianceConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.ComplianceLimit"></a>

### *property* ComplianceConstraint.ComplianceLimit *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ComplianceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.DataModelObjectCategory"></a>

### *property* ComplianceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.EnvironmentSelection"></a>

### *property* ComplianceConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GroupingFolder"></a>

### *property* ComplianceConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.IconName"></a>

### *property* ComplianceConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.InternalObject"></a>

### *property* ComplianceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Name"></a>

### *property* ComplianceConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.ObjectId"></a>

### *property* ComplianceConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.ObjectState"></a>

### *property* ComplianceConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.ObjectTags"></a>

### *property* ComplianceConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Parent"></a>

### *property* ComplianceConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Properties"></a>

### *property* ComplianceConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.State"></a>

### *property* ComplianceConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Suppressed"></a>

### *property* ComplianceConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.VisibleProperties"></a>

### *property* ComplianceConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ComplianceConstraint.Activate"></a>

### ComplianceConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Copy"></a>

### ComplianceConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.CopyTo"></a>

### ComplianceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.CreateObjRef"></a>

### ComplianceConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.CreateParameter"></a>

### ComplianceConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Cut"></a>

### ComplianceConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Delete"></a>

### ComplianceConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Duplicate"></a>

### ComplianceConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Equals"></a>

### ComplianceConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetAPIName"></a>

### ComplianceConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetAllProperties"></a>

### ComplianceConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetChildren"></a>

### ComplianceConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ComplianceConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetDetailsView"></a>

### ComplianceConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetEnumName"></a>

### ComplianceConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetHashCode"></a>

### ComplianceConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetIconFile"></a>

### ComplianceConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetLifetimeService"></a>

### ComplianceConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetObjectData"></a>

### ComplianceConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetParameter"></a>

### ComplianceConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetPath"></a>

### ComplianceConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetPropertyName"></a>

### ComplianceConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetPropertyValue"></a>

### ComplianceConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetVisibleProperties"></a>

### ComplianceConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetVisiblePropertyNames"></a>

### ComplianceConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GroupAllSimilarChildren"></a>

### ComplianceConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GroupSimilarObjects"></a>

### ComplianceConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.InitializeLifetimeService"></a>

### ComplianceConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.IsPropertyEditable"></a>

### ComplianceConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ComplianceConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.IsPropertyVisible"></a>

### ComplianceConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ComplianceConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Paste"></a>

### ComplianceConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.PropertyByAPIName"></a>

### ComplianceConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.PropertyById"></a>

### ComplianceConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.PropertyByName"></a>

### ComplianceConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.RemoveFromGroup"></a>

### ComplianceConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.RemoveParameter"></a>

### ComplianceConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.RenameBasedOnDefinition"></a>

### ComplianceConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

