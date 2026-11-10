# `CriterionConstraint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CriterionConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CriterionConstraint(internalObject: Any)

<a id="CriterionConstraint"></a>

### *class* CriterionConstraint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CriterionConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CriterionConstraint.Activate)                                   | Activate the current object.                                                                |
| [`Copy`](#CriterionConstraint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CriterionConstraint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CriterionConstraint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CriterionConstraint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CriterionConstraint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CriterionConstraint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CriterionConstraint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CriterionConstraint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CriterionConstraint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CriterionConstraint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CriterionConstraint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CriterionConstraint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CriterionConstraint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CriterionConstraint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CriterionConstraint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CriterionConstraint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CriterionConstraint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CriterionConstraint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CriterionConstraint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CriterionConstraint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CriterionConstraint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CriterionConstraint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CriterionConstraint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CriterionConstraint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CriterionConstraint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CriterionConstraint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CriterionConstraint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CriterionConstraint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CriterionConstraint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CriterionConstraint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CriterionConstraint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CriterionConstraint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CriterionConstraint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CriterionConstraint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#CriterionConstraint.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#CriterionConstraint.AttachedRefs)                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                        |
| [`Children`](#CriterionConstraint.Children)                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                    |
| [`ClsId`](#CriterionConstraint.ClsId)                                     | ClsId property.                                                                                                                                                                                                                                                                                                                               |
| [`Criterion`](Criterion.md#Criterion)                                     | Gets or sets the Criterion.                                                                                                                                                                                                                                                                                                                   |
| [`DataModelObjectCategory`](#CriterionConstraint.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                  |
| [`EnvironmentSelection`](#CriterionConstraint.EnvironmentSelection)       | Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection. |
| [`GroupingFolder`](#CriterionConstraint.GroupingFolder)                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                      |
| [`IconName`](#CriterionConstraint.IconName)                               | IconName property.                                                                                                                                                                                                                                                                                                                            |
| [`InitialValue`](#CriterionConstraint.InitialValue)                       | Gets the InitialValue.                                                                                                                                                                                                                                                                                                                        |
| [`InternalObject`](#CriterionConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                            |
| [`LowerBound`](#CriterionConstraint.LowerBound)                           | Gets or sets the LowerBound.                                                                                                                                                                                                                                                                                                                  |
| [`Name`](#CriterionConstraint.Name)                                       | Name property.                                                                                                                                                                                                                                                                                                                                |
| [`ObjectId`](#CriterionConstraint.ObjectId)                               | ObjectId property.                                                                                                                                                                                                                                                                                                                            |
| [`ObjectState`](#CriterionConstraint.ObjectState)                         | ObjectState property.                                                                                                                                                                                                                                                                                                                         |
| [`ObjectTags`](#CriterionConstraint.ObjectTags)                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                          |
| [`Parent`](#CriterionConstraint.Parent)                                   | Parent property.                                                                                                                                                                                                                                                                                                                              |
| [`Properties`](#CriterionConstraint.Properties)                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                  |
| [`State`](#CriterionConstraint.State)                                     | State property.                                                                                                                                                                                                                                                                                                                               |
| [`Suppressed`](#CriterionConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                  |
| [`UpperBound`](#CriterionConstraint.UpperBound)                           | Gets or sets the UpperBound.                                                                                                                                                                                                                                                                                                                  |
| [`VisibleProperties`](#CriterionConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="CriterionConstraint.AttachedRefs"></a>

### *property* CriterionConstraint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Children"></a>

### *property* CriterionConstraint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.ClsId"></a>

### *property* CriterionConstraint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Criterion"></a>

### *property* CriterionConstraint.Criterion *: [Ansys.ACT.Automation.Mechanical.Criterion](Criterion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Criterion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.DataModelObjectCategory"></a>

### *property* CriterionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.EnvironmentSelection"></a>

### *property* CriterionConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment(s) the constraint applies to. This can be either a specific  object or all upstream environments of a specific type. Use  to specify by type. Defaults to the environment type of the optimization's upstream system. An exception is thrown if the constraint type does not support an environment selection.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupingFolder"></a>

### *property* CriterionConstraint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.IconName"></a>

### *property* CriterionConstraint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.InitialValue"></a>

### *property* CriterionConstraint.InitialValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the InitialValue.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.InternalObject"></a>

### *property* CriterionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.LowerBound"></a>

### *property* CriterionConstraint.LowerBound *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LowerBound.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Name"></a>

### *property* CriterionConstraint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.ObjectId"></a>

### *property* CriterionConstraint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.ObjectState"></a>

### *property* CriterionConstraint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.ObjectTags"></a>

### *property* CriterionConstraint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Parent"></a>

### *property* CriterionConstraint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Properties"></a>

### *property* CriterionConstraint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.State"></a>

### *property* CriterionConstraint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Suppressed"></a>

### *property* CriterionConstraint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.UpperBound"></a>

### *property* CriterionConstraint.UpperBound *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UpperBound.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.VisibleProperties"></a>

### *property* CriterionConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CriterionConstraint.Activate"></a>

### CriterionConstraint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Copy"></a>

### CriterionConstraint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CopyTo"></a>

### CriterionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CreateObjRef"></a>

### CriterionConstraint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CreateParameter"></a>

### CriterionConstraint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Cut"></a>

### CriterionConstraint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Delete"></a>

### CriterionConstraint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Duplicate"></a>

### CriterionConstraint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Equals"></a>

### CriterionConstraint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetAPIName"></a>

### CriterionConstraint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetAllProperties"></a>

### CriterionConstraint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetChildren"></a>

### CriterionConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CriterionConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetDetailsView"></a>

### CriterionConstraint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetEnumName"></a>

### CriterionConstraint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetHashCode"></a>

### CriterionConstraint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetIconFile"></a>

### CriterionConstraint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetLifetimeService"></a>

### CriterionConstraint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetObjectData"></a>

### CriterionConstraint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetParameter"></a>

### CriterionConstraint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetPath"></a>

### CriterionConstraint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetPropertyName"></a>

### CriterionConstraint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetPropertyValue"></a>

### CriterionConstraint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetVisibleProperties"></a>

### CriterionConstraint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetVisiblePropertyNames"></a>

### CriterionConstraint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupAllSimilarChildren"></a>

### CriterionConstraint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupSimilarObjects"></a>

### CriterionConstraint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.InitializeLifetimeService"></a>

### CriterionConstraint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.IsPropertyEditable"></a>

### CriterionConstraint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CriterionConstraint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.IsPropertyVisible"></a>

### CriterionConstraint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CriterionConstraint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Paste"></a>

### CriterionConstraint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyByAPIName"></a>

### CriterionConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyById"></a>

### CriterionConstraint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyByName"></a>

### CriterionConstraint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.RemoveFromGroup"></a>

### CriterionConstraint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.RemoveParameter"></a>

### CriterionConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.RenameBasedOnDefinition"></a>

### CriterionConstraint.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

