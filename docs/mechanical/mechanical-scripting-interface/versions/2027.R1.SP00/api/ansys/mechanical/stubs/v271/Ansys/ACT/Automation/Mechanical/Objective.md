# `Objective`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Objective"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Objective(internalObject: Any)

<a id="Objective"></a>

### *class* Objective(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Objective.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Objective.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Objective.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#Objective.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Objective.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Objective.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Objective.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Objective.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Objective.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Objective.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Objective.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Objective.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Objective.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Objective.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Objective.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Objective.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Objective.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Objective.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Objective.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Objective.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Objective.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Objective.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Objective.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Objective.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Objective.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Objective.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Objective.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Objective.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Objective.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Objective.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Objective.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Objective.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Objective.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Objective.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Objective.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Objective.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Objective.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Objective.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Objective.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#Objective.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#Objective.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#Objective.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Objective.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#Objective.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#Objective.IconName)                               | IconName property.                                            |
| [`Images`](#Objective.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Objective.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#Objective.Name)                                       | Name property.                                                |
| [`NormalizedSum`](#Objective.NormalizedSum)                     | Gets or sets the NormalizedSum.                               |
| [`ObjectId`](#Objective.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#Objective.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#Objective.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#Objective.Parent)                                   | Parent property.                                              |
| [`Properties`](#Objective.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#Objective.State)                                     | State property.                                               |
| [`Suppressed`](#Objective.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Objective.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`Worksheet`](#Objective.Worksheet)                             | Get the ObjectiveWorksheet action.                            |

<a id="property-detail"></a>

## Property detail

<a id="Objective.AttachedRefs"></a>

### *property* Objective.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Children"></a>

### *property* Objective.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Objective.ClsId"></a>

### *property* Objective.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Comments"></a>

### *property* Objective.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Objective.DataModelObjectCategory"></a>

### *property* Objective.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupingFolder"></a>

### *property* Objective.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.IconName"></a>

### *property* Objective.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Images"></a>

### *property* Objective.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Objective.InternalObject"></a>

### *property* Objective.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoObjectiveAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Name"></a>

### *property* Objective.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.NormalizedSum"></a>

### *property* Objective.NormalizedSum *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalizedSum.

<!-- !! processed by numpydoc !! -->

<a id="Objective.ObjectId"></a>

### *property* Objective.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.ObjectState"></a>

### *property* Objective.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.ObjectTags"></a>

### *property* Objective.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Parent"></a>

### *property* Objective.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Properties"></a>

### *property* Objective.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.State"></a>

### *property* Objective.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Suppressed"></a>

### *property* Objective.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Objective.VisibleProperties"></a>

### *property* Objective.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Worksheet"></a>

### *property* Objective.Worksheet *: [Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet](ObjectiveWorksheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ObjectiveWorksheet) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Objective.Activate"></a>

### Objective.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddComment"></a>

### Objective.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Objective.AddImage"></a>

### Objective.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Objective.Copy"></a>

### Objective.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CopyTo"></a>

### Objective.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CreateObjRef"></a>

### Objective.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.CreateParameter"></a>

### Objective.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Cut"></a>

### Objective.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Delete"></a>

### Objective.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Duplicate"></a>

### Objective.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Equals"></a>

### Objective.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetAPIName"></a>

### Objective.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetAllProperties"></a>

### Objective.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetChildren"></a>

### Objective.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Objective.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetDetailsView"></a>

### Objective.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetEnumName"></a>

### Objective.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetHashCode"></a>

### Objective.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetIconFile"></a>

### Objective.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetLifetimeService"></a>

### Objective.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetObjectData"></a>

### Objective.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetParameter"></a>

### Objective.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetPath"></a>

### Objective.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetPropertyName"></a>

### Objective.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetPropertyValue"></a>

### Objective.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetVisibleProperties"></a>

### Objective.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GetVisiblePropertyNames"></a>

### Objective.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupAllSimilarChildren"></a>

### Objective.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.GroupSimilarObjects"></a>

### Objective.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Objective.InitializeLifetimeService"></a>

### Objective.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.IsPropertyEditable"></a>

### Objective.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Objective.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.IsPropertyVisible"></a>

### Objective.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Objective.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.Paste"></a>

### Objective.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByAPIName"></a>

### Objective.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyById"></a>

### Objective.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Objective.PropertyByName"></a>

### Objective.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Objective.RemoveFromGroup"></a>

### Objective.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Objective.RemoveParameter"></a>

### Objective.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

