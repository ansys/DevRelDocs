# `GlobalVonMisesStressConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GlobalVonMisesStressConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GlobalVonMisesStressConstraint(internalObject: Any)

<a id="GlobalVonMisesStressConstraint"></a>

### *class* GlobalVonMisesStressConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GlobalVonMisesStressConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GlobalVonMisesStressConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#GlobalVonMisesStressConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GlobalVonMisesStressConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GlobalVonMisesStressConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GlobalVonMisesStressConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GlobalVonMisesStressConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GlobalVonMisesStressConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GlobalVonMisesStressConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GlobalVonMisesStressConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GlobalVonMisesStressConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GlobalVonMisesStressConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GlobalVonMisesStressConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GlobalVonMisesStressConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GlobalVonMisesStressConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GlobalVonMisesStressConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GlobalVonMisesStressConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GlobalVonMisesStressConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GlobalVonMisesStressConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GlobalVonMisesStressConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GlobalVonMisesStressConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GlobalVonMisesStressConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GlobalVonMisesStressConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GlobalVonMisesStressConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GlobalVonMisesStressConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GlobalVonMisesStressConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GlobalVonMisesStressConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GlobalVonMisesStressConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GlobalVonMisesStressConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GlobalVonMisesStressConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GlobalVonMisesStressConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GlobalVonMisesStressConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GlobalVonMisesStressConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GlobalVonMisesStressConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GlobalVonMisesStressConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GlobalVonMisesStressConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#GlobalVonMisesStressConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#GlobalVonMisesStressConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Children`](#GlobalVonMisesStressConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#GlobalVonMisesStressConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`DataModelObjectCategory`](#GlobalVonMisesStressConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`EnvironmentSelection`](#GlobalVonMisesStressConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#GlobalVonMisesStressConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#GlobalVonMisesStressConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InternalObject`](#GlobalVonMisesStressConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`Maximum`](#GlobalVonMisesStressConstraint.Maximum)                                 | Gets or sets the Maximum.                                                                                                                                                                                                                                                                                                                     |
| [`MaximumEnergy`](#GlobalVonMisesStressConstraint.MaximumEnergy)                     | Gets or sets the Maximum Energy.                                                                                                                                                                                                                                                                                                              |
| [`MaximumStress`](#GlobalVonMisesStressConstraint.MaximumStress)                     | Gets or sets the Maximum Stress.                                                                                                                                                                                                                                                                                                              |
| [`Name`](#GlobalVonMisesStressConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#GlobalVonMisesStressConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#GlobalVonMisesStressConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#GlobalVonMisesStressConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#GlobalVonMisesStressConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`Properties`](#GlobalVonMisesStressConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`ScopingMethod`](#GlobalVonMisesStressConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                                                                                               |
| [`State`](#GlobalVonMisesStressConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`StressType`](#GlobalVonMisesStressConstraint.StressType)                           | Gets or sets the StressType.                                                                                                                                                                                                                                                                                                                  |
| [`Suppressed`](#GlobalVonMisesStressConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#GlobalVonMisesStressConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="GlobalVonMisesStressConstraint.AttachedRefs"></a>

### *property* GlobalVonMisesStressConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Children"></a>

### *property* GlobalVonMisesStressConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.ClsId"></a>

### *property* GlobalVonMisesStressConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.DataModelObjectCategory"></a>

### *property* GlobalVonMisesStressConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.EnvironmentSelection"></a>

### *property* GlobalVonMisesStressConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GroupingFolder"></a>

### *property* GlobalVonMisesStressConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.IconName"></a>

### *property* GlobalVonMisesStressConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.InternalObject"></a>

### *property* GlobalVonMisesStressConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Maximum"></a>

### *property* GlobalVonMisesStressConstraint.Maximum *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.MaximumEnergy"></a>

### *property* GlobalVonMisesStressConstraint.MaximumEnergy *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Energy.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.MaximumStress"></a>

### *property* GlobalVonMisesStressConstraint.MaximumStress *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Stress.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Name"></a>

### *property* GlobalVonMisesStressConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.ObjectId"></a>

### *property* GlobalVonMisesStressConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.ObjectState"></a>

### *property* GlobalVonMisesStressConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.ObjectTags"></a>

### *property* GlobalVonMisesStressConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Parent"></a>

### *property* GlobalVonMisesStressConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Properties"></a>

### *property* GlobalVonMisesStressConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.ScopingMethod"></a>

### *property* GlobalVonMisesStressConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.State"></a>

### *property* GlobalVonMisesStressConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.StressType"></a>

### *property* GlobalVonMisesStressConstraint.StressType *: [Ansys.Mechanical.DataModel.Enums.TopoConstraintStressType](../../../Mechanical/DataModel/Enums/TopoConstraintStressType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoConstraintStressType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressType.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Suppressed"></a>

### *property* GlobalVonMisesStressConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.VisibleProperties"></a>

### *property* GlobalVonMisesStressConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GlobalVonMisesStressConstraint.Activate"></a>

### GlobalVonMisesStressConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Copy"></a>

### GlobalVonMisesStressConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.CopyTo"></a>

### GlobalVonMisesStressConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.CreateObjRef"></a>

### GlobalVonMisesStressConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.CreateParameter"></a>

### GlobalVonMisesStressConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Cut"></a>

### GlobalVonMisesStressConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Delete"></a>

### GlobalVonMisesStressConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Duplicate"></a>

### GlobalVonMisesStressConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Equals"></a>

### GlobalVonMisesStressConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetAPIName"></a>

### GlobalVonMisesStressConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetAllProperties"></a>

### GlobalVonMisesStressConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetChildren"></a>

### GlobalVonMisesStressConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GlobalVonMisesStressConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetDetailsView"></a>

### GlobalVonMisesStressConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetEnumName"></a>

### GlobalVonMisesStressConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetHashCode"></a>

### GlobalVonMisesStressConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetIconFile"></a>

### GlobalVonMisesStressConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetLifetimeService"></a>

### GlobalVonMisesStressConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetObjectData"></a>

### GlobalVonMisesStressConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetParameter"></a>

### GlobalVonMisesStressConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetPath"></a>

### GlobalVonMisesStressConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetPropertyName"></a>

### GlobalVonMisesStressConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetPropertyValue"></a>

### GlobalVonMisesStressConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetVisibleProperties"></a>

### GlobalVonMisesStressConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GetVisiblePropertyNames"></a>

### GlobalVonMisesStressConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GroupAllSimilarChildren"></a>

### GlobalVonMisesStressConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.GroupSimilarObjects"></a>

### GlobalVonMisesStressConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.InitializeLifetimeService"></a>

### GlobalVonMisesStressConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.IsPropertyEditable"></a>

### GlobalVonMisesStressConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GlobalVonMisesStressConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.IsPropertyVisible"></a>

### GlobalVonMisesStressConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GlobalVonMisesStressConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.Paste"></a>

### GlobalVonMisesStressConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.PropertyByAPIName"></a>

### GlobalVonMisesStressConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.PropertyById"></a>

### GlobalVonMisesStressConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.PropertyByName"></a>

### GlobalVonMisesStressConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.RemoveFromGroup"></a>

### GlobalVonMisesStressConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.RemoveParameter"></a>

### GlobalVonMisesStressConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GlobalVonMisesStressConstraint.RenameBasedOnDefinition"></a>

### GlobalVonMisesStressConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

