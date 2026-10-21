# `ParameterVariable`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ParameterVariable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ParameterVariable(internalObject: Any)

<a id="ParameterVariable"></a>

### *class* ParameterVariable(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ParameterVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ParameterVariable.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ParameterVariable.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ParameterVariable.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ParameterVariable.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ParameterVariable.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ParameterVariable.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ParameterVariable.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ParameterVariable.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ParameterVariable.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ParameterVariable.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ParameterVariable.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ParameterVariable.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ParameterVariable.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ParameterVariable.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ParameterVariable.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ParameterVariable.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ParameterVariable.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ParameterVariable.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ParameterVariable.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ParameterVariable.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ParameterVariable.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ParameterVariable.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ParameterVariable.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ParameterVariable.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ParameterVariable.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ParameterVariable.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ParameterVariable.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ParameterVariable.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ParameterVariable.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ParameterVariable.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ParameterVariable.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ParameterVariable.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ParameterVariable.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ParameterVariable.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ParameterVariable.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ParameterVariable.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ParameterVariable.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ParameterVariable.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ParameterVariable.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ParameterVariable.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ParameterVariable.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ParameterVariable.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ParameterVariable.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ParameterVariable.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ParameterVariable.IconName)                               | IconName property.                                            |
| [`Images`](#ParameterVariable.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ParameterVariable.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ParameterVariable.Name)                                       | Name property.                                                |
| [`ObjectId`](#ParameterVariable.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ParameterVariable.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ParameterVariable.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ParameterVariable.Parent)                                   | Parent property.                                              |
| [`Properties`](#ParameterVariable.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ParameterVariable.State)                                     | State property.                                               |
| [`VisibleProperties`](#ParameterVariable.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ParameterVariable.AttachedRefs"></a>

### *property* ParameterVariable.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Children"></a>

### *property* ParameterVariable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.ClsId"></a>

### *property* ParameterVariable.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Comments"></a>

### *property* ParameterVariable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.DataModelObjectCategory"></a>

### *property* ParameterVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Figures"></a>

### *property* ParameterVariable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupingFolder"></a>

### *property* ParameterVariable.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.IconName"></a>

### *property* ParameterVariable.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Images"></a>

### *property* ParameterVariable.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.InternalObject"></a>

### *property* ParameterVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Name"></a>

### *property* ParameterVariable.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.ObjectId"></a>

### *property* ParameterVariable.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.ObjectState"></a>

### *property* ParameterVariable.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.ObjectTags"></a>

### *property* ParameterVariable.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Parent"></a>

### *property* ParameterVariable.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Properties"></a>

### *property* ParameterVariable.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.State"></a>

### *property* ParameterVariable.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.VisibleProperties"></a>

### *property* ParameterVariable.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ParameterVariable.Activate"></a>

### ParameterVariable.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddComment"></a>

### ParameterVariable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddFigure"></a>

### ParameterVariable.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.AddImage"></a>

### ParameterVariable.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Copy"></a>

### ParameterVariable.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CopyTo"></a>

### ParameterVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CreateObjRef"></a>

### ParameterVariable.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.CreateParameter"></a>

### ParameterVariable.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Cut"></a>

### ParameterVariable.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Duplicate"></a>

### ParameterVariable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Equals"></a>

### ParameterVariable.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetAPIName"></a>

### ParameterVariable.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetAllProperties"></a>

### ParameterVariable.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetChildren"></a>

### ParameterVariable.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ParameterVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetDetailsView"></a>

### ParameterVariable.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetEnumName"></a>

### ParameterVariable.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetHashCode"></a>

### ParameterVariable.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetIconFile"></a>

### ParameterVariable.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetLifetimeService"></a>

### ParameterVariable.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetObjectData"></a>

### ParameterVariable.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetParameter"></a>

### ParameterVariable.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetPath"></a>

### ParameterVariable.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetPropertyName"></a>

### ParameterVariable.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetPropertyValue"></a>

### ParameterVariable.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetVisibleProperties"></a>

### ParameterVariable.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GetVisiblePropertyNames"></a>

### ParameterVariable.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupAllSimilarChildren"></a>

### ParameterVariable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.GroupSimilarObjects"></a>

### ParameterVariable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.InitializeLifetimeService"></a>

### ParameterVariable.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.IsPropertyEditable"></a>

### ParameterVariable.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ParameterVariable.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.IsPropertyVisible"></a>

### ParameterVariable.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ParameterVariable.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.Paste"></a>

### ParameterVariable.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyByAPIName"></a>

### ParameterVariable.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyById"></a>

### ParameterVariable.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.PropertyByName"></a>

### ParameterVariable.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.RemoveFromGroup"></a>

### ParameterVariable.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariable.RemoveParameter"></a>

### ParameterVariable.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

