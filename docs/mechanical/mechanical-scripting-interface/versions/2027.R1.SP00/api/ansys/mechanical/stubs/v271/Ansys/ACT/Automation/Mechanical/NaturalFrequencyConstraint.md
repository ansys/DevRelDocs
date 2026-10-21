# `NaturalFrequencyConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NaturalFrequencyConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NaturalFrequencyConstraint(internalObject: Any)

<a id="NaturalFrequencyConstraint"></a>

### *class* NaturalFrequencyConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NaturalFrequencyConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NaturalFrequencyConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#NaturalFrequencyConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NaturalFrequencyConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NaturalFrequencyConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NaturalFrequencyConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NaturalFrequencyConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NaturalFrequencyConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NaturalFrequencyConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NaturalFrequencyConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#NaturalFrequencyConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NaturalFrequencyConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NaturalFrequencyConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NaturalFrequencyConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NaturalFrequencyConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NaturalFrequencyConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NaturalFrequencyConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NaturalFrequencyConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NaturalFrequencyConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NaturalFrequencyConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NaturalFrequencyConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NaturalFrequencyConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NaturalFrequencyConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NaturalFrequencyConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NaturalFrequencyConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NaturalFrequencyConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NaturalFrequencyConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NaturalFrequencyConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NaturalFrequencyConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NaturalFrequencyConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NaturalFrequencyConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NaturalFrequencyConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NaturalFrequencyConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NaturalFrequencyConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NaturalFrequencyConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NaturalFrequencyConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#NaturalFrequencyConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#NaturalFrequencyConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Children`](#NaturalFrequencyConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#NaturalFrequencyConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`DataModelObjectCategory`](#NaturalFrequencyConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`EnvironmentSelection`](#NaturalFrequencyConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#NaturalFrequencyConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#NaturalFrequencyConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InternalObject`](#NaturalFrequencyConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`MaximumFrequency`](#NaturalFrequencyConstraint.MaximumFrequency)               | Gets or sets the MaximumFrequency.                                                                                                                                                                                                                                                                                                            |
| [`MinimumFrequency`](#NaturalFrequencyConstraint.MinimumFrequency)               | Gets or sets the MinimumFrequency.                                                                                                                                                                                                                                                                                                            |
| [`ModeNumber`](#NaturalFrequencyConstraint.ModeNumber)                           | Gets or sets the ModeNumber.                                                                                                                                                                                                                                                                                                                  |
| [`Name`](#NaturalFrequencyConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#NaturalFrequencyConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#NaturalFrequencyConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#NaturalFrequencyConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#NaturalFrequencyConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`Properties`](#NaturalFrequencyConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`State`](#NaturalFrequencyConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`Suppressed`](#NaturalFrequencyConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#NaturalFrequencyConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="NaturalFrequencyConstraint.AttachedRefs"></a>

### *property* NaturalFrequencyConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Children"></a>

### *property* NaturalFrequencyConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.ClsId"></a>

### *property* NaturalFrequencyConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.DataModelObjectCategory"></a>

### *property* NaturalFrequencyConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.EnvironmentSelection"></a>

### *property* NaturalFrequencyConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GroupingFolder"></a>

### *property* NaturalFrequencyConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.IconName"></a>

### *property* NaturalFrequencyConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.InternalObject"></a>

### *property* NaturalFrequencyConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.MaximumFrequency"></a>

### *property* NaturalFrequencyConstraint.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.MinimumFrequency"></a>

### *property* NaturalFrequencyConstraint.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.ModeNumber"></a>

### *property* NaturalFrequencyConstraint.ModeNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Name"></a>

### *property* NaturalFrequencyConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.ObjectId"></a>

### *property* NaturalFrequencyConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.ObjectState"></a>

### *property* NaturalFrequencyConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.ObjectTags"></a>

### *property* NaturalFrequencyConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Parent"></a>

### *property* NaturalFrequencyConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Properties"></a>

### *property* NaturalFrequencyConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.State"></a>

### *property* NaturalFrequencyConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Suppressed"></a>

### *property* NaturalFrequencyConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.VisibleProperties"></a>

### *property* NaturalFrequencyConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NaturalFrequencyConstraint.Activate"></a>

### NaturalFrequencyConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Copy"></a>

### NaturalFrequencyConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.CopyTo"></a>

### NaturalFrequencyConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.CreateObjRef"></a>

### NaturalFrequencyConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.CreateParameter"></a>

### NaturalFrequencyConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Cut"></a>

### NaturalFrequencyConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Delete"></a>

### NaturalFrequencyConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Duplicate"></a>

### NaturalFrequencyConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Equals"></a>

### NaturalFrequencyConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetAPIName"></a>

### NaturalFrequencyConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetAllProperties"></a>

### NaturalFrequencyConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetChildren"></a>

### NaturalFrequencyConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NaturalFrequencyConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetDetailsView"></a>

### NaturalFrequencyConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetEnumName"></a>

### NaturalFrequencyConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetHashCode"></a>

### NaturalFrequencyConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetIconFile"></a>

### NaturalFrequencyConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetLifetimeService"></a>

### NaturalFrequencyConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetObjectData"></a>

### NaturalFrequencyConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetParameter"></a>

### NaturalFrequencyConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetPath"></a>

### NaturalFrequencyConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetPropertyName"></a>

### NaturalFrequencyConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetPropertyValue"></a>

### NaturalFrequencyConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetVisibleProperties"></a>

### NaturalFrequencyConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetVisiblePropertyNames"></a>

### NaturalFrequencyConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GroupAllSimilarChildren"></a>

### NaturalFrequencyConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GroupSimilarObjects"></a>

### NaturalFrequencyConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.InitializeLifetimeService"></a>

### NaturalFrequencyConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.IsPropertyEditable"></a>

### NaturalFrequencyConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NaturalFrequencyConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.IsPropertyVisible"></a>

### NaturalFrequencyConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NaturalFrequencyConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Paste"></a>

### NaturalFrequencyConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.PropertyByAPIName"></a>

### NaturalFrequencyConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.PropertyById"></a>

### NaturalFrequencyConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.PropertyByName"></a>

### NaturalFrequencyConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.RemoveFromGroup"></a>

### NaturalFrequencyConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.RemoveParameter"></a>

### NaturalFrequencyConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.RenameBasedOnDefinition"></a>

### NaturalFrequencyConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

