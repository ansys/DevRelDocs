# `Convergence`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.Convergence(internalObject: Any)

<a id="Convergence"></a>

### *class* Convergence(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Convergence.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Convergence.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Convergence.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Convergence.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Convergence.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Convergence.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Convergence.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Convergence.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Convergence.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Convergence.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Convergence.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Convergence.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Convergence.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Convergence.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Convergence.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Convergence.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Convergence.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Convergence.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Convergence.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Convergence.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Convergence.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Convergence.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Convergence.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Convergence.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Convergence.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Convergence.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Convergence.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Convergence.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Convergence.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Convergence.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Convergence.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Convergence.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Convergence.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Convergence.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Convergence.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Convergence.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Convergence.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Convergence.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Convergence.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AllowableChange`](#Convergence.AllowableChange)                 | Gets or sets the AllowableChange.                             |
| [`AttachedRefs`](#Convergence.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Convergence.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Convergence.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Convergence.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Convergence.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#Convergence.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Convergence.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Convergence.IconName)                               | IconName property.                                            |
| [`Images`](#Convergence.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Convergence.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`IsConverged`](#Convergence.IsConverged)                         | Gets the IsConverged.                                         |
| [`LastChange`](#Convergence.LastChange)                           | Gets the LastChange.                                          |
| [`Name`](#Convergence.Name)                                       | Name property.                                                |
| [`ObjectId`](#Convergence.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Convergence.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Convergence.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Convergence.Parent)                                   | Parent property.                                              |
| [`Properties`](#Convergence.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#Convergence.State)                                     | State property.                                               |
| [`Type`](#Convergence.Type)                                       | Gets or sets the Type.                                        |
| [`VisibleProperties`](#Convergence.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Convergence.AllowableChange"></a>

### *property* Convergence.AllowableChange *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AllowableChange.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AttachedRefs"></a>

### *property* Convergence.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Children"></a>

### *property* Convergence.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.ClsId"></a>

### *property* Convergence.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Comments"></a>

### *property* Convergence.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.DataModelObjectCategory"></a>

### *property* Convergence.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Figures"></a>

### *property* Convergence.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupingFolder"></a>

### *property* Convergence.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.IconName"></a>

### *property* Convergence.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Images"></a>

### *property* Convergence.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.InternalObject"></a>

### *property* Convergence.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConvergenceAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.IsConverged"></a>

### *property* Convergence.IsConverged *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsConverged.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.LastChange"></a>

### *property* Convergence.LastChange *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LastChange.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Name"></a>

### *property* Convergence.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.ObjectId"></a>

### *property* Convergence.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.ObjectState"></a>

### *property* Convergence.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.ObjectTags"></a>

### *property* Convergence.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Parent"></a>

### *property* Convergence.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Properties"></a>

### *property* Convergence.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.State"></a>

### *property* Convergence.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Type"></a>

### *property* Convergence.Type *: [Ansys.Mechanical.DataModel.Enums.ConvergenceType](../../../../Mechanical/DataModel/Enums/ConvergenceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ConvergenceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Type.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.VisibleProperties"></a>

### *property* Convergence.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Convergence.Activate"></a>

### Convergence.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddComment"></a>

### Convergence.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddFigure"></a>

### Convergence.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.AddImage"></a>

### Convergence.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Copy"></a>

### Convergence.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CopyTo"></a>

### Convergence.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CreateObjRef"></a>

### Convergence.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.CreateParameter"></a>

### Convergence.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Cut"></a>

### Convergence.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Delete"></a>

### Convergence.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Duplicate"></a>

### Convergence.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Equals"></a>

### Convergence.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetAPIName"></a>

### Convergence.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetAllProperties"></a>

### Convergence.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetChildren"></a>

### Convergence.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Convergence.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetDetailsView"></a>

### Convergence.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetEnumName"></a>

### Convergence.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetHashCode"></a>

### Convergence.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetIconFile"></a>

### Convergence.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetLifetimeService"></a>

### Convergence.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetObjectData"></a>

### Convergence.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetParameter"></a>

### Convergence.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetPath"></a>

### Convergence.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetPropertyName"></a>

### Convergence.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetPropertyValue"></a>

### Convergence.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetVisibleProperties"></a>

### Convergence.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GetVisiblePropertyNames"></a>

### Convergence.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupAllSimilarChildren"></a>

### Convergence.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.GroupSimilarObjects"></a>

### Convergence.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.InitializeLifetimeService"></a>

### Convergence.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.IsPropertyEditable"></a>

### Convergence.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Convergence.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.IsPropertyVisible"></a>

### Convergence.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Convergence.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.Paste"></a>

### Convergence.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyByAPIName"></a>

### Convergence.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyById"></a>

### Convergence.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.PropertyByName"></a>

### Convergence.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.RemoveFromGroup"></a>

### Convergence.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Convergence.RemoveParameter"></a>

### Convergence.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

