# `ContactTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.ContactTool(internalObject: Any)

<a id="ContactTool"></a>

### *class* ContactTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactTool.Activate)                                           | Activate the current object.                                                                |
| [`AddComment`](#ContactTool.AddComment)                                       | Creates a new child Comment.                                                                |
| [`AddFigure`](#ContactTool.AddFigure)                                         | Creates a new child Figure.                                                                 |
| [`AddImage`](#ContactTool.AddImage)                                           | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#ContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactTool.Copy)                                                   | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactTool.CreateObjRef)                                   | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactTool.Cut)                                                     | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactTool.Delete)                                               | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactTool.Equals)                                               | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                          |
| [`GenerateInitialContactResults`](#ContactTool.GenerateInitialContactResults) | Generate Initial Contact Results and Mesh Parts                                             |
| [`GetAPIName`](#ContactTool.GetAPIName)                                       | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactTool.GetAllProperties)                           | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactTool.GetChildren)                                     | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactTool.GetDetailsView)                               | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactTool.GetEnumName)                                     | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactTool.GetHashCode)                                     | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactTool.GetIconFile)                                     | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactTool.GetLifetimeService)                       | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactTool.GetObjectData)                                 | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactTool.GetPath)                                             | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactTool.GetPropertyName)                             | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactTool.GetPropertyValue)                           | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactTool.GetVisibleProperties)                   | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactTool.GetVisiblePropertyNames)             | GetVisiblePropertyNames method.                                                             |
| [`GetWorksheet`](#ContactTool.GetWorksheet)                                   | GetWorksheet method.                                                                        |
| [`GroupAllSimilarChildren`](#ContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactTool.InitializeLifetimeService)         | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactTool.IsPropertyEditable)                       | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactTool.IsPropertyVisible)                         | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactTool.Paste)                                                 | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactTool.PropertyById)                                   | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactTool.PropertyByName)                               | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactTool.RemoveFromGroup)                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ContactTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ContactTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ContactTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactTool.IconName)                               | IconName property.                                            |
| [`Images`](#ContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#ContactTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#ContactTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#ContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#ContactTool.State)                                     | State property.                                               |
| [`VisibleProperties`](#ContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactTool.AttachedRefs"></a>

### *property* ContactTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Children"></a>

### *property* ContactTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ClsId"></a>

### *property* ContactTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Comments"></a>

### *property* ContactTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.DataModelObjectCategory"></a>

### *property* ContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Figures"></a>

### *property* ContactTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GroupingFolder"></a>

### *property* ContactTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.IconName"></a>

### *property* ContactTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Images"></a>

### *property* ContactTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.InternalObject"></a>

### *property* ContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Location"></a>

### *property* ContactTool.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Name"></a>

### *property* ContactTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ObjectId"></a>

### *property* ContactTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ObjectState"></a>

### *property* ContactTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ObjectTags"></a>

### *property* ContactTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Parent"></a>

### *property* ContactTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Properties"></a>

### *property* ContactTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ScopingMethod"></a>

### *property* ContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.State"></a>

### *property* ContactTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.VisibleProperties"></a>

### *property* ContactTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTool.Activate"></a>

### ContactTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.AddComment"></a>

### ContactTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.AddFigure"></a>

### ContactTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.AddImage"></a>

### ContactTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.ClearGeneratedData"></a>

### ContactTool.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Copy"></a>

### ContactTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.CopyTo"></a>

### ContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.CreateObjRef"></a>

### ContactTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.CreateParameter"></a>

### ContactTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Cut"></a>

### ContactTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Delete"></a>

### ContactTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Duplicate"></a>

### ContactTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Equals"></a>

### ContactTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.EvaluateAllResults"></a>

### ContactTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GenerateInitialContactResults"></a>

### ContactTool.GenerateInitialContactResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetAPIName"></a>

### ContactTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetAllProperties"></a>

### ContactTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetChildren"></a>

### ContactTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetDetailsView"></a>

### ContactTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetEnumName"></a>

### ContactTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetHashCode"></a>

### ContactTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetIconFile"></a>

### ContactTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetLifetimeService"></a>

### ContactTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetObjectData"></a>

### ContactTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetParameter"></a>

### ContactTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetPath"></a>

### ContactTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetPropertyName"></a>

### ContactTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetPropertyValue"></a>

### ContactTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetVisibleProperties"></a>

### ContactTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetVisiblePropertyNames"></a>

### ContactTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GetWorksheet"></a>

### ContactTool.GetWorksheet() → Ansys.ACT.Automation.Mechanical.Connections.ContactToolWorksheet

GetWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GroupAllSimilarChildren"></a>

### ContactTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.GroupSimilarObjects"></a>

### ContactTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.InitializeLifetimeService"></a>

### ContactTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.IsPropertyEditable"></a>

### ContactTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.IsPropertyVisible"></a>

### ContactTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.Paste"></a>

### ContactTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.PropertyByAPIName"></a>

### ContactTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.PropertyById"></a>

### ContactTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.PropertyByName"></a>

### ContactTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.RemoveFromGroup"></a>

### ContactTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactTool.RemoveParameter"></a>

### ContactTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

