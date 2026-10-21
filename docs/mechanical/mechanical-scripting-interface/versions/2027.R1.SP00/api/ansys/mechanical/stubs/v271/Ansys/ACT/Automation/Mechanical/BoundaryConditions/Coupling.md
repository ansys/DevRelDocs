# `Coupling`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling(internalObject: Any)

<a id="Coupling"></a>

### *class* Coupling(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Coupling.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Coupling.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Coupling.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#Coupling.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Coupling.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Coupling.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Coupling.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Coupling.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Coupling.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Coupling.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Coupling.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Coupling.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Coupling.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Coupling.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Coupling.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Coupling.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Coupling.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Coupling.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Coupling.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Coupling.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Coupling.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Coupling.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Coupling.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Coupling.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Coupling.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Coupling.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Coupling.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Coupling.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Coupling.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Coupling.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Coupling.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Coupling.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Coupling.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Coupling.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Coupling.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Coupling.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Coupling.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Coupling.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Coupling.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Coupling.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Coupling.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Coupling.Comments)                               | Gets the list of associated comments.                         |
| [`DOFSelection`](#Coupling.DOFSelection)                       | Gets or sets the DOFSelection.                                |
| [`DataModelObjectCategory`](#Coupling.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#Coupling.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Coupling.IconName)                               | IconName property.                                            |
| [`Id`](#Coupling.Id)                                           | Id property.                                                  |
| [`Ids`](#Coupling.Ids)                                         | Ids property.                                                 |
| [`Images`](#Coupling.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Coupling.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LocalCoordinates`](#Coupling.LocalCoordinates)               | Gets or sets the LocalCoordinates.                            |
| [`Location`](#Coupling.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#Coupling.Name)                                       | Name property.                                                |
| [`ObjectId`](#Coupling.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Coupling.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Coupling.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Coupling.Parent)                                   | Parent property.                                              |
| [`Properties`](#Coupling.Properties)                           | Gets the list of properties for this object.                  |
| [`SelectionType`](#Coupling.SelectionType)                     | SelectionType property.                                       |
| [`State`](#Coupling.State)                                     | State property.                                               |
| [`Suppressed`](#Coupling.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Coupling.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Coupling.AttachedRefs"></a>

### *property* Coupling.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Children"></a>

### *property* Coupling.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.ClsId"></a>

### *property* Coupling.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Comments"></a>

### *property* Coupling.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DOFSelection"></a>

### *property* Coupling.DOFSelection *: [Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType](../../../../Mechanical/DataModel/Enums/CouplingConditionDOFType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CouplingConditionDOFType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DOFSelection.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.DataModelObjectCategory"></a>

### *property* Coupling.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupingFolder"></a>

### *property* Coupling.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.IconName"></a>

### *property* Coupling.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Id"></a>

### *property* Coupling.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Ids"></a>

### *property* Coupling.Ids *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Ids property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Images"></a>

### *property* Coupling.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.InternalObject"></a>

### *property* Coupling.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCouplingConditionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.LocalCoordinates"></a>

### *property* Coupling.LocalCoordinates *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalCoordinates.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Location"></a>

### *property* Coupling.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Name"></a>

### *property* Coupling.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.ObjectId"></a>

### *property* Coupling.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.ObjectState"></a>

### *property* Coupling.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.ObjectTags"></a>

### *property* Coupling.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Parent"></a>

### *property* Coupling.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Properties"></a>

### *property* Coupling.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.SelectionType"></a>

### *property* Coupling.SelectionType *: [Ansys.ACT.Interfaces.Common.SelectionTypeEnum](../../../Interfaces/Common/SelectionTypeEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.SelectionTypeEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SelectionType property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.State"></a>

### *property* Coupling.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Suppressed"></a>

### *property* Coupling.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.VisibleProperties"></a>

### *property* Coupling.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Coupling.Activate"></a>

### Coupling.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddComment"></a>

### Coupling.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.AddImage"></a>

### Coupling.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Copy"></a>

### Coupling.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CopyTo"></a>

### Coupling.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CreateObjRef"></a>

### Coupling.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.CreateParameter"></a>

### Coupling.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Cut"></a>

### Coupling.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Delete"></a>

### Coupling.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Duplicate"></a>

### Coupling.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Equals"></a>

### Coupling.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetAPIName"></a>

### Coupling.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetAllProperties"></a>

### Coupling.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetChildren"></a>

### Coupling.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Coupling.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetDetailsView"></a>

### Coupling.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetEnumName"></a>

### Coupling.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetHashCode"></a>

### Coupling.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetIconFile"></a>

### Coupling.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetLifetimeService"></a>

### Coupling.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetObjectData"></a>

### Coupling.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetParameter"></a>

### Coupling.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetPath"></a>

### Coupling.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetPropertyName"></a>

### Coupling.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetPropertyValue"></a>

### Coupling.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetVisibleProperties"></a>

### Coupling.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GetVisiblePropertyNames"></a>

### Coupling.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupAllSimilarChildren"></a>

### Coupling.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.GroupSimilarObjects"></a>

### Coupling.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.InitializeLifetimeService"></a>

### Coupling.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.IsPropertyEditable"></a>

### Coupling.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Coupling.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.IsPropertyVisible"></a>

### Coupling.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Coupling.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.Paste"></a>

### Coupling.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByAPIName"></a>

### Coupling.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyById"></a>

### Coupling.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.PropertyByName"></a>

### Coupling.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.RemoveFromGroup"></a>

### Coupling.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Coupling.RemoveParameter"></a>

### Coupling.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

