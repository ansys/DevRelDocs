# `Criterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Criterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Criterion(internalObject: Any)

<a id="Criterion"></a>

### *class* Criterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Criterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Criterion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Criterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Criterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Criterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Criterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Criterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Criterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Criterion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Criterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Criterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Criterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Criterion.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Criterion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Criterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Criterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Criterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Criterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Criterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Criterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Criterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Criterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Criterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Criterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Criterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Criterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Criterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Criterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Criterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Criterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Criterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Criterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Criterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Criterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Criterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Criterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Criterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Criterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Criterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Criterion.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Criterion.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Criterion.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Criterion.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Criterion.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#Criterion.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Criterion.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Criterion.IconName)                                 | IconName property.                                            |
| [`Images`](#Criterion.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Criterion.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Criterion.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#Criterion.Name)                                         | Name property.                                                |
| [`ObjectId`](#Criterion.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Criterion.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Criterion.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Criterion.Parent)                                     | Parent property.                                              |
| [`Properties`](#Criterion.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Criterion.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#Criterion.State)                                       | State property.                                               |
| [`Suppressed`](#Criterion.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#Criterion.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Criterion.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Criterion.AttachedRefs"></a>

### *property* Criterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Children"></a>

### *property* Criterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ClsId"></a>

### *property* Criterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Comments"></a>

### *property* Criterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.DataModelObjectCategory"></a>

### *property* Criterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Figures"></a>

### *property* Criterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GroupingFolder"></a>

### *property* Criterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.IconName"></a>

### *property* Criterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Images"></a>

### *property* Criterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ImportableObjectSourceId"></a>

### *property* Criterion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.InternalObject"></a>

### *property* Criterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Name"></a>

### *property* Criterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ObjectId"></a>

### *property* Criterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ObjectState"></a>

### *property* Criterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ObjectTags"></a>

### *property* Criterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Parent"></a>

### *property* Criterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Properties"></a>

### *property* Criterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.ReadOnly"></a>

### *property* Criterion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.State"></a>

### *property* Criterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Suppressed"></a>

### *property* Criterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.TransferableObjectId"></a>

### *property* Criterion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.VisibleProperties"></a>

### *property* Criterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Criterion.Activate"></a>

### Criterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.AddComment"></a>

### Criterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.AddFigure"></a>

### Criterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.AddImage"></a>

### Criterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Copy"></a>

### Criterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.CopyTo"></a>

### Criterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.CreateObjRef"></a>

### Criterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.CreateParameter"></a>

### Criterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Cut"></a>

### Criterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Delete"></a>

### Criterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Duplicate"></a>

### Criterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Equals"></a>

### Criterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetAPIName"></a>

### Criterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetAllProperties"></a>

### Criterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetChildren"></a>

### Criterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Criterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetDetailsView"></a>

### Criterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetEnumName"></a>

### Criterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetHashCode"></a>

### Criterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetIconFile"></a>

### Criterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetLifetimeService"></a>

### Criterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetObjectData"></a>

### Criterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetParameter"></a>

### Criterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetPath"></a>

### Criterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetPropertyName"></a>

### Criterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetPropertyValue"></a>

### Criterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetVisibleProperties"></a>

### Criterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GetVisiblePropertyNames"></a>

### Criterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GroupAllSimilarChildren"></a>

### Criterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.GroupSimilarObjects"></a>

### Criterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.InitializeLifetimeService"></a>

### Criterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.IsPropertyEditable"></a>

### Criterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Criterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.IsPropertyVisible"></a>

### Criterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Criterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.Paste"></a>

### Criterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.PropertyByAPIName"></a>

### Criterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Criterion.PropertyById"></a>

### Criterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.PropertyByName"></a>

### Criterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.RemoveFromGroup"></a>

### Criterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Criterion.RemoveParameter"></a>

### Criterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

