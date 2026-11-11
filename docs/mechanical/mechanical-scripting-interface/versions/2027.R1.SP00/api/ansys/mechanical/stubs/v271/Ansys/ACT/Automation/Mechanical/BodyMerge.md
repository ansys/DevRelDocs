# `BodyMerge`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BodyMerge"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BodyMerge(internalObject: Any)

<a id="BodyMerge"></a>

### *class* BodyMerge(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Body Merge is used to combine multiple geometric bodies with shared faces into a single merged body.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-----------------------------------|-------------------|
| [`UndoAll`](#BodyMerge.UndoAll)   | UndoAll method.   |

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BodyMerge.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#BodyMerge.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#BodyMerge.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BodyMerge.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#BodyMerge.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BodyMerge.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BodyMerge.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BodyMerge.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#BodyMerge.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#BodyMerge.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#BodyMerge.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#BodyMerge.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#BodyMerge.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BodyMerge.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#BodyMerge.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BodyMerge.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BodyMerge.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BodyMerge.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BodyMerge.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#BodyMerge.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BodyMerge.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BodyMerge.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BodyMerge.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BodyMerge.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#BodyMerge.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BodyMerge.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BodyMerge.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BodyMerge.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BodyMerge.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BodyMerge.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BodyMerge.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Operator`](#BodyMerge.Operator)                                   | Operator method.                                                                            |
| [`Paste`](#BodyMerge.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#BodyMerge.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BodyMerge.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BodyMerge.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BodyMerge.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BodyMerge.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#BodyMerge.AttachedRefs)                       | AttachedRefs property.                                                                                   |
| [`Children`](#BodyMerge.Children)                               | Gets the list of children.                                                                               |
| [`ClsId`](#BodyMerge.ClsId)                                     | ClsId property.                                                                                          |
| [`Comments`](#BodyMerge.Comments)                               | Gets the list of associated comments.                                                                    |
| [`DataModelObjectCategory`](#BodyMerge.DataModelObjectCategory) | Gets the current DataModelObject's category.                                                             |
| [`Figures`](#BodyMerge.Figures)                                 | Gets the list of associated figures.                                                                     |
| [`GroupingFolder`](#BodyMerge.GroupingFolder)                   | GroupingFolder property.                                                                                 |
| [`IconName`](#BodyMerge.IconName)                               | IconName property.                                                                                       |
| [`Images`](#BodyMerge.Images)                                   | Gets the list of associated images.                                                                      |
| [`InternalObject`](#BodyMerge.InternalObject)                   | Gets the internal object. For advanced usage only.                                                       |
| [`Location`](#BodyMerge.Location)                               | Gets or sets the Location.                                                                               |
| [`MergedBodies`](#BodyMerge.MergedBodies)                       | Get collection of resultant bodies. Throws an exception if the BodyMerge operation hasn't been executed. |
| [`Name`](#BodyMerge.Name)                                       | Name property.                                                                                           |
| [`ObjectId`](#BodyMerge.ObjectId)                               | ObjectId property.                                                                                       |
| [`ObjectState`](#BodyMerge.ObjectState)                         | ObjectState property.                                                                                    |
| [`ObjectTags`](#BodyMerge.ObjectTags)                           | ObjectTags property.                                                                                     |
| [`Parent`](#BodyMerge.Parent)                                   | Parent property.                                                                                         |
| [`PreBodyMerge`](#BodyMerge.PreBodyMerge)                       | PreBodyMerge property.                                                                                   |
| [`PreRemovalAction`](#BodyMerge.PreRemovalAction)               | PreRemovalAction property.                                                                               |
| [`PreSuppressAction`](#BodyMerge.PreSuppressAction)             | PreSuppressAction property.                                                                              |
| [`PreUnSuppressAction`](#BodyMerge.PreUnSuppressAction)         | PreUnSuppressAction property.                                                                            |
| [`Properties`](#BodyMerge.Properties)                           | Gets the list of properties for this object.                                                             |
| [`ScopingMethod`](#BodyMerge.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                                          |
| [`State`](#BodyMerge.State)                                     | State property.                                                                                          |
| [`VisibleProperties`](#BodyMerge.VisibleProperties)             | Gets the list of properties that are visible for this object.                                            |

<a id="property-detail"></a>

## Property detail

<a id="BodyMerge.AttachedRefs"></a>

### *property* BodyMerge.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Children"></a>

### *property* BodyMerge.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.ClsId"></a>

### *property* BodyMerge.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Comments"></a>

### *property* BodyMerge.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.DataModelObjectCategory"></a>

### *property* BodyMerge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Figures"></a>

### *property* BodyMerge.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GroupingFolder"></a>

### *property* BodyMerge.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.IconName"></a>

### *property* BodyMerge.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Images"></a>

### *property* BodyMerge.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.InternalObject"></a>

### *property* BodyMerge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyMergeTreeNodeAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Location"></a>

### *property* BodyMerge.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.MergedBodies"></a>

### *property* BodyMerge.MergedBodies *: Iterable[Ansys.ACT.Interfaces.Geometry.IGeoBody] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get collection of resultant bodies. Throws an exception if the BodyMerge operation hasn't been executed.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Name"></a>

### *property* BodyMerge.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.ObjectId"></a>

### *property* BodyMerge.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.ObjectState"></a>

### *property* BodyMerge.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.ObjectTags"></a>

### *property* BodyMerge.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Parent"></a>

### *property* BodyMerge.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PreBodyMerge"></a>

### *property* BodyMerge.PreBodyMerge *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreBodyMerge property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PreRemovalAction"></a>

### *property* BodyMerge.PreRemovalAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreRemovalAction property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PreSuppressAction"></a>

### *property* BodyMerge.PreSuppressAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreSuppressAction property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PreUnSuppressAction"></a>

### *property* BodyMerge.PreUnSuppressAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreUnSuppressAction property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Properties"></a>

### *property* BodyMerge.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.ScopingMethod"></a>

### *property* BodyMerge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.State"></a>

### *property* BodyMerge.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.VisibleProperties"></a>

### *property* BodyMerge.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyMerge.Activate"></a>

### BodyMerge.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.AddComment"></a>

### BodyMerge.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.AddFigure"></a>

### BodyMerge.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.AddImage"></a>

### BodyMerge.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Copy"></a>

### BodyMerge.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.CopyTo"></a>

### BodyMerge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.CreateObjRef"></a>

### BodyMerge.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.CreateParameter"></a>

### BodyMerge.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Cut"></a>

### BodyMerge.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Duplicate"></a>

### BodyMerge.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Equals"></a>

### BodyMerge.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetAPIName"></a>

### BodyMerge.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetAllProperties"></a>

### BodyMerge.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetChildren"></a>

### BodyMerge.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BodyMerge.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetDetailsView"></a>

### BodyMerge.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetEnumName"></a>

### BodyMerge.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetHashCode"></a>

### BodyMerge.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetIconFile"></a>

### BodyMerge.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetLifetimeService"></a>

### BodyMerge.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetObjectData"></a>

### BodyMerge.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetParameter"></a>

### BodyMerge.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetPath"></a>

### BodyMerge.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetPropertyName"></a>

### BodyMerge.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetPropertyValue"></a>

### BodyMerge.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetVisibleProperties"></a>

### BodyMerge.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GetVisiblePropertyNames"></a>

### BodyMerge.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GroupAllSimilarChildren"></a>

### BodyMerge.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.GroupSimilarObjects"></a>

### BodyMerge.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.InitializeLifetimeService"></a>

### BodyMerge.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.IsPropertyEditable"></a>

### BodyMerge.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyMerge.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.IsPropertyVisible"></a>

### BodyMerge.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BodyMerge.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Operator"></a>

### BodyMerge.Operator() → Ansys.Simulation.Mechanical.Engine.Interop.OperatorGraph.IAnsBodyMergeOperatorCOM

Operator method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.Paste"></a>

### BodyMerge.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PropertyByAPIName"></a>

### BodyMerge.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PropertyById"></a>

### BodyMerge.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.PropertyByName"></a>

### BodyMerge.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.RemoveFromGroup"></a>

### BodyMerge.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.RemoveParameter"></a>

### BodyMerge.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyMerge.UndoAll"></a>

### *classmethod* BodyMerge.UndoAll() → [None](https://docs.python.org/3/builtins/constants.html#None)

UndoAll method.

<!-- !! processed by numpydoc !! -->

