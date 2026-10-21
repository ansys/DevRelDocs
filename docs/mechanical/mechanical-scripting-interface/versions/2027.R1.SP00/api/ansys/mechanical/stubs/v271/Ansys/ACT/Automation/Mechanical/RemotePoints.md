# `RemotePoints`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoints"></a>

#### *class* Ansys.ACT.Automation.Mechanical.RemotePoints(internalObject: Any)

<a id="RemotePoints"></a>

### *class* RemotePoints(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RemotePoints.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RemotePoints.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RemotePoints.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RemotePoints.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddRemotePoint`](#RemotePoints.AddRemotePoint)                       | Creates a new RemotePoint                                                                   |
| [`Copy`](#RemotePoints.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RemotePoints.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RemotePoints.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RemotePoints.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RemotePoints.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#RemotePoints.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RemotePoints.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RemotePoints.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RemotePoints.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RemotePoints.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RemotePoints.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RemotePoints.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RemotePoints.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RemotePoints.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RemotePoints.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RemotePoints.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RemotePoints.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RemotePoints.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RemotePoints.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RemotePoints.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RemotePoints.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RemotePoints.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RemotePoints.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RemotePoints.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RemotePoints.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RemotePoints.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RemotePoints.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RemotePoints.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RemotePoints.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RemotePoints.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RemotePoints.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RemotePoints.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RemotePoints.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#RemotePoints.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#RemotePoints.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#RemotePoints.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#RemotePoints.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RemotePoints.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#RemotePoints.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#RemotePoints.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#RemotePoints.IconName)                               | IconName property.                                            |
| [`Images`](#RemotePoints.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#RemotePoints.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#RemotePoints.Name)                                       | Name property.                                                |
| [`ObjectId`](#RemotePoints.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#RemotePoints.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#RemotePoints.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#RemotePoints.Parent)                                   | Parent property.                                              |
| [`Properties`](#RemotePoints.Properties)                           | Gets the list of properties for this object.                  |
| [`ShowConnectionLines`](#RemotePoints.ShowConnectionLines)         | Gets or sets the ShowConnectionLines.                         |
| [`State`](#RemotePoints.State)                                     | State property.                                               |
| [`VisibleProperties`](#RemotePoints.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RemotePoints.AttachedRefs"></a>

### *property* RemotePoints.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Children"></a>

### *property* RemotePoints.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.ClsId"></a>

### *property* RemotePoints.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Comments"></a>

### *property* RemotePoints.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.DataModelObjectCategory"></a>

### *property* RemotePoints.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Figures"></a>

### *property* RemotePoints.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupingFolder"></a>

### *property* RemotePoints.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.IconName"></a>

### *property* RemotePoints.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Images"></a>

### *property* RemotePoints.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.InternalObject"></a>

### *property* RemotePoints.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRemotePointGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Name"></a>

### *property* RemotePoints.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.ObjectId"></a>

### *property* RemotePoints.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.ObjectState"></a>

### *property* RemotePoints.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.ObjectTags"></a>

### *property* RemotePoints.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Parent"></a>

### *property* RemotePoints.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Properties"></a>

### *property* RemotePoints.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.ShowConnectionLines"></a>

### *property* RemotePoints.ShowConnectionLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowConnectionLines.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.State"></a>

### *property* RemotePoints.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.VisibleProperties"></a>

### *property* RemotePoints.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemotePoints.Activate"></a>

### RemotePoints.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddComment"></a>

### RemotePoints.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddFigure"></a>

### RemotePoints.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddImage"></a>

### RemotePoints.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.AddRemotePoint"></a>

### RemotePoints.AddRemotePoint() → [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint)

Creates a new RemotePoint

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Copy"></a>

### RemotePoints.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CopyTo"></a>

### RemotePoints.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CreateObjRef"></a>

### RemotePoints.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.CreateParameter"></a>

### RemotePoints.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Cut"></a>

### RemotePoints.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Duplicate"></a>

### RemotePoints.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Equals"></a>

### RemotePoints.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetAPIName"></a>

### RemotePoints.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetAllProperties"></a>

### RemotePoints.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetChildren"></a>

### RemotePoints.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RemotePoints.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetDetailsView"></a>

### RemotePoints.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetEnumName"></a>

### RemotePoints.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetHashCode"></a>

### RemotePoints.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetIconFile"></a>

### RemotePoints.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetLifetimeService"></a>

### RemotePoints.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetObjectData"></a>

### RemotePoints.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetParameter"></a>

### RemotePoints.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetPath"></a>

### RemotePoints.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetPropertyName"></a>

### RemotePoints.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetPropertyValue"></a>

### RemotePoints.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetVisibleProperties"></a>

### RemotePoints.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GetVisiblePropertyNames"></a>

### RemotePoints.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupAllSimilarChildren"></a>

### RemotePoints.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.GroupSimilarObjects"></a>

### RemotePoints.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.InitializeLifetimeService"></a>

### RemotePoints.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.IsPropertyEditable"></a>

### RemotePoints.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemotePoints.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.IsPropertyVisible"></a>

### RemotePoints.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RemotePoints.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.Paste"></a>

### RemotePoints.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyByAPIName"></a>

### RemotePoints.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyById"></a>

### RemotePoints.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.PropertyByName"></a>

### RemotePoints.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.RemoveFromGroup"></a>

### RemotePoints.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RemotePoints.RemoveParameter"></a>

### RemotePoints.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

