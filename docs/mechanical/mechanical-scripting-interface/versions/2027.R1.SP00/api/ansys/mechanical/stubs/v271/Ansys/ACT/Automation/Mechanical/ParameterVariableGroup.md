# `ParameterVariableGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ParameterVariableGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ParameterVariableGroup(internalObject: Any)

<a id="ParameterVariableGroup"></a>

### *class* ParameterVariableGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ParameterVariableGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ParameterVariableGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ParameterVariableGroup.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ParameterVariableGroup.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ParameterVariableGroup.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddParameterVariable`](#ParameterVariableGroup.AddParameterVariable)           | Create the object for working with an imported part.                                        |
| [`Copy`](#ParameterVariableGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ParameterVariableGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ParameterVariableGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ParameterVariableGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ParameterVariableGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#ParameterVariableGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ParameterVariableGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ParameterVariableGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ParameterVariableGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ParameterVariableGroup.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ParameterVariableGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ParameterVariableGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ParameterVariableGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ParameterVariableGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ParameterVariableGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ParameterVariableGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ParameterVariableGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ParameterVariableGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ParameterVariableGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ParameterVariableGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ParameterVariableGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ParameterVariableGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ParameterVariableGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ParameterVariableGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ParameterVariableGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ParameterVariableGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ParameterVariableGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ParameterVariableGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ParameterVariableGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ParameterVariableGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ParameterVariableGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ParameterVariableGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ParameterVariableGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ParameterVariableGroup.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ParameterVariableGroup.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ParameterVariableGroup.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ParameterVariableGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ParameterVariableGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ParameterVariableGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ParameterVariableGroup.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ParameterVariableGroup.IconName)                               | IconName property.                                            |
| [`Images`](#ParameterVariableGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ParameterVariableGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#ParameterVariableGroup.Name)                                       | Name property.                                                |
| [`ObjectId`](#ParameterVariableGroup.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ParameterVariableGroup.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ParameterVariableGroup.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ParameterVariableGroup.Parent)                                   | Parent property.                                              |
| [`Properties`](#ParameterVariableGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ParameterVariableGroup.State)                                     | State property.                                               |
| [`VisibleProperties`](#ParameterVariableGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ParameterVariableGroup.AttachedRefs"></a>

### *property* ParameterVariableGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Children"></a>

### *property* ParameterVariableGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.ClsId"></a>

### *property* ParameterVariableGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Comments"></a>

### *property* ParameterVariableGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.DataModelObjectCategory"></a>

### *property* ParameterVariableGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Figures"></a>

### *property* ParameterVariableGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GroupingFolder"></a>

### *property* ParameterVariableGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.IconName"></a>

### *property* ParameterVariableGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Images"></a>

### *property* ParameterVariableGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.InternalObject"></a>

### *property* ParameterVariableGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSParameterVariableGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Name"></a>

### *property* ParameterVariableGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.ObjectId"></a>

### *property* ParameterVariableGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.ObjectState"></a>

### *property* ParameterVariableGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.ObjectTags"></a>

### *property* ParameterVariableGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Parent"></a>

### *property* ParameterVariableGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Properties"></a>

### *property* ParameterVariableGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.State"></a>

### *property* ParameterVariableGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.VisibleProperties"></a>

### *property* ParameterVariableGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ParameterVariableGroup.Activate"></a>

### ParameterVariableGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddComment"></a>

### ParameterVariableGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddFigure"></a>

### ParameterVariableGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddImage"></a>

### ParameterVariableGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.AddParameterVariable"></a>

### ParameterVariableGroup.AddParameterVariable() → [Ansys.ACT.Automation.Mechanical.ParameterVariable](ParameterVariable.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ParameterVariable)

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Copy"></a>

### ParameterVariableGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.CopyTo"></a>

### ParameterVariableGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.CreateObjRef"></a>

### ParameterVariableGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.CreateParameter"></a>

### ParameterVariableGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Cut"></a>

### ParameterVariableGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Duplicate"></a>

### ParameterVariableGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Equals"></a>

### ParameterVariableGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetAPIName"></a>

### ParameterVariableGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetAllProperties"></a>

### ParameterVariableGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetChildren"></a>

### ParameterVariableGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ParameterVariableGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetDetailsView"></a>

### ParameterVariableGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetEnumName"></a>

### ParameterVariableGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetHashCode"></a>

### ParameterVariableGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetIconFile"></a>

### ParameterVariableGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetLifetimeService"></a>

### ParameterVariableGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetObjectData"></a>

### ParameterVariableGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetParameter"></a>

### ParameterVariableGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetPath"></a>

### ParameterVariableGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetPropertyName"></a>

### ParameterVariableGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetPropertyValue"></a>

### ParameterVariableGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetVisibleProperties"></a>

### ParameterVariableGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GetVisiblePropertyNames"></a>

### ParameterVariableGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GroupAllSimilarChildren"></a>

### ParameterVariableGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.GroupSimilarObjects"></a>

### ParameterVariableGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.InitializeLifetimeService"></a>

### ParameterVariableGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.IsPropertyEditable"></a>

### ParameterVariableGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ParameterVariableGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.IsPropertyVisible"></a>

### ParameterVariableGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ParameterVariableGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.Paste"></a>

### ParameterVariableGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.PropertyByAPIName"></a>

### ParameterVariableGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.PropertyById"></a>

### ParameterVariableGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.PropertyByName"></a>

### ParameterVariableGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.RemoveFromGroup"></a>

### ParameterVariableGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ParameterVariableGroup.RemoveParameter"></a>

### ParameterVariableGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

