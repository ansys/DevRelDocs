# `VirtualCell`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.VirtualCell"></a>

#### *class* Ansys.ACT.Automation.Mechanical.VirtualCell(internalObject: Any)

<a id="VirtualCell"></a>

### *class* VirtualCell(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a VirtualCell.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#VirtualCell.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#VirtualCell.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#VirtualCell.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#VirtualCell.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#VirtualCell.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#VirtualCell.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#VirtualCell.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#VirtualCell.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#VirtualCell.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#VirtualCell.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#VirtualCell.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#VirtualCell.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#VirtualCell.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#VirtualCell.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#VirtualCell.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#VirtualCell.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#VirtualCell.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#VirtualCell.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#VirtualCell.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#VirtualCell.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#VirtualCell.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#VirtualCell.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#VirtualCell.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#VirtualCell.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#VirtualCell.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#VirtualCell.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#VirtualCell.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#VirtualCell.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#VirtualCell.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#VirtualCell.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#VirtualCell.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#VirtualCell.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#VirtualCell.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#VirtualCell.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#VirtualCell.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#VirtualCell.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#VirtualCell.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#VirtualCell.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#VirtualCell.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#VirtualCell.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#VirtualCell.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#VirtualCell.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VirtualCell.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#VirtualCell.Figures)                                         | Gets the list of associated figures.                          |
| [`Geometry`](Geometry.md#Geometry)                                        | Gets the Geometry.                                            |
| [`GroupingFolder`](#VirtualCell.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#VirtualCell.IconName)                                       | IconName property.                                            |
| [`Images`](#VirtualCell.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#VirtualCell.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Name`](#VirtualCell.Name)                                               | Name property.                                                |
| [`ObjectId`](#VirtualCell.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#VirtualCell.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#VirtualCell.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#VirtualCell.Parent)                                           | Parent property.                                              |
| [`ProjectToUnderlyingGeometry`](#VirtualCell.ProjectToUnderlyingGeometry) | Gets or sets the ProjectToUnderlyingGeometry.                 |
| [`Properties`](#VirtualCell.Properties)                                   | Gets the list of properties for this object.                  |
| [`State`](#VirtualCell.State)                                             | State property.                                               |
| [`VTClass`](#VirtualCell.VTClass)                                         | Gets the VTClass.                                             |
| [`VisibleProperties`](#VirtualCell.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VirtualCell.AttachedRefs"></a>

### *property* VirtualCell.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Children"></a>

### *property* VirtualCell.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ClsId"></a>

### *property* VirtualCell.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Comments"></a>

### *property* VirtualCell.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.DataModelObjectCategory"></a>

### *property* VirtualCell.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Figures"></a>

### *property* VirtualCell.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Geometry"></a>

### *property* VirtualCell.Geometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupingFolder"></a>

### *property* VirtualCell.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.IconName"></a>

### *property* VirtualCell.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Images"></a>

### *property* VirtualCell.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.InternalObject"></a>

### *property* VirtualCell.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSVirtualCellAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Name"></a>

### *property* VirtualCell.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ObjectId"></a>

### *property* VirtualCell.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ObjectState"></a>

### *property* VirtualCell.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ObjectTags"></a>

### *property* VirtualCell.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Parent"></a>

### *property* VirtualCell.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.ProjectToUnderlyingGeometry"></a>

### *property* VirtualCell.ProjectToUnderlyingGeometry *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProjectToUnderlyingGeometry.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Properties"></a>

### *property* VirtualCell.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.State"></a>

### *property* VirtualCell.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.VTClass"></a>

### *property* VirtualCell.VTClass *: [Ansys.Mechanical.DataModel.Enums.VirtualCellClassType](../../../Mechanical/DataModel/Enums/VirtualCellClassType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.VirtualCellClassType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the VTClass.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.VisibleProperties"></a>

### *property* VirtualCell.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VirtualCell.Activate"></a>

### VirtualCell.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddComment"></a>

### VirtualCell.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddFigure"></a>

### VirtualCell.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.AddImage"></a>

### VirtualCell.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Copy"></a>

### VirtualCell.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CopyTo"></a>

### VirtualCell.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CreateObjRef"></a>

### VirtualCell.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.CreateParameter"></a>

### VirtualCell.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Cut"></a>

### VirtualCell.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Delete"></a>

### VirtualCell.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Duplicate"></a>

### VirtualCell.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Equals"></a>

### VirtualCell.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetAPIName"></a>

### VirtualCell.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetAllProperties"></a>

### VirtualCell.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetChildren"></a>

### VirtualCell.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### VirtualCell.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetDetailsView"></a>

### VirtualCell.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetEnumName"></a>

### VirtualCell.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetHashCode"></a>

### VirtualCell.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetIconFile"></a>

### VirtualCell.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetLifetimeService"></a>

### VirtualCell.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetObjectData"></a>

### VirtualCell.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetParameter"></a>

### VirtualCell.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetPath"></a>

### VirtualCell.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetPropertyName"></a>

### VirtualCell.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetPropertyValue"></a>

### VirtualCell.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetVisibleProperties"></a>

### VirtualCell.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GetVisiblePropertyNames"></a>

### VirtualCell.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupAllSimilarChildren"></a>

### VirtualCell.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.GroupSimilarObjects"></a>

### VirtualCell.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.InitializeLifetimeService"></a>

### VirtualCell.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.IsPropertyEditable"></a>

### VirtualCell.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VirtualCell.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.IsPropertyVisible"></a>

### VirtualCell.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VirtualCell.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.Paste"></a>

### VirtualCell.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyByAPIName"></a>

### VirtualCell.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyById"></a>

### VirtualCell.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.PropertyByName"></a>

### VirtualCell.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.RemoveFromGroup"></a>

### VirtualCell.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="VirtualCell.RemoveParameter"></a>

### VirtualCell.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

