# `ContactDataTable`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ContactDataTable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ContactDataTable(internalObject: Any)

<a id="ContactDataTable"></a>

### *class* ContactDataTable(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactDataTable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactDataTable.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ContactDataTable.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ContactDataTable.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`Copy`](#ContactDataTable.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactDataTable.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactDataTable.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactDataTable.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ContactDataTable.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactDataTable.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactDataTable.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ContactDataTable.Equals)                                       | Equals method.                                                                              |
| [`ExportTextFile`](#ContactDataTable.ExportTextFile)                       | Run the ExportTextFile action.                                                              |
| [`GetAPIName`](#ContactDataTable.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ContactDataTable.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactDataTable.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactDataTable.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactDataTable.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactDataTable.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactDataTable.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactDataTable.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ContactDataTable.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactDataTable.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactDataTable.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactDataTable.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactDataTable.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ContactDataTable.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactDataTable.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GetWorksheet`](#ContactDataTable.GetWorksheet)                           | GetWorksheet method.                                                                        |
| [`GroupAllSimilarChildren`](#ContactDataTable.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactDataTable.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactDataTable.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactDataTable.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactDataTable.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactDataTable.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ContactDataTable.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactDataTable.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactDataTable.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactDataTable.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactDataTable.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ContactDataTable.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ContactDataTable.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ContactDataTable.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ContactDataTable.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactDataTable.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ContactDataTable.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ContactDataTable.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ContactDataTable.IconName)                               | IconName property.                                            |
| [`InternalObject`](#ContactDataTable.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ContactDataTable.Name)                                       | Name property.                                                |
| [`ObjectId`](#ContactDataTable.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ContactDataTable.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ContactDataTable.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ContactDataTable.Parent)                                   | Parent property.                                              |
| [`Properties`](#ContactDataTable.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ContactDataTable.State)                                     | State property.                                               |
| [`VisibleProperties`](#ContactDataTable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactDataTable.AttachedRefs"></a>

### *property* ContactDataTable.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Children"></a>

### *property* ContactDataTable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ClsId"></a>

### *property* ContactDataTable.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Comments"></a>

### *property* ContactDataTable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.DataModelObjectCategory"></a>

### *property* ContactDataTable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Figures"></a>

### *property* ContactDataTable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupingFolder"></a>

### *property* ContactDataTable.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.IconName"></a>

### *property* ContactDataTable.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.InternalObject"></a>

### *property* ContactDataTable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactDataTableAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Name"></a>

### *property* ContactDataTable.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ObjectId"></a>

### *property* ContactDataTable.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ObjectState"></a>

### *property* ContactDataTable.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ObjectTags"></a>

### *property* ContactDataTable.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Parent"></a>

### *property* ContactDataTable.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Properties"></a>

### *property* ContactDataTable.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.State"></a>

### *property* ContactDataTable.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.VisibleProperties"></a>

### *property* ContactDataTable.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDataTable.Activate"></a>

### ContactDataTable.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.AddComment"></a>

### ContactDataTable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.AddFigure"></a>

### ContactDataTable.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Copy"></a>

### ContactDataTable.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CopyTo"></a>

### ContactDataTable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CreateObjRef"></a>

### ContactDataTable.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.CreateParameter"></a>

### ContactDataTable.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Cut"></a>

### ContactDataTable.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Delete"></a>

### ContactDataTable.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Duplicate"></a>

### ContactDataTable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Equals"></a>

### ContactDataTable.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.ExportTextFile"></a>

### ContactDataTable.ExportTextFile(fileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetAPIName"></a>

### ContactDataTable.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetAllProperties"></a>

### ContactDataTable.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetChildren"></a>

### ContactDataTable.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactDataTable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetDetailsView"></a>

### ContactDataTable.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetEnumName"></a>

### ContactDataTable.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetHashCode"></a>

### ContactDataTable.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetIconFile"></a>

### ContactDataTable.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetLifetimeService"></a>

### ContactDataTable.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetObjectData"></a>

### ContactDataTable.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetParameter"></a>

### ContactDataTable.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetPath"></a>

### ContactDataTable.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetPropertyName"></a>

### ContactDataTable.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetPropertyValue"></a>

### ContactDataTable.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetVisibleProperties"></a>

### ContactDataTable.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetVisiblePropertyNames"></a>

### ContactDataTable.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GetWorksheet"></a>

### ContactDataTable.GetWorksheet() → Ansys.ACT.Automation.Mechanical.Results.ContactDataTableWorksheet

GetWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupAllSimilarChildren"></a>

### ContactDataTable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.GroupSimilarObjects"></a>

### ContactDataTable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.InitializeLifetimeService"></a>

### ContactDataTable.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.IsPropertyEditable"></a>

### ContactDataTable.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDataTable.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.IsPropertyVisible"></a>

### ContactDataTable.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDataTable.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.Paste"></a>

### ContactDataTable.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyByAPIName"></a>

### ContactDataTable.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyById"></a>

### ContactDataTable.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.PropertyByName"></a>

### ContactDataTable.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.RemoveFromGroup"></a>

### ContactDataTable.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactDataTable.RemoveParameter"></a>

### ContactDataTable.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

