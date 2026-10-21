# `PythonCodeEventBased`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PythonCodeEventBased(internalObject: Any)

<a id="PythonCodeEventBased"></a>

### *class* PythonCodeEventBased(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PythonCodeEventBased.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#PythonCodeEventBased.Activate)                                   | Activate the current object.                                                                                                                   |
| [`ClearSelectionBySubset`](#PythonCodeEventBased.ClearSelectionBySubset)       | ClearSelectionBySubset method.                                                                                                                 |
| [`Connect`](MeshControls/Connect.md#Connect)                                   | Register the python code.                                                                                                                      |
| [`Copy`](#PythonCodeEventBased.Copy)                                           | Copies the current DataModelObject.                                                                                                            |
| [`CopyTo`](#PythonCodeEventBased.CopyTo)                                       | Copies all visible properties from this object to another.                                                                                     |
| [`CreateObjRef`](#PythonCodeEventBased.CreateObjRef)                           | CreateObjRef method.                                                                                                                           |
| [`CreateParameter`](#PythonCodeEventBased.CreateParameter)                     | Creates a new parameter for a Property.                                                                                                        |
| [`Cut`](#PythonCodeEventBased.Cut)                                             | Cuts the current DataModelObject.                                                                                                              |
| [`Delete`](#PythonCodeEventBased.Delete)                                       | Run the Delete action.                                                                                                                         |
| [`Duplicate`](#PythonCodeEventBased.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                                                 |
| [`Equals`](#PythonCodeEventBased.Equals)                                       | Equals method.                                                                                                                                 |
| [`GetAPIName`](#PythonCodeEventBased.GetAPIName)                               | Property name bound to dispId.                                                                                                                 |
| [`GetAllProperties`](#PythonCodeEventBased.GetAllProperties)                   | GetAllProperties method.                                                                                                                       |
| [`GetCustomPropertyByPath`](#PythonCodeEventBased.GetCustomPropertyByPath)     | GetCustomPropertyByPath method.                                                                                                                |
| [`GetDetailsView`](#PythonCodeEventBased.GetDetailsView)                       | GetDetailsView method.                                                                                                                         |
| [`GetEnumName`](#PythonCodeEventBased.GetEnumName)                             | Enum name bound to value                                                                                                                       |
| [`GetHashCode`](#PythonCodeEventBased.GetHashCode)                             | GetHashCode method.                                                                                                                            |
| [`GetIconFile`](#PythonCodeEventBased.GetIconFile)                             | GetIconFile method.                                                                                                                            |
| [`GetLifetimeService`](#PythonCodeEventBased.GetLifetimeService)               | GetLifetimeService method.                                                                                                                     |
| [`GetNewSubsetId`](#PythonCodeEventBased.GetNewSubsetId)                       | GetNewSubsetId method.                                                                                                                         |
| [`GetObjectData`](#PythonCodeEventBased.GetObjectData)                         | GetObjectData method.                                                                                                                          |
| [`GetParameter`](#PythonCodeEventBased.GetParameter)                           | Gets the parameter corresponding to the given property.                                                                                        |
| [`GetPath`](#PythonCodeEventBased.GetPath)                                     | GetPath method.                                                                                                                                |
| [`GetPropertyName`](#PythonCodeEventBased.GetPropertyName)                     | GetPropertyName method.                                                                                                                        |
| [`GetPropertyValue`](#PythonCodeEventBased.GetPropertyValue)                   | GetPropertyValue method.                                                                                                                       |
| [`GetVisibleProperties`](#PythonCodeEventBased.GetVisibleProperties)           | GetVisibleProperties method.                                                                                                                   |
| [`GetVisiblePropertyNames`](#PythonCodeEventBased.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                                                |
| [`GroupAllSimilarChildren`](#PythonCodeEventBased.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                                                        |
| [`GroupSimilarObjects`](#PythonCodeEventBased.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                                                            |
| [`InitializeLifetimeService`](#PythonCodeEventBased.InitializeLifetimeService) | InitializeLifetimeService method.                                                                                                              |
| [`IsPropertyEditable`](#PythonCodeEventBased.IsPropertyEditable)               | IsPropertyEditable method.                                                                                                                     |
| [`IsPropertyVisible`](#PythonCodeEventBased.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                                                      |
| [`Paste`](#PythonCodeEventBased.Paste)                                         | Pastes to the current DataModelObject context.                                                                                                 |
| [`PropertyByAPIName`](#PythonCodeEventBased.PropertyByAPIName)                 | Get a property by its API name.                                                                                                                |
| [`PropertyById`](#PythonCodeEventBased.PropertyById)                           | PropertyById method.                                                                                                                           |
| [`PropertyByName`](#PythonCodeEventBased.PropertyByName)                       | Get a property by its unique name.                                                                                                             |
| [`ReloadProperties`](#PythonCodeEventBased.ReloadProperties)                   | Reload properties to update properties provided by the provider.                                                                               |
| [`RemoveFromGroup`](#PythonCodeEventBased.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                    |
| [`RemoveParameter`](#PythonCodeEventBased.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                                                              |
| [`ResetPropertyProviderText`](#PythonCodeEventBased.ResetPropertyProviderText) | Resets the code inside the property provider tab with default property provider text. Any changes made to the property provider text are lost. |
| [`SetSelectionBySubset`](#PythonCodeEventBased.SetSelectionBySubset)           | SetSelectionBySubset method.                                                                                                                   |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonCodeEventBased.AllowRecursion)                                 | Gets or Sets whether the PythonCode allows recursion.                                                |
| [`AttachedRefs`](#PythonCodeEventBased.AttachedRefs)                                     | AttachedRefs property.                                                                               |
| [`ClsId`](#PythonCodeEventBased.ClsId)                                                   | ClsId property.                                                                                      |
| [`Connected`](#PythonCodeEventBased.Connected)                                           | Gets whether the callbacks are currently connected.                                                  |
| [`DSAttachedObject`](#PythonCodeEventBased.DSAttachedObject)                             | DSAttachedObject property.                                                                           |
| [`DataModelObjectCategory`](#PythonCodeEventBased.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                         |
| [`GroupingFolder`](#PythonCodeEventBased.GroupingFolder)                                 | GroupingFolder property.                                                                             |
| [`HasPropertyProviderCodeChanged`](#PythonCodeEventBased.HasPropertyProviderCodeChanged) | HasPropertyProviderCodeChanged property.                                                             |
| [`IconName`](#PythonCodeEventBased.IconName)                                             | IconName property.                                                                                   |
| [`InternalObject`](#PythonCodeEventBased.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                   |
| [`InvalidateSolution`](#PythonCodeEventBased.InvalidateSolution)                         | Gets or sets the InvalidateSolution.                                                                 |
| [`IsEventBased`](#PythonCodeEventBased.IsEventBased)                                     | Gets the IsEventBased.                                                                               |
| [`Name`](#PythonCodeEventBased.Name)                                                     | Name property.                                                                                       |
| [`ObjectId`](#PythonCodeEventBased.ObjectId)                                             | ObjectId property.                                                                                   |
| [`ObjectState`](#PythonCodeEventBased.ObjectState)                                       | ObjectState property.                                                                                |
| [`ObjectTags`](#PythonCodeEventBased.ObjectTags)                                         | ObjectTags property.                                                                                 |
| [`Parent`](#PythonCodeEventBased.Parent)                                                 | Parent property.                                                                                     |
| [`Properties`](#PythonCodeEventBased.Properties)                                         | Gets the list of properties for this object.                                                         |
| [`PropertyProvider`](#PythonCodeEventBased.PropertyProvider)                             | Gets or sets the property provider instance associated with this python code object.                 |
| [`PropertyProviderText`](#PythonCodeEventBased.PropertyProviderText)                     | Gets or sets the text in the property provider tab for the Python Code object.                       |
| [`ScriptEngineType`](#PythonCodeEventBased.ScriptEngineType)                             | Gets or sets what type of engine used to execute the scripts associated with the Python Code object. |
| [`ScriptExecutionScope`](#PythonCodeEventBased.ScriptExecutionScope)                     | The scope identifier in which the code execution will take place.                                    |
| [`SolverTarget`](#PythonCodeEventBased.SolverTarget)                                     | Gets the SolverTarget.                                                                               |
| [`State`](#PythonCodeEventBased.State)                                                   | State property.                                                                                      |
| [`Suppressed`](#PythonCodeEventBased.Suppressed)                                         | Gets or sets the Suppressed.                                                                         |
| [`TargetCallback`](#PythonCodeEventBased.TargetCallback)                                 | Gets or sets the TargetCallback.                                                                     |
| [`Text`](#PythonCodeEventBased.Text)                                                     | Gets or sets the text in the script tab for the Python Code object.                                  |
| [`VisibleProperties`](#PythonCodeEventBased.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                        |

<a id="property-detail"></a>

## Property detail

<a id="PythonCodeEventBased.AllowRecursion"></a>

### *property* PythonCodeEventBased.AllowRecursion *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.AttachedRefs"></a>

### *property* PythonCodeEventBased.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ClsId"></a>

### *property* PythonCodeEventBased.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connected"></a>

### *property* PythonCodeEventBased.Connected *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.DSAttachedObject"></a>

### *property* PythonCodeEventBased.DSAttachedObject *: Ansys.Common.Interop.DSObjects.IDSAttached | [None](https://docs.python.org/3/builtins/constants.html#None)*

DSAttachedObject property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.DataModelObjectCategory"></a>

### *property* PythonCodeEventBased.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupingFolder"></a>

### *property* PythonCodeEventBased.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.HasPropertyProviderCodeChanged"></a>

### *property* PythonCodeEventBased.HasPropertyProviderCodeChanged *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

HasPropertyProviderCodeChanged property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.IconName"></a>

### *property* PythonCodeEventBased.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InternalObject"></a>

### *property* PythonCodeEventBased.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPythonCodeEventBasedAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InvalidateSolution"></a>

### *property* PythonCodeEventBased.InvalidateSolution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InvalidateSolution.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.IsEventBased"></a>

### *property* PythonCodeEventBased.IsEventBased *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsEventBased.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Name"></a>

### *property* PythonCodeEventBased.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ObjectId"></a>

### *property* PythonCodeEventBased.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ObjectState"></a>

### *property* PythonCodeEventBased.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ObjectTags"></a>

### *property* PythonCodeEventBased.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Parent"></a>

### *property* PythonCodeEventBased.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Properties"></a>

### *property* PythonCodeEventBased.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyProvider"></a>

### *property* PythonCodeEventBased.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the property provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyProviderText"></a>

### *property* PythonCodeEventBased.PropertyProviderText *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text in the property provider tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ScriptEngineType"></a>

### *property* PythonCodeEventBased.ScriptEngineType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Scripting.EngineType](../../../Mechanical/DataModel/MechanicalEnums/Scripting/EngineType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Scripting.EngineType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets what type of engine used to execute the scripts associated with the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ScriptExecutionScope"></a>

### *property* PythonCodeEventBased.ScriptExecutionScope *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.SolverTarget"></a>

### *property* PythonCodeEventBased.SolverTarget *: [Ansys.Mechanical.DataModel.Enums.CommandEditorTarget](../../../Mechanical/DataModel/Enums/CommandEditorTarget.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CommandEditorTarget) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverTarget.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.State"></a>

### *property* PythonCodeEventBased.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Suppressed"></a>

### *property* PythonCodeEventBased.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.TargetCallback"></a>

### *property* PythonCodeEventBased.TargetCallback *: [Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback](../../../Mechanical/DataModel/Enums/PythonCodeTargetCallback.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PythonCodeTargetCallback) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetCallback.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Text"></a>

### *property* PythonCodeEventBased.Text *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.VisibleProperties"></a>

### *property* PythonCodeEventBased.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonCodeEventBased.Activate"></a>

### PythonCodeEventBased.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ClearSelectionBySubset"></a>

### PythonCodeEventBased.ClearSelectionBySubset(subsetId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ClearSelectionBySubset method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Connect"></a>

### PythonCodeEventBased.Connect() → [None](https://docs.python.org/3/builtins/constants.html#None)

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Copy"></a>

### PythonCodeEventBased.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CopyTo"></a>

### PythonCodeEventBased.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CreateObjRef"></a>

### PythonCodeEventBased.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.CreateParameter"></a>

### PythonCodeEventBased.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Cut"></a>

### PythonCodeEventBased.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Delete"></a>

### PythonCodeEventBased.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Duplicate"></a>

### PythonCodeEventBased.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Equals"></a>

### PythonCodeEventBased.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetAPIName"></a>

### PythonCodeEventBased.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetAllProperties"></a>

### PythonCodeEventBased.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetCustomPropertyByPath"></a>

### PythonCodeEventBased.GetCustomPropertyByPath(propertyPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty

GetCustomPropertyByPath method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetDetailsView"></a>

### PythonCodeEventBased.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetEnumName"></a>

### PythonCodeEventBased.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetHashCode"></a>

### PythonCodeEventBased.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetIconFile"></a>

### PythonCodeEventBased.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetLifetimeService"></a>

### PythonCodeEventBased.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetNewSubsetId"></a>

### PythonCodeEventBased.GetNewSubsetId() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNewSubsetId method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetObjectData"></a>

### PythonCodeEventBased.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetParameter"></a>

### PythonCodeEventBased.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetPath"></a>

### PythonCodeEventBased.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetPropertyName"></a>

### PythonCodeEventBased.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetPropertyValue"></a>

### PythonCodeEventBased.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetVisibleProperties"></a>

### PythonCodeEventBased.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GetVisiblePropertyNames"></a>

### PythonCodeEventBased.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupAllSimilarChildren"></a>

### PythonCodeEventBased.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.GroupSimilarObjects"></a>

### PythonCodeEventBased.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.InitializeLifetimeService"></a>

### PythonCodeEventBased.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.IsPropertyEditable"></a>

### PythonCodeEventBased.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PythonCodeEventBased.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.IsPropertyVisible"></a>

### PythonCodeEventBased.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PythonCodeEventBased.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.Paste"></a>

### PythonCodeEventBased.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByAPIName"></a>

### PythonCodeEventBased.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyById"></a>

### PythonCodeEventBased.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.PropertyByName"></a>

### PythonCodeEventBased.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ReloadProperties"></a>

### PythonCodeEventBased.ReloadProperties() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.RemoveFromGroup"></a>

### PythonCodeEventBased.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.RemoveParameter"></a>

### PythonCodeEventBased.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.ResetPropertyProviderText"></a>

### PythonCodeEventBased.ResetPropertyProviderText() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets the code inside the property provider tab with default property provider text. Any changes made to the property provider text are lost.

<!-- !! processed by numpydoc !! -->

<a id="PythonCodeEventBased.SetSelectionBySubset"></a>

### PythonCodeEventBased.SetSelectionBySubset(info: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), subsetId: [int](https://docs.python.org/3/builtins/functions.html#int), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetSelectionBySubset method.

<!-- !! processed by numpydoc !! -->

