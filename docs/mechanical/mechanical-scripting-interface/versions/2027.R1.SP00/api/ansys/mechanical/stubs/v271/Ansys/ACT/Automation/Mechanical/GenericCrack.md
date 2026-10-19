# `GenericCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GenericCrack(internalObject: Any)

<a id="GenericCrack"></a>

### *class* GenericCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GenericCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GenericCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#GenericCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#GenericCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GenericCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GenericCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GenericCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GenericCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GenericCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GenericCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GenericCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GenericCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GenericCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GenericCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GenericCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GenericCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GenericCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GenericCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GenericCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GenericCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GenericCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GenericCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GenericCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GenericCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GenericCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GenericCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GenericCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GenericCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GenericCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GenericCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GenericCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GenericCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GenericCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GenericCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GenericCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GenericCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GenericCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GenericCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GenericCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GenericCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GenericCrack.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#GenericCrack.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#GenericCrack.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#GenericCrack.Comments)                                 | Gets the list of associated comments.                         |
| [`CrackID`](#GenericCrack.CrackID)                                   | Gets the CrackID.                                             |
| [`DataModelObjectCategory`](#GenericCrack.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#GenericCrack.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GenericCrack.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#GenericCrack.IconName)                                 | IconName property.                                            |
| [`Images`](#GenericCrack.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#GenericCrack.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#GenericCrack.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#GenericCrack.Name)                                         | Name property.                                                |
| [`ObjectId`](#GenericCrack.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#GenericCrack.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#GenericCrack.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#GenericCrack.Parent)                                     | Parent property.                                              |
| [`Properties`](#GenericCrack.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericCrack.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#GenericCrack.State)                                       | State property.                                               |
| [`TransferableObjectId`](#GenericCrack.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#GenericCrack.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericCrack.AttachedRefs"></a>

### *property* GenericCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Children"></a>

### *property* GenericCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ClsId"></a>

### *property* GenericCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Comments"></a>

### *property* GenericCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CrackID"></a>

### *property* GenericCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.DataModelObjectCategory"></a>

### *property* GenericCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Figures"></a>

### *property* GenericCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GroupingFolder"></a>

### *property* GenericCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.IconName"></a>

### *property* GenericCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Images"></a>

### *property* GenericCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ImportableObjectSourceId"></a>

### *property* GenericCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.InternalObject"></a>

### *property* GenericCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Name"></a>

### *property* GenericCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ObjectId"></a>

### *property* GenericCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ObjectState"></a>

### *property* GenericCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ObjectTags"></a>

### *property* GenericCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Parent"></a>

### *property* GenericCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Properties"></a>

### *property* GenericCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ReadOnly"></a>

### *property* GenericCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.State"></a>

### *property* GenericCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.TransferableObjectId"></a>

### *property* GenericCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.VisibleProperties"></a>

### *property* GenericCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericCrack.Activate"></a>

### GenericCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddCommandSnippet"></a>

### GenericCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddComment"></a>

### GenericCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddFigure"></a>

### GenericCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddImage"></a>

### GenericCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Copy"></a>

### GenericCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CopyTo"></a>

### GenericCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CreateObjRef"></a>

### GenericCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CreateParameter"></a>

### GenericCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Cut"></a>

### GenericCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Delete"></a>

### GenericCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Duplicate"></a>

### GenericCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Equals"></a>

### GenericCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetAPIName"></a>

### GenericCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetAllProperties"></a>

### GenericCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetChildren"></a>

### GenericCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GenericCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetDetailsView"></a>

### GenericCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetEnumName"></a>

### GenericCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetHashCode"></a>

### GenericCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetIconFile"></a>

### GenericCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetLifetimeService"></a>

### GenericCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetObjectData"></a>

### GenericCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetParameter"></a>

### GenericCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetPath"></a>

### GenericCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetPropertyName"></a>

### GenericCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetPropertyValue"></a>

### GenericCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetVisibleProperties"></a>

### GenericCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetVisiblePropertyNames"></a>

### GenericCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GroupAllSimilarChildren"></a>

### GenericCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GroupSimilarObjects"></a>

### GenericCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.InitializeLifetimeService"></a>

### GenericCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.IsPropertyEditable"></a>

### GenericCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.IsPropertyVisible"></a>

### GenericCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Paste"></a>

### GenericCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.PropertyByAPIName"></a>

### GenericCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.PropertyById"></a>

### GenericCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.PropertyByName"></a>

### GenericCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.RemoveFromGroup"></a>

### GenericCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.RemoveParameter"></a>

### GenericCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

