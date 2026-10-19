# `PythonResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult(internalObject: Any)

<a id="PythonResult"></a>

### *class* PythonResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PythonResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#PythonResult.Activate)                                   | Activate the current object.                                                                                                                   |
| [`AddComment`](#PythonResult.AddComment)                               | Creates a new child Comment.                                                                                                                   |
| [`AddFigure`](#PythonResult.AddFigure)                                 | Creates a new child Figure.                                                                                                                    |
| [`AddImage`](#PythonResult.AddImage)                                   | Creates a new child Image.                                                                                                                     |
| [`ClearGeneratedData`](#PythonResult.ClearGeneratedData)               | ClearGeneratedData method.                                                                                                                     |
| [`ClearSelectionBySubset`](#PythonResult.ClearSelectionBySubset)       | ClearSelectionBySubset method.                                                                                                                 |
| [`Connect`](#Connect)                     | Register the python code.                                                                                                                      |
| [`Copy`](#PythonResult.Copy)                                           | Copies the current DataModelObject.                                                                                                            |
| [`CopyTo`](#PythonResult.CopyTo)                                       | Copies all visible properties from this object to another.                                                                                     |
| [`CreateObjRef`](#PythonResult.CreateObjRef)                           | CreateObjRef method.                                                                                                                           |
| [`CreateParameter`](#PythonResult.CreateParameter)                     | Creates a new parameter for a Property.                                                                                                        |
| [`Cut`](#PythonResult.Cut)                                             | Cuts the current DataModelObject.                                                                                                              |
| [`Delete`](#PythonResult.Delete)                                       | Run the Delete action.                                                                                                                         |
| [`Duplicate`](#PythonResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                                                 |
| [`Equals`](#PythonResult.Equals)                                       | Equals method.                                                                                                                                 |
| [`Evaluate`](#PythonResult.Evaluate)                                   | Evaluate method.                                                                                                                               |
| [`EvaluateAllResults`](#PythonResult.EvaluateAllResults)               | Evaluate all results.                                                                                                                          |
| [`ExportAnimation`](#PythonResult.ExportAnimation)                     | Run the ExportAnimation action.                                                                                                                |
| [`GetAPIName`](#PythonResult.GetAPIName)                               | Property name bound to dispId.                                                                                                                 |
| [`GetAllProperties`](#PythonResult.GetAllProperties)                   | GetAllProperties method.                                                                                                                       |
| [`GetChildren`](#PythonResult.GetChildren)                             | Gets the list of children, filtered by type.                                                                                                   |
| [`GetCustomPropertyByPath`](#PythonResult.GetCustomPropertyByPath)     | GetCustomPropertyByPath method.                                                                                                                |
| [`GetDetailsView`](#PythonResult.GetDetailsView)                       | GetDetailsView method.                                                                                                                         |
| [`GetEnumName`](#PythonResult.GetEnumName)                             | Enum name bound to value                                                                                                                       |
| [`GetHashCode`](#PythonResult.GetHashCode)                             | GetHashCode method.                                                                                                                            |
| [`GetIconFile`](#PythonResult.GetIconFile)                             | GetIconFile method.                                                                                                                            |
| [`GetLifetimeService`](#PythonResult.GetLifetimeService)               | GetLifetimeService method.                                                                                                                     |
| [`GetNewSubsetId`](#PythonResult.GetNewSubsetId)                       | GetNewSubsetId method.                                                                                                                         |
| [`GetObjectData`](#PythonResult.GetObjectData)                         | GetObjectData method.                                                                                                                          |
| [`GetParameter`](#PythonResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                                                                        |
| [`GetPath`](#PythonResult.GetPath)                                     | GetPath method.                                                                                                                                |
| [`GetPropertyName`](#PythonResult.GetPropertyName)                     | GetPropertyName method.                                                                                                                        |
| [`GetPropertyValue`](#PythonResult.GetPropertyValue)                   | GetPropertyValue method.                                                                                                                       |
| [`GetVisibleProperties`](#PythonResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                                                                   |
| [`GetVisiblePropertyNames`](#PythonResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                                                |
| [`GroupAllSimilarChildren`](#PythonResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                                                        |
| [`GroupSimilarObjects`](#PythonResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                                                            |
| [`InitializeLifetimeService`](#PythonResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                                                                              |
| [`IsPropertyEditable`](#PythonResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                                                                     |
| [`IsPropertyVisible`](#PythonResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                                                      |
| [`Paste`](#PythonResult.Paste)                                         | Pastes to the current DataModelObject context.                                                                                                 |
| [`PropertyByAPIName`](#PythonResult.PropertyByAPIName)                 | Get a property by its API name.                                                                                                                |
| [`PropertyById`](#PythonResult.PropertyById)                           | PropertyById method.                                                                                                                           |
| [`PropertyByName`](#PythonResult.PropertyByName)                       | Get a property by its unique name.                                                                                                             |
| [`ReloadProperties`](#PythonResult.ReloadProperties)                   | Reload properties to update properties provided by the provider.                                                                               |
| [`RemoveFromGroup`](#PythonResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                    |
| [`RemoveParameter`](#PythonResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                                                              |
| [`ResetPropertyProviderText`](#PythonResult.ResetPropertyProviderText) | Resets the code inside the property provider tab with default property provider text. Any changes made to the property provider text are lost. |
| [`SetSelectionBySubset`](#PythonResult.SetSelectionBySubset)           | SetSelectionBySubset method.                                                                                                                   |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AllowRecursion`](#PythonResult.AllowRecursion)                                 | Gets or Sets whether the PythonCode allows recursion.                                                    |
| [`AttachedRefs`](#PythonResult.AttachedRefs)                                     | AttachedRefs property.                                                                                   |
| [`By`](#PythonResult.By)                                                         | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`Children`](#PythonResult.Children)                                             | Gets the list of children.                                                                               |
| [`ClsId`](#PythonResult.ClsId)                                                   | ClsId property.                                                                                          |
| [`Comments`](#PythonResult.Comments)                                             | Gets the list of associated comments.                                                                    |
| [`Connected`](#PythonResult.Connected)                                           | Gets whether the callbacks are currently connected.                                                      |
| [`DSAttachedObject`](#PythonResult.DSAttachedObject)                             | DSAttachedObject property.                                                                               |
| [`DataModelObjectCategory`](#PythonResult.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                             |
| [`DisplayTime`](#PythonResult.DisplayTime)                                       | Gets or sets the DisplayTime.                                                                            |
| [`Figures`](#PythonResult.Figures)                                               | Gets the list of associated figures.                                                                     |
| [`GroupingFolder`](#PythonResult.GroupingFolder)                                 | GroupingFolder property.                                                                                 |
| [`HasPropertyProviderCodeChanged`](#PythonResult.HasPropertyProviderCodeChanged) | HasPropertyProviderCodeChanged property.                                                                 |
| [`IconName`](#PythonResult.IconName)                                             | IconName property.                                                                                       |
| [`Images`](#PythonResult.Images)                                                 | Gets the list of associated images.                                                                      |
| [`InternalObject`](#PythonResult.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                       |
| [`IsEventBased`](#PythonResult.IsEventBased)                                     | Gets the IsEventBased.                                                                                   |
| [`Location`](#PythonResult.Location)                                             | Gets or sets the Location.                                                                               |
| [`Mode`](#PythonResult.Mode)                                                     | Gets or sets the Mode.                                                                                   |
| [`Name`](#PythonResult.Name)                                                     | Name property.                                                                                           |
| [`ObjectId`](#PythonResult.ObjectId)                                             | ObjectId property.                                                                                       |
| [`ObjectState`](#PythonResult.ObjectState)                                       | ObjectState property.                                                                                    |
| [`ObjectTags`](#PythonResult.ObjectTags)                                         | ObjectTags property.                                                                                     |
| [`Parent`](#PythonResult.Parent)                                                 | Parent property.                                                                                         |
| [`Properties`](#PythonResult.Properties)                                         | Gets the list of properties for this object.                                                             |
| [`PropertyProvider`](#PythonResult.PropertyProvider)                             | Gets or sets the property provider instance associated with this python code object.                     |
| [`PropertyProviderText`](#PythonResult.PropertyProviderText)                     | Gets or sets the text in the property provider tab for the Python Code object.                           |
| [`ScriptEngineType`](#PythonResult.ScriptEngineType)                             | Gets or sets what type of engine used to execute the scripts associated with the Python Code object.     |
| [`ScriptExecutionScope`](#PythonResult.ScriptExecutionScope)                     | The scope identifier in which the code execution will take place.                                        |
| [`State`](#PythonResult.State)                                                   | State property.                                                                                          |
| [`TabularData`](#PythonResult.TabularData)                                       | Gets the tabular data of the python result. Use a to get index to each column of the tabular data.       |
| [`Text`](#PythonResult.Text)                                                     | Gets or sets the text in the script tab for the Python Code object.                                      |
| [`VisibleProperties`](#PythonResult.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                            |
| [`WorkflowId`](#PythonResult.WorkflowId)                                         | WorkflowId property.                                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="PythonResult.AllowRecursion"></a>

### *property* PythonResult.AllowRecursion *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets whether the PythonCode allows recursion.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AttachedRefs"></a>

### *property* PythonResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.By"></a>

### *property* PythonResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Children"></a>

### *property* PythonResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ClsId"></a>

### *property* PythonResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Comments"></a>

### *property* PythonResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Connected"></a>

### *property* PythonResult.Connected *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the callbacks are currently connected.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DSAttachedObject"></a>

### *property* PythonResult.DSAttachedObject *: Ansys.Common.Interop.DSObjects.IDSAttached | [None](https://docs.python.org/3/builtins/constants.html#None)*

DSAttachedObject property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DataModelObjectCategory"></a>

### *property* PythonResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.DisplayTime"></a>

### *property* PythonResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Figures"></a>

### *property* PythonResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupingFolder"></a>

### *property* PythonResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.HasPropertyProviderCodeChanged"></a>

### *property* PythonResult.HasPropertyProviderCodeChanged *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

HasPropertyProviderCodeChanged property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.IconName"></a>

### *property* PythonResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Images"></a>

### *property* PythonResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.InternalObject"></a>

### *property* PythonResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptDefinedResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.IsEventBased"></a>

### *property* PythonResult.IsEventBased *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsEventBased.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Location"></a>

### *property* PythonResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Mode"></a>

### *property* PythonResult.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Name"></a>

### *property* PythonResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ObjectId"></a>

### *property* PythonResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ObjectState"></a>

### *property* PythonResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ObjectTags"></a>

### *property* PythonResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Parent"></a>

### *property* PythonResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Properties"></a>

### *property* PythonResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyProvider"></a>

### *property* PythonResult.PropertyProvider *: Ansys.ACT.Interfaces.Mechanical.IPropertyProvider | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the property provider instance associated with this python code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyProviderText"></a>

### *property* PythonResult.PropertyProviderText *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text in the property provider tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ScriptEngineType"></a>

### *property* PythonResult.ScriptEngineType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Scripting.EngineType](../../../../../Mechanical/DataModel/MechanicalEnums/Scripting/EngineType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Scripting.EngineType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets what type of engine used to execute the scripts associated with the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ScriptExecutionScope"></a>

### *property* PythonResult.ScriptExecutionScope *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The scope identifier in which the code execution will take place.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.State"></a>

### *property* PythonResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.TabularData"></a>

### *property* PythonResult.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the python result. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Text"></a>

### *property* PythonResult.Text *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text in the script tab for the Python Code object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.VisibleProperties"></a>

### *property* PythonResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.WorkflowId"></a>

### *property* PythonResult.WorkflowId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkflowId property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PythonResult.Activate"></a>

### PythonResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AddComment"></a>

### PythonResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AddFigure"></a>

### PythonResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.AddImage"></a>

### PythonResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ClearGeneratedData"></a>

### PythonResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

ClearGeneratedData method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ClearSelectionBySubset"></a>

### PythonResult.ClearSelectionBySubset(subsetId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ClearSelectionBySubset method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Connect"></a>

### PythonResult.Connect() → [None](https://docs.python.org/3/builtins/constants.html#None)

Register the python code.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Copy"></a>

### PythonResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CopyTo"></a>

### PythonResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CreateObjRef"></a>

### PythonResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.CreateParameter"></a>

### PythonResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Cut"></a>

### PythonResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Delete"></a>

### PythonResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Duplicate"></a>

### PythonResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Equals"></a>

### PythonResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Evaluate"></a>

### PythonResult.Evaluate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluate method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.EvaluateAllResults"></a>

### PythonResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluate all results.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ExportAnimation"></a>

### PythonResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetAPIName"></a>

### PythonResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetAllProperties"></a>

### PythonResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetChildren"></a>

### PythonResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PythonResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetCustomPropertyByPath"></a>

### PythonResult.GetCustomPropertyByPath(propertyPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty

GetCustomPropertyByPath method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetDetailsView"></a>

### PythonResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetEnumName"></a>

### PythonResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetHashCode"></a>

### PythonResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetIconFile"></a>

### PythonResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetLifetimeService"></a>

### PythonResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetNewSubsetId"></a>

### PythonResult.GetNewSubsetId() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNewSubsetId method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetObjectData"></a>

### PythonResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetParameter"></a>

### PythonResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetPath"></a>

### PythonResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetPropertyName"></a>

### PythonResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetPropertyValue"></a>

### PythonResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetVisibleProperties"></a>

### PythonResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GetVisiblePropertyNames"></a>

### PythonResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupAllSimilarChildren"></a>

### PythonResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.GroupSimilarObjects"></a>

### PythonResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.InitializeLifetimeService"></a>

### PythonResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.IsPropertyEditable"></a>

### PythonResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PythonResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.IsPropertyVisible"></a>

### PythonResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PythonResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.Paste"></a>

### PythonResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyByAPIName"></a>

### PythonResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyById"></a>

### PythonResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.PropertyByName"></a>

### PythonResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ReloadProperties"></a>

### PythonResult.ReloadProperties() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reload properties to update properties provided by the provider.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.RemoveFromGroup"></a>

### PythonResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.RemoveParameter"></a>

### PythonResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.ResetPropertyProviderText"></a>

### PythonResult.ResetPropertyProviderText() → [None](https://docs.python.org/3/builtins/constants.html#None)

Resets the code inside the property provider tab with default property provider text. Any changes made to the property provider text are lost.

<!-- !! processed by numpydoc !! -->

<a id="PythonResult.SetSelectionBySubset"></a>

### PythonResult.SetSelectionBySubset(info: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), subsetId: [int](https://docs.python.org/3/builtins/functions.html#int), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetSelectionBySubset method.

<!-- !! processed by numpydoc !! -->

