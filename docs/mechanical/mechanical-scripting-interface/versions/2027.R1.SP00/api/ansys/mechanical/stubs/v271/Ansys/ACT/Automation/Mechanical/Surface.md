# `Surface`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Surface(internalObject: Any)

<a id="Surface"></a>

### *class* Surface(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Surface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Surface.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Surface.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Surface.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Surface.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Surface.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Surface.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Surface.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Surface.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Surface.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Surface.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Surface.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Surface.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Surface.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Surface.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Surface.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Surface.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Surface.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Surface.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Surface.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Surface.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Surface.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Surface.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Surface.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Surface.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Surface.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Surface.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Surface.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Surface.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Surface.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Surface.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Surface.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Surface.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Surface.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Surface.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Surface.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Surface.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Surface.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Surface.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Surface.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Surface.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Surface.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Surface.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)    | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Surface.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Surface.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Surface.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Surface.IconName)                               | IconName property.                                            |
| [`Id`](#Surface.Id)                                           | Id property.                                                  |
| [`Ids`](#Surface.Ids)                                         | Ids property.                                                 |
| [`Images`](#Surface.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Surface.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#Surface.Name)                                       | Name property.                                                |
| [`ObjectId`](#Surface.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Surface.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Surface.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Surface.Parent)                                   | Parent property.                                              |
| [`Properties`](#Surface.Properties)                           | Gets the list of properties for this object.                  |
| [`SelectionType`](#Surface.SelectionType)                     | SelectionType property.                                       |
| [`State`](#Surface.State)                                     | State property.                                               |
| [`Suppressed`](#Surface.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Surface.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Surface.AttachedRefs"></a>

### *property* Surface.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Children"></a>

### *property* Surface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Surface.ClsId"></a>

### *property* Surface.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Comments"></a>

### *property* Surface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Surface.CoordinateSystem"></a>

### *property* Surface.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Surface.DataModelObjectCategory"></a>

### *property* Surface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Figures"></a>

### *property* Surface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GroupingFolder"></a>

### *property* Surface.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.IconName"></a>

### *property* Surface.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Id"></a>

### *property* Surface.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Ids"></a>

### *property* Surface.Ids *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Ids property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Images"></a>

### *property* Surface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Surface.InternalObject"></a>

### *property* Surface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSurfaceAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Name"></a>

### *property* Surface.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.ObjectId"></a>

### *property* Surface.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.ObjectState"></a>

### *property* Surface.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.ObjectTags"></a>

### *property* Surface.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Parent"></a>

### *property* Surface.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Properties"></a>

### *property* Surface.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Surface.SelectionType"></a>

### *property* Surface.SelectionType *: [Ansys.ACT.Interfaces.Common.SelectionTypeEnum](../../Interfaces/Common/SelectionTypeEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.SelectionTypeEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SelectionType property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.State"></a>

### *property* Surface.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Suppressed"></a>

### *property* Surface.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Surface.VisibleProperties"></a>

### *property* Surface.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Surface.Activate"></a>

### Surface.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Surface.AddComment"></a>

### Surface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Surface.AddFigure"></a>

### Surface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Surface.AddImage"></a>

### Surface.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Surface.Copy"></a>

### Surface.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Surface.CopyTo"></a>

### Surface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Surface.CreateObjRef"></a>

### Surface.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.CreateParameter"></a>

### Surface.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Cut"></a>

### Surface.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Delete"></a>

### Surface.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Duplicate"></a>

### Surface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Equals"></a>

### Surface.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetAPIName"></a>

### Surface.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetAllProperties"></a>

### Surface.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetChildren"></a>

### Surface.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Surface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetDetailsView"></a>

### Surface.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetEnumName"></a>

### Surface.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetHashCode"></a>

### Surface.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetIconFile"></a>

### Surface.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetLifetimeService"></a>

### Surface.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetObjectData"></a>

### Surface.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetParameter"></a>

### Surface.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetPath"></a>

### Surface.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetPropertyName"></a>

### Surface.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetPropertyValue"></a>

### Surface.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetVisibleProperties"></a>

### Surface.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GetVisiblePropertyNames"></a>

### Surface.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GroupAllSimilarChildren"></a>

### Surface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Surface.GroupSimilarObjects"></a>

### Surface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Surface.InitializeLifetimeService"></a>

### Surface.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.IsPropertyEditable"></a>

### Surface.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Surface.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.IsPropertyVisible"></a>

### Surface.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Surface.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.Paste"></a>

### Surface.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Surface.PropertyByAPIName"></a>

### Surface.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Surface.PropertyById"></a>

### Surface.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Surface.PropertyByName"></a>

### Surface.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Surface.RemoveFromGroup"></a>

### Surface.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Surface.RemoveParameter"></a>

### Surface.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

