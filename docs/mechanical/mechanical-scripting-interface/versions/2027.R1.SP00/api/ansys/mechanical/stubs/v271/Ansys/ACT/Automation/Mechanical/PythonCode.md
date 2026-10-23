# `PythonCode`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PythonCode"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PythonCode(internalObject: Any)

<a id="PythonCode"></a>

### *class* PythonCode(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PythonCode.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#PythonCode.Activate)                                   | Activate the current object.                                                                                                                   |
| [`ClearSelectionBySubset`](#PythonCode.ClearSelectionBySubset)       | ClearSelectionBySubset method.                                                                                                                 |
| [`Connect`](MeshControls/Connect.md#Connect)                         | Register the python code.                                                                                                                      |
| [`Copy`](#PythonCode.Copy)                                           | Copies the current DataModelObject.                                                                                                            |
| [`CopyTo`](#PythonCode.CopyTo)                                       | Copies all visible properties from this object to another.                                                                                     |
| [`CreateObjRef`](#PythonCode.CreateObjRef)                           | CreateObjRef method.                                                                                                                           |
| [`CreateParameter`](#PythonCode.CreateParameter)                     | Creates a new parameter for a Property.                                                                                                        |
| [`Cut`](#PythonCode.Cut)                                             | Cuts the current DataModelObject.                                                                                                              |
| [`Delete`](#PythonCode.Delete)                                       | Run the Delete action.                                                                                                                         |
| [`Duplicate`](#PythonCode.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                                                 |
| [`Equals`](#PythonCode.Equals)                                       | Equals method.                                                                                                                                 |
| [`GetAPIName`](#PythonCode.GetAPIName)                               | Property name bound to dispId.                                                                                                                 |
| [`GetAllProperties`](#PythonCode.GetAllProperties)                   | GetAllProperties method.                                                                                                                       |
| [`GetCustomPropertyByPath`](#PythonCode.GetCustomPropertyByPath)     | GetCustomPropertyByPath method.                                                                                                                |
| [`GetDetailsView`](#PythonCode.GetDetailsView)                       | GetDetailsView method.                                                                                                                         |
| [`GetEnumName`](#PythonCode.GetEnumName)                             | Enum name bound to value                                                                                                                       |
| [`GetHashCode`](#PythonCode.GetHashCode)                             | GetHashCode method.                                                                                                                            |
| [`GetIconFile`](#PythonCode.GetIconFile)                             | GetIconFile method.                                                                                                                            |
| [`GetLifetimeService`](#PythonCode.GetLifetimeService)               | GetLifetimeService method.                                                                                                                     |
| [`GetNewSubsetId`](#PythonCode.GetNewSubsetId)                       | GetNewSubsetId method.                                                                                                                         |
| [`GetObjectData`](#PythonCode.GetObjectData)                         | GetObjectData method.                                                                                                                          |
| [`GetParameter`](#PythonCode.GetParameter)                           | Gets the parameter corresponding to the given property.                                                                                        |
| [`GetPath`](#PythonCode.GetPath)                                     | GetPath method.                                                                                                                                |
| [`GetPropertyName`](#PythonCode.GetPropertyName)                     | GetPropertyName method.                                                                                                                        |
| [`GetPropertyValue`](#PythonCode.GetPropertyValue)                   | GetPropertyValue method.                                                                                                                       |
| [`GetVisibleProperties`](#PythonCode.GetVisibleProperties)           | GetVisibleProperties method.                                                                                                                   |
| [`GetVisiblePropertyNames`](#PythonCode.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                                                |
| [`GroupAllSimilarChildren`](#PythonCode.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                                                        |
| [`GroupSimilarObjects`](#PythonCode.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                                                            |
| [`InitializeLifetimeService`](#PythonCode.InitializeLifetimeService) | InitializeLifetimeService method.                                                                                                              |
| [`IsPropertyEditable`](#PythonCode.IsPropertyEditable)               | IsPropertyEditable method.                                                                                                                     |
| [`IsPropertyVisible`](#PythonCode.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                                                      |
| [`Paste`](#PythonCode.Paste)                                         | Pastes to the current DataModelObject context.                                                                                                 |
| [`PropertyByAPIName`](#PythonCode.PropertyByAPIName)                 | Get a property by its API name.                                                                                                                |
| [`PropertyById`](#PythonCode.PropertyById)                           | PropertyById method.                                                                                                                           |
| [`PropertyByName`](#PythonCode.PropertyByName)                       | Get a property by its unique name.                                                                                                             |
| [`ReloadProperties`](#PythonCode.ReloadProperties)                   | Reload properties to update properties provided by the provider.                                                                               |
| [`RemoveFromGroup`](#PythonCode.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                    |
| [`RemoveParameter`](#PythonCode.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                                                              |
| [`ResetPropertyProviderText`](#PythonCode.ResetPropertyProviderText) | Resets the code inside the property provider tab with default property provider text. Any changes made to the property provider text are lost. |
| [`SetSelectionBySubset`](#PythonCode.SetSelectionBySubset)           | SetSelectionBySubset method.                                                                                                                   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonCode.AllowRecursion)                                 | Gets or Sets whether the PythonCode allows recursion.                                                |
| [`AttachedRefs`](#PythonCode.AttachedRefs)                                     | AttachedRefs property.                                                                               |
| [`ClsId`](#PythonCode.ClsId)                                                   | ClsId property.                                                                                      |
| [`Connected`](#PythonCode.Connected)                                           | Gets whether the callbacks are currently connected.                                                  |
| [`DSAttachedObject`](#PythonCode.DSAttachedObject)                             | DSAttachedObject property.                                                                           |
| [`DataModelObjectCategory`](#PythonCode.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                         |
| [`GroupingFolder`](#PythonCode.GroupingFolder)                                 | GroupingFolder property.                                                                             |
| [`HasPropertyProviderCodeChanged`](#PythonCode.HasPropertyProviderCodeChanged) | HasPropertyProviderCodeChanged property.                                                             |
| [`IconName`](#PythonCode.IconName)                                             | IconName property.                                                                                   |
| [`InternalObject`](#PythonCode.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                   |
| [`IsEventBased`](#PythonCode.IsEventBased)                                     | Gets the IsEventBased.                                                                               |
| [`Name`](#PythonCode.Name)                                                     | Name property.                                                                                       |
| [`ObjectId`](#PythonCode.ObjectId)                                             | ObjectId property.                                                                                   |
| [`ObjectState`](#PythonCode.ObjectState)                                       | ObjectState property.                                                                                |
| [`ObjectTags`](#PythonCode.ObjectTags)                                         | ObjectTags property.                                                                                 |
| [`Parent`](#PythonCode.Parent)                                                 | Parent property.                                                                                     |
| [`Properties`](#PythonCode.Properties)                                         | Gets the list of properties for this object.                                                         |
| [`PropertyProvider`](#PythonCode.PropertyProvider)                             | Gets or sets the property provider instance associated with this python code object.                 |
| [`PropertyProviderText`](#PythonCode.PropertyProviderText)                     | Gets or sets the text in the property provider tab for the Python Code object.                       |
| [`ScriptEngineType`](#PythonCode.ScriptEngineType)                             | Gets or sets what type of engine used to execute the scripts associated with the Python Code object. |
| [`ScriptExecutionScope`](#PythonCode.ScriptExecutionScope)                     | The scope identifier in which the code execution will take place.                                    |
| [`State`](#PythonCode.State)                                                   | State property.                                                                                      |
| [`Text`](#PythonCode.Text)                                                     | Gets or sets the text in the script tab for the Python Code object.                                  |
| [`VisibleProperties`](#PythonCode.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                        |

<a id="property-detail"></a>

## Property detail

<a id="PythonCode.AllowRecursion"></a>

### *property* PythonCode.AllowRecursion *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.AttachedRefs"></a>

### *property* PythonCode.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ClsId"></a>

### *property* PythonCode.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Connected"></a>

### *property* PythonCode.Connected *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.DSAttachedObject"></a>

### *property* PythonCode.DSAttachedObject *: Ansys.Common.Interop.DSObjects.IDSAttached | [None](https://docs.python.org/3/builtins/constants.html#None)*

DSAttachedObject property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.DataModelObjectCategory"></a>

### *property* PythonCode.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupingFolder"></a>

### *property* PythonCode.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.HasPropertyProviderCodeChanged"></a>

### *property* PythonCode.HasPropertyProviderCodeChanged *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

HasPropertyProviderCodeChanged property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.IconName"></a>

### *property* PythonCode.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.InternalObject"></a>

### *property* PythonCode.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.IsEventBased"></a>

### *property* PythonCode.IsEventBased *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsEventBased.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Name"></a>

### *property* PythonCode.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ObjectId"></a>

### *property* PythonCode.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ObjectState"></a>

### *property* PythonCode.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ObjectTags"></a>

### *property* PythonCode.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Parent"></a>

### *property* PythonCode.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Properties"></a>

### *property* PythonCode.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyProvider"></a>

### *property* PythonCode.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the property provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyProviderText"></a>

### *property* PythonCode.PropertyProviderText *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text in the property provider tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ScriptEngineType"></a>

### *property* PythonCode.ScriptEngineType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Scripting.EngineType](../../../Mechanical/DataModel/MechanicalEnums/Scripting/EngineType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Scripting.EngineType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets what type of engine used to execute the scripts associated with the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ScriptExecutionScope"></a>

### *property* PythonCode.ScriptExecutionScope *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.State"></a>

### *property* PythonCode.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Text"></a>

### *property* PythonCode.Text *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.VisibleProperties"></a>

### *property* PythonCode.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCode.Activate"></a>

### PythonCode.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ClearSelectionBySubset"></a>

### PythonCode.ClearSelectionBySubset(subsetId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ClearSelectionBySubset method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Connect"></a>

### PythonCode.Connect() → [None](https://docs.python.org/3/builtins/constants.html#None)

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Copy"></a>

### PythonCode.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CopyTo"></a>

### PythonCode.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CreateObjRef"></a>

### PythonCode.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.CreateParameter"></a>

### PythonCode.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Cut"></a>

### PythonCode.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Delete"></a>

### PythonCode.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Duplicate"></a>

### PythonCode.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Equals"></a>

### PythonCode.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetAPIName"></a>

### PythonCode.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetAllProperties"></a>

### PythonCode.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetCustomPropertyByPath"></a>

### PythonCode.GetCustomPropertyByPath(propertyPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty

GetCustomPropertyByPath method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetDetailsView"></a>

### PythonCode.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetEnumName"></a>

### PythonCode.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetHashCode"></a>

### PythonCode.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetIconFile"></a>

### PythonCode.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetLifetimeService"></a>

### PythonCode.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetNewSubsetId"></a>

### PythonCode.GetNewSubsetId() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNewSubsetId method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetObjectData"></a>

### PythonCode.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetParameter"></a>

### PythonCode.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetPath"></a>

### PythonCode.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetPropertyName"></a>

### PythonCode.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetPropertyValue"></a>

### PythonCode.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetVisibleProperties"></a>

### PythonCode.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GetVisiblePropertyNames"></a>

### PythonCode.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupAllSimilarChildren"></a>

### PythonCode.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.GroupSimilarObjects"></a>

### PythonCode.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.InitializeLifetimeService"></a>

### PythonCode.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.IsPropertyEditable"></a>

### PythonCode.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PythonCode.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.IsPropertyVisible"></a>

### PythonCode.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PythonCode.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.Paste"></a>

### PythonCode.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyByAPIName"></a>

### PythonCode.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyById"></a>

### PythonCode.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.PropertyByName"></a>

### PythonCode.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ReloadProperties"></a>

### PythonCode.ReloadProperties() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.RemoveFromGroup"></a>

### PythonCode.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.RemoveParameter"></a>

### PythonCode.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.ResetPropertyProviderText"></a>

### PythonCode.ResetPropertyProviderText() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets the code inside the property provider tab with default property provider text. Any changes made to the property provider text are lost.

<!-- !! processed by numpydoc !! -->

<a id="PythonCode.SetSelectionBySubset"></a>

### PythonCode.SetSelectionBySubset(info: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), subsetId: [int](https://docs.python.org/3/builtins/functions.html#int), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetSelectionBySubset method.

<!-- !! processed by numpydoc !! -->

