# `PreContactTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PreContactTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PreContactTool(internalObject: Any)

<a id="PreContactTool"></a>

### *class* PreContactTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PreContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PreContactTool.Activate)                                           | Activate the current object.                                                                |
| [`AddComment`](#PreContactTool.AddComment)                                       | Creates a new child Comment.                                                                |
| [`AddFigure`](#PreContactTool.AddFigure)                                         | Creates a new child Figure.                                                                 |
| [`AddGap`](#PreContactTool.AddGap)                                               | Creates a new ContactGap                                                                    |
| [`AddImage`](#PreContactTool.AddImage)                                           | Creates a new child Image.                                                                  |
| [`AddInitialInformation`](#PreContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                              |
| [`AddPenetration`](#PreContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                            |
| [`AddStatus`](#PreContactTool.AddStatus)                                         | Creates a new ContactStatus                                                                 |
| [`ClearGeneratedData`](#PreContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#PreContactTool.Copy)                                                   | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PreContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PreContactTool.CreateObjRef)                                   | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PreContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PreContactTool.Cut)                                                     | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PreContactTool.Delete)                                               | Run the Delete action.                                                                      |
| [`Duplicate`](#PreContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PreContactTool.Equals)                                               | Equals method.                                                                              |
| [`EvaluateAllResults`](#PreContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                          |
| [`GenerateInitialContactResults`](#PreContactTool.GenerateInitialContactResults) | Generate Initial Contact Results and Mesh Parts                                             |
| [`GetAPIName`](#PreContactTool.GetAPIName)                                       | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PreContactTool.GetAllProperties)                           | GetAllProperties method.                                                                    |
| [`GetChildren`](#PreContactTool.GetChildren)                                     | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PreContactTool.GetDetailsView)                               | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PreContactTool.GetEnumName)                                     | Enum name bound to value                                                                    |
| [`GetHashCode`](#PreContactTool.GetHashCode)                                     | GetHashCode method.                                                                         |
| [`GetIconFile`](#PreContactTool.GetIconFile)                                     | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PreContactTool.GetLifetimeService)                       | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PreContactTool.GetObjectData)                                 | GetObjectData method.                                                                       |
| [`GetParameter`](#PreContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PreContactTool.GetPath)                                             | GetPath method.                                                                             |
| [`GetPropertyName`](#PreContactTool.GetPropertyName)                             | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PreContactTool.GetPropertyValue)                           | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PreContactTool.GetVisibleProperties)                   | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PreContactTool.GetVisiblePropertyNames)             | GetVisiblePropertyNames method.                                                             |
| [`GetWorksheet`](#PreContactTool.GetWorksheet)                                   | GetWorksheet method.                                                                        |
| [`GroupAllSimilarChildren`](#PreContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PreContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PreContactTool.InitializeLifetimeService)         | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PreContactTool.IsPropertyEditable)                       | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PreContactTool.IsPropertyVisible)                         | IsPropertyVisible method.                                                                   |
| [`Paste`](#PreContactTool.Paste)                                                 | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PreContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                             |
| [`PropertyById`](#PreContactTool.PropertyById)                                   | PropertyById method.                                                                        |
| [`PropertyByName`](#PreContactTool.PropertyByName)                               | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PreContactTool.RemoveFromGroup)                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PreContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PreContactTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#PreContactTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#PreContactTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#PreContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PreContactTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#PreContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PreContactTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#PreContactTool.IconName)                               | IconName property.                                            |
| [`Images`](#PreContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PreContactTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#PreContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#PreContactTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#PreContactTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#PreContactTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#PreContactTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#PreContactTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#PreContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#PreContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#PreContactTool.State)                                     | State property.                                               |
| [`VisibleProperties`](#PreContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreContactTool.AttachedRefs"></a>

### *property* PreContactTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Children"></a>

### *property* PreContactTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ClsId"></a>

### *property* PreContactTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Comments"></a>

### *property* PreContactTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.DataModelObjectCategory"></a>

### *property* PreContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Figures"></a>

### *property* PreContactTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupingFolder"></a>

### *property* PreContactTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.IconName"></a>

### *property* PreContactTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Images"></a>

### *property* PreContactTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.InternalObject"></a>

### *property* PreContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Location"></a>

### *property* PreContactTool.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Name"></a>

### *property* PreContactTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ObjectId"></a>

### *property* PreContactTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ObjectState"></a>

### *property* PreContactTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ObjectTags"></a>

### *property* PreContactTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Parent"></a>

### *property* PreContactTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Properties"></a>

### *property* PreContactTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ScopingMethod"></a>

### *property* PreContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.State"></a>

### *property* PreContactTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.VisibleProperties"></a>

### *property* PreContactTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreContactTool.Activate"></a>

### PreContactTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddComment"></a>

### PreContactTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddFigure"></a>

### PreContactTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddGap"></a>

### PreContactTool.AddGap() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactGap](Results/ContactToolResults/ContactGap.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactGap)

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddImage"></a>

### PreContactTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddInitialInformation"></a>

### PreContactTool.AddInitialInformation() → [Ansys.ACT.Automation.Mechanical.Results.ContactDataTable](Results/ContactDataTable.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable)

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddPenetration"></a>

### PreContactTool.AddPenetration() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration](Results/ContactToolResults/ContactPenetration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactPenetration)

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddStatus"></a>

### PreContactTool.AddStatus() → [Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactStatus](Results/ContactToolResults/ContactStatus.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactStatus)

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ClearGeneratedData"></a>

### PreContactTool.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Copy"></a>

### PreContactTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CopyTo"></a>

### PreContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CreateObjRef"></a>

### PreContactTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CreateParameter"></a>

### PreContactTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Cut"></a>

### PreContactTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Delete"></a>

### PreContactTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Duplicate"></a>

### PreContactTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Equals"></a>

### PreContactTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.EvaluateAllResults"></a>

### PreContactTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GenerateInitialContactResults"></a>

### PreContactTool.GenerateInitialContactResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetAPIName"></a>

### PreContactTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetAllProperties"></a>

### PreContactTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetChildren"></a>

### PreContactTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PreContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetDetailsView"></a>

### PreContactTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetEnumName"></a>

### PreContactTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetHashCode"></a>

### PreContactTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetIconFile"></a>

### PreContactTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetLifetimeService"></a>

### PreContactTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetObjectData"></a>

### PreContactTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetParameter"></a>

### PreContactTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetPath"></a>

### PreContactTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetPropertyName"></a>

### PreContactTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetPropertyValue"></a>

### PreContactTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetVisibleProperties"></a>

### PreContactTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetVisiblePropertyNames"></a>

### PreContactTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetWorksheet"></a>

### PreContactTool.GetWorksheet() → Ansys.ACT.Automation.Mechanical.Connections.ContactToolWorksheet

GetWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupAllSimilarChildren"></a>

### PreContactTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupSimilarObjects"></a>

### PreContactTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.InitializeLifetimeService"></a>

### PreContactTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.IsPropertyEditable"></a>

### PreContactTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PreContactTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.IsPropertyVisible"></a>

### PreContactTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PreContactTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Paste"></a>

### PreContactTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByAPIName"></a>

### PreContactTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyById"></a>

### PreContactTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByName"></a>

### PreContactTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.RemoveFromGroup"></a>

### PreContactTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.RemoveParameter"></a>

### PreContactTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

