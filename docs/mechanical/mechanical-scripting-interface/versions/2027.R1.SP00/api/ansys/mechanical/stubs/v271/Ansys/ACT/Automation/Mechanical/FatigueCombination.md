# `FatigueCombination`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FatigueCombination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FatigueCombination(internalObject: Any)

<a id="FatigueCombination"></a>

### *class* FatigueCombination(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FatigueCombination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FatigueCombination.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FatigueCombination.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddDamage`](#FatigueCombination.AddDamage)                                 | Creates a new FatigueDamage                                                                 |
| [`AddImage`](#FatigueCombination.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FatigueCombination.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FatigueCombination.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FatigueCombination.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FatigueCombination.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FatigueCombination.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FatigueCombination.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FatigueCombination.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FatigueCombination.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FatigueCombination.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#FatigueCombination.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FatigueCombination.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FatigueCombination.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FatigueCombination.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FatigueCombination.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FatigueCombination.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FatigueCombination.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FatigueCombination.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FatigueCombination.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FatigueCombination.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FatigueCombination.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FatigueCombination.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FatigueCombination.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FatigueCombination.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FatigueCombination.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FatigueCombination.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FatigueCombination.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FatigueCombination.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FatigueCombination.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FatigueCombination.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FatigueCombination.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FatigueCombination.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FatigueCombination.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FatigueCombination.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FatigueCombination.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FatigueCombination.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FatigueCombination.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#FatigueCombination.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#FatigueCombination.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#FatigueCombination.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FatigueCombination.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#FatigueCombination.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#FatigueCombination.IconName)                               | IconName property.                                            |
| [`Images`](#FatigueCombination.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FatigueCombination.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#FatigueCombination.Name)                                       | Name property.                                                |
| [`ObjectId`](#FatigueCombination.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#FatigueCombination.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#FatigueCombination.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#FatigueCombination.Parent)                                   | Parent property.                                              |
| [`Properties`](#FatigueCombination.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#FatigueCombination.State)                                     | State property.                                               |
| [`VisibleProperties`](#FatigueCombination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueCombination.AttachedRefs"></a>

### *property* FatigueCombination.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Children"></a>

### *property* FatigueCombination.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.ClsId"></a>

### *property* FatigueCombination.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Comments"></a>

### *property* FatigueCombination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.DataModelObjectCategory"></a>

### *property* FatigueCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupingFolder"></a>

### *property* FatigueCombination.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.IconName"></a>

### *property* FatigueCombination.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Images"></a>

### *property* FatigueCombination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.InternalObject"></a>

### *property* FatigueCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueCombinationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Name"></a>

### *property* FatigueCombination.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.ObjectId"></a>

### *property* FatigueCombination.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.ObjectState"></a>

### *property* FatigueCombination.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.ObjectTags"></a>

### *property* FatigueCombination.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Parent"></a>

### *property* FatigueCombination.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Properties"></a>

### *property* FatigueCombination.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.State"></a>

### *property* FatigueCombination.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.VisibleProperties"></a>

### *property* FatigueCombination.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueCombination.Activate"></a>

### FatigueCombination.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddComment"></a>

### FatigueCombination.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddDamage"></a>

### FatigueCombination.AddDamage() → [Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage](Results/FatigueToolResults/FatigueDamage.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueDamage)

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddImage"></a>

### FatigueCombination.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Copy"></a>

### FatigueCombination.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CopyTo"></a>

### FatigueCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CreateObjRef"></a>

### FatigueCombination.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CreateParameter"></a>

### FatigueCombination.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Cut"></a>

### FatigueCombination.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Delete"></a>

### FatigueCombination.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Duplicate"></a>

### FatigueCombination.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Equals"></a>

### FatigueCombination.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.EvaluateAllResults"></a>

### FatigueCombination.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetAPIName"></a>

### FatigueCombination.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetAllProperties"></a>

### FatigueCombination.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetChildren"></a>

### FatigueCombination.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FatigueCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetDetailsView"></a>

### FatigueCombination.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetEnumName"></a>

### FatigueCombination.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetHashCode"></a>

### FatigueCombination.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetIconFile"></a>

### FatigueCombination.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetLifetimeService"></a>

### FatigueCombination.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetObjectData"></a>

### FatigueCombination.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetParameter"></a>

### FatigueCombination.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetPath"></a>

### FatigueCombination.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetPropertyName"></a>

### FatigueCombination.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetPropertyValue"></a>

### FatigueCombination.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetVisibleProperties"></a>

### FatigueCombination.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetVisiblePropertyNames"></a>

### FatigueCombination.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupAllSimilarChildren"></a>

### FatigueCombination.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupSimilarObjects"></a>

### FatigueCombination.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.InitializeLifetimeService"></a>

### FatigueCombination.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.IsPropertyEditable"></a>

### FatigueCombination.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueCombination.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.IsPropertyVisible"></a>

### FatigueCombination.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FatigueCombination.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Paste"></a>

### FatigueCombination.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyByAPIName"></a>

### FatigueCombination.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyById"></a>

### FatigueCombination.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyByName"></a>

### FatigueCombination.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.RemoveFromGroup"></a>

### FatigueCombination.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.RemoveParameter"></a>

### FatigueCombination.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

