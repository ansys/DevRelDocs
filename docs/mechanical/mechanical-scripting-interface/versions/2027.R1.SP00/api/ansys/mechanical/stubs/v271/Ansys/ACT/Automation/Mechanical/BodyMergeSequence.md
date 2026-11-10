# `BodyMergeSequence`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BodyMergeSequence"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BodyMergeSequence(internalObject: Any)

<a id="BodyMergeSequence"></a>

### *class* BodyMergeSequence(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

A container for Body Merge operators ordered in a sequence.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [`Activate`](#BodyMergeSequence.Activate)                                   | Activate the current object.                                                                                   |
| [`AddComment`](#BodyMergeSequence.AddComment)                               | Creates a new child Comment.                                                                                   |
| [`AddFigure`](#BodyMergeSequence.AddFigure)                                 | Creates a new child Figure.                                                                                    |
| [`AddImage`](#BodyMergeSequence.AddImage)                                   | Creates a new child Image.                                                                                     |
| [`ClearGeneratedData`](#BodyMergeSequence.ClearGeneratedData)               | Reverses all previously executed body merge operations, effectively undoing the actions performed by Generate. |
| [`Copy`](#BodyMergeSequence.Copy)                                           | Copies the current DataModelObject.                                                                            |
| [`CopyTo`](#BodyMergeSequence.CopyTo)                                       | Copies all visible properties from this object to another.                                                     |
| [`CreateAndAppend`](#BodyMergeSequence.CreateAndAppend)                     | Creates new body merge at the end of the sequence and returns the object.                                      |
| [`CreateObjRef`](#BodyMergeSequence.CreateObjRef)                           | CreateObjRef method.                                                                                           |
| [`CreateParameter`](#BodyMergeSequence.CreateParameter)                     | Creates a new parameter for a Property.                                                                        |
| [`Cut`](#BodyMergeSequence.Cut)                                             | Cuts the current DataModelObject.                                                                              |
| [`Duplicate`](#BodyMergeSequence.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                                 |
| [`Equals`](#BodyMergeSequence.Equals)                                       | Equals method.                                                                                                 |
| [`Generate`](#BodyMergeSequence.Generate)                                   | Executes all body merge operators in sequential order.                                                         |
| [`GetAPIName`](#BodyMergeSequence.GetAPIName)                               | Property name bound to dispId.                                                                                 |
| [`GetAllProperties`](#BodyMergeSequence.GetAllProperties)                   | GetAllProperties method.                                                                                       |
| [`GetChildren`](#BodyMergeSequence.GetChildren)                             | Gets the list of children, filtered by type.                                                                   |
| [`GetDetailsView`](#BodyMergeSequence.GetDetailsView)                       | GetDetailsView method.                                                                                         |
| [`GetEnumName`](#BodyMergeSequence.GetEnumName)                             | Enum name bound to value                                                                                       |
| [`GetHashCode`](#BodyMergeSequence.GetHashCode)                             | GetHashCode method.                                                                                            |
| [`GetIconFile`](#BodyMergeSequence.GetIconFile)                             | GetIconFile method.                                                                                            |
| [`GetLifetimeService`](#BodyMergeSequence.GetLifetimeService)               | GetLifetimeService method.                                                                                     |
| [`GetObjectData`](#BodyMergeSequence.GetObjectData)                         | GetObjectData method.                                                                                          |
| [`GetParameter`](#BodyMergeSequence.GetParameter)                           | Gets the parameter corresponding to the given property.                                                        |
| [`GetPath`](#BodyMergeSequence.GetPath)                                     | GetPath method.                                                                                                |
| [`GetPropertyName`](#BodyMergeSequence.GetPropertyName)                     | GetPropertyName method.                                                                                        |
| [`GetPropertyValue`](#BodyMergeSequence.GetPropertyValue)                   | GetPropertyValue method.                                                                                       |
| [`GetVisibleProperties`](#BodyMergeSequence.GetVisibleProperties)           | GetVisibleProperties method.                                                                                   |
| [`GetVisiblePropertyNames`](#BodyMergeSequence.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                                |
| [`GroupAllSimilarChildren`](#BodyMergeSequence.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                                        |
| [`GroupSimilarObjects`](#BodyMergeSequence.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                                            |
| [`HasBeenExecuted`](#BodyMergeSequence.HasBeenExecuted)                     | HasBeenExecuted method.                                                                                        |
| [`InitializeLifetimeService`](#BodyMergeSequence.InitializeLifetimeService) | InitializeLifetimeService method.                                                                              |
| [`IsPropertyEditable`](#BodyMergeSequence.IsPropertyEditable)               | IsPropertyEditable method.                                                                                     |
| [`IsPropertyVisible`](#BodyMergeSequence.IsPropertyVisible)                 | IsPropertyVisible method.                                                                                      |
| [`Paste`](#BodyMergeSequence.Paste)                                         | Pastes to the current DataModelObject context.                                                                 |
| [`PropertyByAPIName`](#BodyMergeSequence.PropertyByAPIName)                 | Get a property by its API name.                                                                                |
| [`PropertyById`](#BodyMergeSequence.PropertyById)                           | PropertyById method.                                                                                           |
| [`PropertyByName`](#BodyMergeSequence.PropertyByName)                       | Get a property by its unique name.                                                                             |
| [`RemoveFromGroup`](#BodyMergeSequence.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                    |
| [`RemoveParameter`](#BodyMergeSequence.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.                              |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#BodyMergeSequence.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#BodyMergeSequence.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#BodyMergeSequence.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#BodyMergeSequence.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#BodyMergeSequence.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#BodyMergeSequence.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#BodyMergeSequence.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#BodyMergeSequence.IconName)                               | IconName property.                                            |
| [`Images`](#BodyMergeSequence.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BodyMergeSequence.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#BodyMergeSequence.Name)                                       | Name property.                                                |
| [`ObjectId`](#BodyMergeSequence.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#BodyMergeSequence.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#BodyMergeSequence.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#BodyMergeSequence.Parent)                                   | Parent property.                                              |
| [`PreRemovalAction`](#BodyMergeSequence.PreRemovalAction)               | PreRemovalAction property.                                    |
| [`Properties`](#BodyMergeSequence.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#BodyMergeSequence.State)                                     | State property.                                               |
| [`VisibleProperties`](#BodyMergeSequence.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyMergeSequence.AttachedRefs"></a>

### *property* BodyMergeSequence.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Children"></a>

### *property* BodyMergeSequence.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.ClsId"></a>

### *property* BodyMergeSequence.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Comments"></a>

### *property* BodyMergeSequence.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.DataModelObjectCategory"></a>

### *property* BodyMergeSequence.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Figures"></a>

### *property* BodyMergeSequence.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GroupingFolder"></a>

### *property* BodyMergeSequence.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.IconName"></a>

### *property* BodyMergeSequence.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Images"></a>

### *property* BodyMergeSequence.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.InternalObject"></a>

### *property* BodyMergeSequence.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyMergeTreeNodeGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Name"></a>

### *property* BodyMergeSequence.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.ObjectId"></a>

### *property* BodyMergeSequence.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.ObjectState"></a>

### *property* BodyMergeSequence.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.ObjectTags"></a>

### *property* BodyMergeSequence.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Parent"></a>

### *property* BodyMergeSequence.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.PreRemovalAction"></a>

### *property* BodyMergeSequence.PreRemovalAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreRemovalAction property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Properties"></a>

### *property* BodyMergeSequence.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.State"></a>

### *property* BodyMergeSequence.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.VisibleProperties"></a>

### *property* BodyMergeSequence.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyMergeSequence.Activate"></a>

### BodyMergeSequence.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.AddComment"></a>

### BodyMergeSequence.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.AddFigure"></a>

### BodyMergeSequence.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.AddImage"></a>

### BodyMergeSequence.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.ClearGeneratedData"></a>

### BodyMergeSequence.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Reverses all previously executed body merge operations, effectively undoing the actions performed by Generate.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Copy"></a>

### BodyMergeSequence.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CopyTo"></a>

### BodyMergeSequence.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CreateAndAppend"></a>

### BodyMergeSequence.CreateAndAppend() → [Ansys.ACT.Automation.Mechanical.BodyMerge](BodyMerge.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BodyMerge)

Creates new body merge at the end of the sequence and returns the object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CreateObjRef"></a>

### BodyMergeSequence.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.CreateParameter"></a>

### BodyMergeSequence.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Cut"></a>

### BodyMergeSequence.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Duplicate"></a>

### BodyMergeSequence.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Equals"></a>

### BodyMergeSequence.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Generate"></a>

### BodyMergeSequence.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Executes all body merge operators in sequential order.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetAPIName"></a>

### BodyMergeSequence.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetAllProperties"></a>

### BodyMergeSequence.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetChildren"></a>

### BodyMergeSequence.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BodyMergeSequence.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetDetailsView"></a>

### BodyMergeSequence.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetEnumName"></a>

### BodyMergeSequence.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetHashCode"></a>

### BodyMergeSequence.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetIconFile"></a>

### BodyMergeSequence.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetLifetimeService"></a>

### BodyMergeSequence.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetObjectData"></a>

### BodyMergeSequence.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetParameter"></a>

### BodyMergeSequence.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetPath"></a>

### BodyMergeSequence.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetPropertyName"></a>

### BodyMergeSequence.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetPropertyValue"></a>

### BodyMergeSequence.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetVisibleProperties"></a>

### BodyMergeSequence.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GetVisiblePropertyNames"></a>

### BodyMergeSequence.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GroupAllSimilarChildren"></a>

### BodyMergeSequence.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.GroupSimilarObjects"></a>

### BodyMergeSequence.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.HasBeenExecuted"></a>

### BodyMergeSequence.HasBeenExecuted() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

HasBeenExecuted method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.InitializeLifetimeService"></a>

### BodyMergeSequence.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.IsPropertyEditable"></a>

### BodyMergeSequence.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyMergeSequence.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.IsPropertyVisible"></a>

### BodyMergeSequence.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyMergeSequence.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.Paste"></a>

### BodyMergeSequence.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.PropertyByAPIName"></a>

### BodyMergeSequence.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.PropertyById"></a>

### BodyMergeSequence.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.PropertyByName"></a>

### BodyMergeSequence.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.RemoveFromGroup"></a>

### BodyMergeSequence.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BodyMergeSequence.RemoveParameter"></a>

### BodyMergeSequence.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

