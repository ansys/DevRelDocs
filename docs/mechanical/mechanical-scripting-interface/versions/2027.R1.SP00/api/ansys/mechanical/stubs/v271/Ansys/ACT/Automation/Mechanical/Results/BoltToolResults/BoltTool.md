# `BoltTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool(internalObject: Any)

<a id="BoltTool"></a>

### *class* BoltTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BoltTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BoltTool.Activate)                                   | Activate the current object.                                                                |
| [`AddAdjustment`](#BoltTool.AddAdjustment)                         | Creates a new BoltAdjustment                                                                |
| [`AddComment`](#BoltTool.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#BoltTool.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BoltTool.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddWorkingLoad`](#BoltTool.AddWorkingLoad)                       | Creates a new BoltWorkingLoad                                                               |
| [`Copy`](#BoltTool.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BoltTool.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BoltTool.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BoltTool.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BoltTool.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BoltTool.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#BoltTool.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BoltTool.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#BoltTool.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#BoltTool.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BoltTool.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BoltTool.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#BoltTool.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BoltTool.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BoltTool.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BoltTool.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BoltTool.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BoltTool.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BoltTool.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BoltTool.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BoltTool.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BoltTool.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BoltTool.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BoltTool.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BoltTool.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BoltTool.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BoltTool.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BoltTool.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BoltTool.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BoltTool.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#BoltTool.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BoltTool.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BoltTool.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BoltTool.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BoltTool.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#BoltTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#BoltTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#BoltTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#BoltTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#BoltTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#BoltTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#BoltTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#BoltTool.IconName)                               | IconName property.                                            |
| [`Images`](#BoltTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BoltTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#BoltTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#BoltTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#BoltTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#BoltTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#BoltTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#BoltTool.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#BoltTool.State)                                     | State property.                                               |
| [`VisibleProperties`](#BoltTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BoltTool.AttachedRefs"></a>

### *property* BoltTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Children"></a>

### *property* BoltTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.ClsId"></a>

### *property* BoltTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Comments"></a>

### *property* BoltTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.DataModelObjectCategory"></a>

### *property* BoltTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Figures"></a>

### *property* BoltTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupingFolder"></a>

### *property* BoltTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.IconName"></a>

### *property* BoltTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Images"></a>

### *property* BoltTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.InternalObject"></a>

### *property* BoltTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBoltToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Name"></a>

### *property* BoltTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.ObjectId"></a>

### *property* BoltTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.ObjectState"></a>

### *property* BoltTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.ObjectTags"></a>

### *property* BoltTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Parent"></a>

### *property* BoltTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Properties"></a>

### *property* BoltTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.State"></a>

### *property* BoltTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.VisibleProperties"></a>

### *property* BoltTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BoltTool.Activate"></a>

### BoltTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddAdjustment"></a>

### BoltTool.AddAdjustment() → [Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltAdjustment](BoltAdjustment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltAdjustment)

Creates a new BoltAdjustment

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddComment"></a>

### BoltTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddFigure"></a>

### BoltTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddImage"></a>

### BoltTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.AddWorkingLoad"></a>

### BoltTool.AddWorkingLoad() → [Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltWorkingLoad](BoltWorkingLoad.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltWorkingLoad)

Creates a new BoltWorkingLoad

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Copy"></a>

### BoltTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CopyTo"></a>

### BoltTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CreateObjRef"></a>

### BoltTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.CreateParameter"></a>

### BoltTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Cut"></a>

### BoltTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Delete"></a>

### BoltTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Duplicate"></a>

### BoltTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Equals"></a>

### BoltTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.EvaluateAllResults"></a>

### BoltTool.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetAPIName"></a>

### BoltTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetAllProperties"></a>

### BoltTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetChildren"></a>

### BoltTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BoltTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetDetailsView"></a>

### BoltTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetEnumName"></a>

### BoltTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetHashCode"></a>

### BoltTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetIconFile"></a>

### BoltTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetLifetimeService"></a>

### BoltTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetObjectData"></a>

### BoltTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetParameter"></a>

### BoltTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetPath"></a>

### BoltTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetPropertyName"></a>

### BoltTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetPropertyValue"></a>

### BoltTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetVisibleProperties"></a>

### BoltTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GetVisiblePropertyNames"></a>

### BoltTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupAllSimilarChildren"></a>

### BoltTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.GroupSimilarObjects"></a>

### BoltTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.InitializeLifetimeService"></a>

### BoltTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.IsPropertyEditable"></a>

### BoltTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BoltTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.IsPropertyVisible"></a>

### BoltTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BoltTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.Paste"></a>

### BoltTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyByAPIName"></a>

### BoltTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyById"></a>

### BoltTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.PropertyByName"></a>

### BoltTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.RemoveFromGroup"></a>

### BoltTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BoltTool.RemoveParameter"></a>

### BoltTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

