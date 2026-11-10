# `GenericDelamination`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericDelamination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GenericDelamination(internalObject: Any)

<a id="GenericDelamination"></a>

### *class* GenericDelamination(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a GenericDelamination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#GenericDelamination.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#GenericDelamination.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#GenericDelamination.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#GenericDelamination.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#GenericDelamination.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#GenericDelamination.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#GenericDelamination.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#GenericDelamination.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#GenericDelamination.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#GenericDelamination.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#GenericDelamination.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#GenericDelamination.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#GenericDelamination.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#GenericDelamination.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#GenericDelamination.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#GenericDelamination.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#GenericDelamination.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#GenericDelamination.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#GenericDelamination.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#GenericDelamination.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#GenericDelamination.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#GenericDelamination.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#GenericDelamination.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#GenericDelamination.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#GenericDelamination.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#GenericDelamination.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#GenericDelamination.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#GenericDelamination.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#GenericDelamination.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#GenericDelamination.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#GenericDelamination.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#GenericDelamination.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#GenericDelamination.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#GenericDelamination.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#GenericDelamination.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#GenericDelamination.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#GenericDelamination.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#GenericDelamination.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#GenericDelamination.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#GenericDelamination.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#GenericDelamination.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#GenericDelamination.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#GenericDelamination.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GenericDelamination.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#GenericDelamination.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#GenericDelamination.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#GenericDelamination.IconName)                                 | IconName property.                                            |
| [`Images`](#GenericDelamination.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#GenericDelamination.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#GenericDelamination.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#GenericDelamination.Name)                                         | Name property.                                                |
| [`ObjectId`](#GenericDelamination.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#GenericDelamination.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#GenericDelamination.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#GenericDelamination.Parent)                                     | Parent property.                                              |
| [`Properties`](#GenericDelamination.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericDelamination.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#GenericDelamination.State)                                       | State property.                                               |
| [`TransferableObjectId`](#GenericDelamination.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#GenericDelamination.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericDelamination.AttachedRefs"></a>

### *property* GenericDelamination.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Children"></a>

### *property* GenericDelamination.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ClsId"></a>

### *property* GenericDelamination.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Comments"></a>

### *property* GenericDelamination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.DataModelObjectCategory"></a>

### *property* GenericDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Figures"></a>

### *property* GenericDelamination.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupingFolder"></a>

### *property* GenericDelamination.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.IconName"></a>

### *property* GenericDelamination.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Images"></a>

### *property* GenericDelamination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ImportableObjectSourceId"></a>

### *property* GenericDelamination.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.InternalObject"></a>

### *property* GenericDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Name"></a>

### *property* GenericDelamination.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ObjectId"></a>

### *property* GenericDelamination.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ObjectState"></a>

### *property* GenericDelamination.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ObjectTags"></a>

### *property* GenericDelamination.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Parent"></a>

### *property* GenericDelamination.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Properties"></a>

### *property* GenericDelamination.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ReadOnly"></a>

### *property* GenericDelamination.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.State"></a>

### *property* GenericDelamination.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.TransferableObjectId"></a>

### *property* GenericDelamination.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.VisibleProperties"></a>

### *property* GenericDelamination.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericDelamination.Activate"></a>

### GenericDelamination.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddCommandSnippet"></a>

### GenericDelamination.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddComment"></a>

### GenericDelamination.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddFigure"></a>

### GenericDelamination.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddImage"></a>

### GenericDelamination.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Copy"></a>

### GenericDelamination.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CopyTo"></a>

### GenericDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CreateObjRef"></a>

### GenericDelamination.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CreateParameter"></a>

### GenericDelamination.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Cut"></a>

### GenericDelamination.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Delete"></a>

### GenericDelamination.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Duplicate"></a>

### GenericDelamination.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Equals"></a>

### GenericDelamination.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetAPIName"></a>

### GenericDelamination.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetAllProperties"></a>

### GenericDelamination.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetChildren"></a>

### GenericDelamination.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### GenericDelamination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetDetailsView"></a>

### GenericDelamination.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetEnumName"></a>

### GenericDelamination.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetHashCode"></a>

### GenericDelamination.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetIconFile"></a>

### GenericDelamination.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetLifetimeService"></a>

### GenericDelamination.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetObjectData"></a>

### GenericDelamination.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetParameter"></a>

### GenericDelamination.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetPath"></a>

### GenericDelamination.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetPropertyName"></a>

### GenericDelamination.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetPropertyValue"></a>

### GenericDelamination.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetVisibleProperties"></a>

### GenericDelamination.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetVisiblePropertyNames"></a>

### GenericDelamination.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupAllSimilarChildren"></a>

### GenericDelamination.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupSimilarObjects"></a>

### GenericDelamination.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.InitializeLifetimeService"></a>

### GenericDelamination.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.IsPropertyEditable"></a>

### GenericDelamination.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericDelamination.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.IsPropertyVisible"></a>

### GenericDelamination.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### GenericDelamination.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Paste"></a>

### GenericDelamination.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyByAPIName"></a>

### GenericDelamination.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyById"></a>

### GenericDelamination.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyByName"></a>

### GenericDelamination.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.RemoveFromGroup"></a>

### GenericDelamination.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.RemoveParameter"></a>

### GenericDelamination.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

