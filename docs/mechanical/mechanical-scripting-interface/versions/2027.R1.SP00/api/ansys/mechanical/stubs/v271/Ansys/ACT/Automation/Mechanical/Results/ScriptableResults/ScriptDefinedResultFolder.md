# `ScriptDefinedResultFolder`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.ScriptDefinedResultFolder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.ScriptDefinedResultFolder(internalObject: Any)

<a id="ScriptDefinedResultFolder"></a>

### *class* ScriptDefinedResultFolder(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ScriptDefinedResultFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ScriptDefinedResultFolder.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ScriptDefinedResultFolder.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ScriptDefinedResultFolder.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ScriptDefinedResultFolder.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPythonResult`](#ScriptDefinedResultFolder.AddPythonResult)                     | Creates a new PythonResult                                                                  |
| [`Copy`](#ScriptDefinedResultFolder.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ScriptDefinedResultFolder.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ScriptDefinedResultFolder.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ScriptDefinedResultFolder.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ScriptDefinedResultFolder.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ScriptDefinedResultFolder.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ScriptDefinedResultFolder.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ScriptDefinedResultFolder.EvaluateAllResults)               | EvaluatesAllResults.                                                                        |
| [`GetAPIName`](#ScriptDefinedResultFolder.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ScriptDefinedResultFolder.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ScriptDefinedResultFolder.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ScriptDefinedResultFolder.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ScriptDefinedResultFolder.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ScriptDefinedResultFolder.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ScriptDefinedResultFolder.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ScriptDefinedResultFolder.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ScriptDefinedResultFolder.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ScriptDefinedResultFolder.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ScriptDefinedResultFolder.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ScriptDefinedResultFolder.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ScriptDefinedResultFolder.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ScriptDefinedResultFolder.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ScriptDefinedResultFolder.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ScriptDefinedResultFolder.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ScriptDefinedResultFolder.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ScriptDefinedResultFolder.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ScriptDefinedResultFolder.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ScriptDefinedResultFolder.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ScriptDefinedResultFolder.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ScriptDefinedResultFolder.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ScriptDefinedResultFolder.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ScriptDefinedResultFolder.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ScriptDefinedResultFolder.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ScriptDefinedResultFolder.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ScriptDefinedResultFolder.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ScriptDefinedResultFolder.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ScriptDefinedResultFolder.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ScriptDefinedResultFolder.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ScriptDefinedResultFolder.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ScriptDefinedResultFolder.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ScriptDefinedResultFolder.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ScriptDefinedResultFolder.IconName)                                 | IconName property.                                            |
| [`Images`](#ScriptDefinedResultFolder.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ScriptDefinedResultFolder.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ScriptDefinedResultFolder.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#ScriptDefinedResultFolder.Name)                                         | Name property.                                                |
| [`ObjectId`](#ScriptDefinedResultFolder.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ScriptDefinedResultFolder.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ScriptDefinedResultFolder.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ScriptDefinedResultFolder.Parent)                                     | Parent property.                                              |
| [`Properties`](#ScriptDefinedResultFolder.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ScriptDefinedResultFolder.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ScriptDefinedResultFolder.State)                                       | State property.                                               |
| [`TransferableObjectId`](#ScriptDefinedResultFolder.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ScriptDefinedResultFolder.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ScriptDefinedResultFolder.AttachedRefs"></a>

### *property* ScriptDefinedResultFolder.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Children"></a>

### *property* ScriptDefinedResultFolder.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ClsId"></a>

### *property* ScriptDefinedResultFolder.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Comments"></a>

### *property* ScriptDefinedResultFolder.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.DataModelObjectCategory"></a>

### *property* ScriptDefinedResultFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Figures"></a>

### *property* ScriptDefinedResultFolder.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupingFolder"></a>

### *property* ScriptDefinedResultFolder.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.IconName"></a>

### *property* ScriptDefinedResultFolder.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Images"></a>

### *property* ScriptDefinedResultFolder.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ImportableObjectSourceId"></a>

### *property* ScriptDefinedResultFolder.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.InternalObject"></a>

### *property* ScriptDefinedResultFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSScriptResultFolderAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Name"></a>

### *property* ScriptDefinedResultFolder.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ObjectId"></a>

### *property* ScriptDefinedResultFolder.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ObjectState"></a>

### *property* ScriptDefinedResultFolder.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ObjectTags"></a>

### *property* ScriptDefinedResultFolder.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Parent"></a>

### *property* ScriptDefinedResultFolder.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Properties"></a>

### *property* ScriptDefinedResultFolder.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.ReadOnly"></a>

### *property* ScriptDefinedResultFolder.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.State"></a>

### *property* ScriptDefinedResultFolder.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.TransferableObjectId"></a>

### *property* ScriptDefinedResultFolder.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.VisibleProperties"></a>

### *property* ScriptDefinedResultFolder.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ScriptDefinedResultFolder.Activate"></a>

### ScriptDefinedResultFolder.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddComment"></a>

### ScriptDefinedResultFolder.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddFigure"></a>

### ScriptDefinedResultFolder.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddImage"></a>

### ScriptDefinedResultFolder.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.AddPythonResult"></a>

### ScriptDefinedResultFolder.AddPythonResult() → [Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult](PythonResult.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult)

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Copy"></a>

### ScriptDefinedResultFolder.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CopyTo"></a>

### ScriptDefinedResultFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CreateObjRef"></a>

### ScriptDefinedResultFolder.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.CreateParameter"></a>

### ScriptDefinedResultFolder.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Cut"></a>

### ScriptDefinedResultFolder.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Duplicate"></a>

### ScriptDefinedResultFolder.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Equals"></a>

### ScriptDefinedResultFolder.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.EvaluateAllResults"></a>

### ScriptDefinedResultFolder.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

EvaluatesAllResults.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetAPIName"></a>

### ScriptDefinedResultFolder.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetAllProperties"></a>

### ScriptDefinedResultFolder.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetChildren"></a>

### ScriptDefinedResultFolder.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ScriptDefinedResultFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetDetailsView"></a>

### ScriptDefinedResultFolder.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetEnumName"></a>

### ScriptDefinedResultFolder.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetHashCode"></a>

### ScriptDefinedResultFolder.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetIconFile"></a>

### ScriptDefinedResultFolder.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetLifetimeService"></a>

### ScriptDefinedResultFolder.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetObjectData"></a>

### ScriptDefinedResultFolder.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetParameter"></a>

### ScriptDefinedResultFolder.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetPath"></a>

### ScriptDefinedResultFolder.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetPropertyName"></a>

### ScriptDefinedResultFolder.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetPropertyValue"></a>

### ScriptDefinedResultFolder.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetVisibleProperties"></a>

### ScriptDefinedResultFolder.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GetVisiblePropertyNames"></a>

### ScriptDefinedResultFolder.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupAllSimilarChildren"></a>

### ScriptDefinedResultFolder.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.GroupSimilarObjects"></a>

### ScriptDefinedResultFolder.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.InitializeLifetimeService"></a>

### ScriptDefinedResultFolder.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.IsPropertyEditable"></a>

### ScriptDefinedResultFolder.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ScriptDefinedResultFolder.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.IsPropertyVisible"></a>

### ScriptDefinedResultFolder.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ScriptDefinedResultFolder.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.Paste"></a>

### ScriptDefinedResultFolder.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyByAPIName"></a>

### ScriptDefinedResultFolder.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyById"></a>

### ScriptDefinedResultFolder.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.PropertyByName"></a>

### ScriptDefinedResultFolder.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.RemoveFromGroup"></a>

### ScriptDefinedResultFolder.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ScriptDefinedResultFolder.RemoveParameter"></a>

### ScriptDefinedResultFolder.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

