# `PSDLoad`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDLoad(internalObject: Any)

<a id="PSDLoad"></a>

### *class* PSDLoad(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PSDLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PSDLoad.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PSDLoad.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PSDLoad.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PSDLoad.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PSDLoad.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PSDLoad.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PSDLoad.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PSDLoad.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PSDLoad.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PSDLoad.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PSDLoad.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PSDLoad.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PSDLoad.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PSDLoad.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PSDLoad.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PSDLoad.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PSDLoad.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PSDLoad.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PSDLoad.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PSDLoad.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PSDLoad.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PSDLoad.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PSDLoad.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PSDLoad.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PSDLoad.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PSDLoad.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PSDLoad.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PSDLoad.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PSDLoad.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PSDLoad.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PSDLoad.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PSDLoad.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PSDLoad.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PSDLoad.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PSDLoad.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PSDLoad.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PSDLoad.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PSDLoad.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PSDLoad.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BoundaryCondition`](#PSDLoad.BoundaryCondition)               | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDLoad.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PSDLoad.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PSDLoad.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDLoad.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Direction`](#PSDLoad.Direction)                               | Gets or sets the Direction.                                   |
| [`Figures`](#PSDLoad.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PSDLoad.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#PSDLoad.IconName)                                 | IconName property.                                            |
| [`Images`](#PSDLoad.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PSDLoad.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PSDLoad.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#PSDLoad.Name)                                         | Name property.                                                |
| [`ObjectId`](#PSDLoad.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PSDLoad.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PSDLoad.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PSDLoad.Parent)                                     | Parent property.                                              |
| [`Properties`](#PSDLoad.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PSDLoad.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#PSDLoad.State)                                       | State property.                                               |
| [`Suppressed`](#PSDLoad.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PSDLoad.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#PSDLoad.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDLoad.AttachedRefs"></a>

### *property* PSDLoad.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.BoundaryCondition"></a>

### *property* PSDLoad.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Children"></a>

### *property* PSDLoad.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ClsId"></a>

### *property* PSDLoad.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Comments"></a>

### *property* PSDLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.DataModelObjectCategory"></a>

### *property* PSDLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Direction"></a>

### *property* PSDLoad.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Figures"></a>

### *property* PSDLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupingFolder"></a>

### *property* PSDLoad.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.IconName"></a>

### *property* PSDLoad.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Images"></a>

### *property* PSDLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ImportableObjectSourceId"></a>

### *property* PSDLoad.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.InternalObject"></a>

### *property* PSDLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Name"></a>

### *property* PSDLoad.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ObjectId"></a>

### *property* PSDLoad.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ObjectState"></a>

### *property* PSDLoad.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ObjectTags"></a>

### *property* PSDLoad.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Parent"></a>

### *property* PSDLoad.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Properties"></a>

### *property* PSDLoad.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ReadOnly"></a>

### *property* PSDLoad.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.State"></a>

### *property* PSDLoad.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Suppressed"></a>

### *property* PSDLoad.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.TransferableObjectId"></a>

### *property* PSDLoad.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.VisibleProperties"></a>

### *property* PSDLoad.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDLoad.Activate"></a>

### PSDLoad.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddComment"></a>

### PSDLoad.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddFigure"></a>

### PSDLoad.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddImage"></a>

### PSDLoad.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Copy"></a>

### PSDLoad.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CopyTo"></a>

### PSDLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CreateObjRef"></a>

### PSDLoad.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CreateParameter"></a>

### PSDLoad.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Cut"></a>

### PSDLoad.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Delete"></a>

### PSDLoad.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Duplicate"></a>

### PSDLoad.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Equals"></a>

### PSDLoad.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetAPIName"></a>

### PSDLoad.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetAllProperties"></a>

### PSDLoad.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetChildren"></a>

### PSDLoad.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PSDLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetDetailsView"></a>

### PSDLoad.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetEnumName"></a>

### PSDLoad.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetHashCode"></a>

### PSDLoad.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetIconFile"></a>

### PSDLoad.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetLifetimeService"></a>

### PSDLoad.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetObjectData"></a>

### PSDLoad.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetParameter"></a>

### PSDLoad.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetPath"></a>

### PSDLoad.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetPropertyName"></a>

### PSDLoad.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetPropertyValue"></a>

### PSDLoad.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetVisibleProperties"></a>

### PSDLoad.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetVisiblePropertyNames"></a>

### PSDLoad.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupAllSimilarChildren"></a>

### PSDLoad.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupSimilarObjects"></a>

### PSDLoad.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.InitializeLifetimeService"></a>

### PSDLoad.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.IsPropertyEditable"></a>

### PSDLoad.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDLoad.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.IsPropertyVisible"></a>

### PSDLoad.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PSDLoad.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Paste"></a>

### PSDLoad.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyByAPIName"></a>

### PSDLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyById"></a>

### PSDLoad.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyByName"></a>

### PSDLoad.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.RemoveFromGroup"></a>

### PSDLoad.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.RemoveParameter"></a>

### PSDLoad.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

