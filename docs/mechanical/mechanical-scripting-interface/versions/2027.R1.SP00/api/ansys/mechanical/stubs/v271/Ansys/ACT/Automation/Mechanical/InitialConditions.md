# `InitialConditions`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialConditions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.InitialConditions(internalObject: Any)

<a id="InitialConditions"></a>

### *class* InitialConditions(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a InitialConditions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#InitialConditions.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#InitialConditions.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#InitialConditions.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#InitialConditions.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#InitialConditions.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#InitialConditions.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#InitialConditions.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#InitialConditions.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#InitialConditions.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#InitialConditions.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#InitialConditions.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#InitialConditions.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#InitialConditions.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#InitialConditions.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#InitialConditions.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#InitialConditions.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#InitialConditions.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#InitialConditions.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#InitialConditions.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#InitialConditions.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#InitialConditions.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#InitialConditions.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#InitialConditions.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#InitialConditions.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#InitialConditions.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#InitialConditions.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#InitialConditions.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#InitialConditions.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#InitialConditions.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`InsertAngularVelocity`](#InitialConditions.InsertAngularVelocity)         | Creates a new Angular Velocity                                                              |
| [`InsertDropHeight`](#InitialConditions.InsertDropHeight)                   | Creates a new Drop Height                                                                   |
| [`InsertInitialTemperature`](#InitialConditions.InsertInitialTemperature)   | Creates a new Initial Temperature                                                           |
| [`InsertVelocity`](#InitialConditions.InsertVelocity)                       | Creates a new Velocity                                                                      |
| [`IsPropertyEditable`](#InitialConditions.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#InitialConditions.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#InitialConditions.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#InitialConditions.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#InitialConditions.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#InitialConditions.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#InitialConditions.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#InitialConditions.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#InitialConditions.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#InitialConditions.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#InitialConditions.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#InitialConditions.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#InitialConditions.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#InitialConditions.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#InitialConditions.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#InitialConditions.IconName)                               | IconName property.                                            |
| [`Images`](#InitialConditions.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#InitialConditions.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#InitialConditions.Name)                                       | Name property.                                                |
| [`ObjectId`](#InitialConditions.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#InitialConditions.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#InitialConditions.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#InitialConditions.Parent)                                   | Parent property.                                              |
| [`Properties`](#InitialConditions.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#InitialConditions.State)                                     | State property.                                               |
| [`VisibleProperties`](#InitialConditions.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InitialConditions.AttachedRefs"></a>

### *property* InitialConditions.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Children"></a>

### *property* InitialConditions.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.ClsId"></a>

### *property* InitialConditions.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Comments"></a>

### *property* InitialConditions.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.DataModelObjectCategory"></a>

### *property* InitialConditions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Figures"></a>

### *property* InitialConditions.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupingFolder"></a>

### *property* InitialConditions.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.IconName"></a>

### *property* InitialConditions.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Images"></a>

### *property* InitialConditions.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InternalObject"></a>

### *property* InitialConditions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Name"></a>

### *property* InitialConditions.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.ObjectId"></a>

### *property* InitialConditions.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.ObjectState"></a>

### *property* InitialConditions.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.ObjectTags"></a>

### *property* InitialConditions.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Parent"></a>

### *property* InitialConditions.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Properties"></a>

### *property* InitialConditions.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.State"></a>

### *property* InitialConditions.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.VisibleProperties"></a>

### *property* InitialConditions.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InitialConditions.Activate"></a>

### InitialConditions.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddComment"></a>

### InitialConditions.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddFigure"></a>

### InitialConditions.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.AddImage"></a>

### InitialConditions.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Copy"></a>

### InitialConditions.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CopyTo"></a>

### InitialConditions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CreateObjRef"></a>

### InitialConditions.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.CreateParameter"></a>

### InitialConditions.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Cut"></a>

### InitialConditions.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Duplicate"></a>

### InitialConditions.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Equals"></a>

### InitialConditions.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetAPIName"></a>

### InitialConditions.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetAllProperties"></a>

### InitialConditions.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetChildren"></a>

### InitialConditions.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### InitialConditions.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetDetailsView"></a>

### InitialConditions.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetEnumName"></a>

### InitialConditions.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetHashCode"></a>

### InitialConditions.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetIconFile"></a>

### InitialConditions.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetLifetimeService"></a>

### InitialConditions.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetObjectData"></a>

### InitialConditions.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetParameter"></a>

### InitialConditions.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetPath"></a>

### InitialConditions.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetPropertyName"></a>

### InitialConditions.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetPropertyValue"></a>

### InitialConditions.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetVisibleProperties"></a>

### InitialConditions.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GetVisiblePropertyNames"></a>

### InitialConditions.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupAllSimilarChildren"></a>

### InitialConditions.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.GroupSimilarObjects"></a>

### InitialConditions.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InitializeLifetimeService"></a>

### InitialConditions.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertAngularVelocity"></a>

### InitialConditions.InsertAngularVelocity() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Angular Velocity

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertDropHeight"></a>

### InitialConditions.InsertDropHeight() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Drop Height

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertInitialTemperature"></a>

### InitialConditions.InsertInitialTemperature() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Initial Temperature

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.InsertVelocity"></a>

### InitialConditions.InsertVelocity() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.IsPropertyEditable"></a>

### InitialConditions.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### InitialConditions.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.IsPropertyVisible"></a>

### InitialConditions.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### InitialConditions.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.Paste"></a>

### InitialConditions.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyByAPIName"></a>

### InitialConditions.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyById"></a>

### InitialConditions.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.PropertyByName"></a>

### InitialConditions.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.RemoveFromGroup"></a>

### InitialConditions.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="InitialConditions.RemoveParameter"></a>

### InitialConditions.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

