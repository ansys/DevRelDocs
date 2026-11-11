# `EndRelease`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.EndRelease"></a>

#### *class* Ansys.ACT.Automation.Mechanical.EndRelease(internalObject: Any)

<a id="EndRelease"></a>

### *class* EndRelease(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EndRelease.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EndRelease.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#EndRelease.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#EndRelease.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EndRelease.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#EndRelease.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EndRelease.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EndRelease.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EndRelease.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#EndRelease.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EndRelease.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EndRelease.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#EndRelease.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#EndRelease.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#EndRelease.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EndRelease.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EndRelease.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EndRelease.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EndRelease.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EndRelease.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EndRelease.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#EndRelease.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EndRelease.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EndRelease.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EndRelease.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EndRelease.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#EndRelease.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EndRelease.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EndRelease.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EndRelease.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EndRelease.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EndRelease.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EndRelease.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EndRelease.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#EndRelease.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EndRelease.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EndRelease.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EndRelease.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EndRelease.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#EndRelease.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Behavior`](#EndRelease.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Children`](#EndRelease.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#EndRelease.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#EndRelease.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)       | Gets or sets the Coordinate System.                           |
| [`DataModelObjectCategory`](#EndRelease.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`EdgeLocation`](#EndRelease.EdgeLocation)                       | Gets or sets the EdgeLocation.                                |
| [`Figures`](#EndRelease.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#EndRelease.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#EndRelease.IconName)                               | IconName property.                                            |
| [`Images`](#EndRelease.Images)                                   | Gets the list of associated images.                           |
| [`IndependentEdges`](#EndRelease.IndependentEdges)               | Gets or sets the IndependentEdges.                            |
| [`InternalObject`](#EndRelease.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#EndRelease.Name)                                       | Name property.                                                |
| [`ObjectId`](#EndRelease.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#EndRelease.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#EndRelease.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#EndRelease.Parent)                                   | Parent property.                                              |
| [`Properties`](#EndRelease.Properties)                           | Gets the list of properties for this object.                  |
| [`RotationX`](#EndRelease.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#EndRelease.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#EndRelease.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`State`](#EndRelease.State)                                     | State property.                                               |
| [`Suppressed`](#EndRelease.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TranslationX`](#EndRelease.TranslationX)                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](#EndRelease.TranslationY)                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#EndRelease.TranslationZ)                       | Gets or sets the TranslationZ.                                |
| [`VertexLocation`](#EndRelease.VertexLocation)                   | Gets or sets the VertexLocation.                              |
| [`VisibleProperties`](#EndRelease.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="EndRelease.AttachedRefs"></a>

### *property* EndRelease.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Behavior"></a>

### *property* EndRelease.Behavior *: [Ansys.Mechanical.DataModel.Enums.BeamEndReleaseBehavior](../../../Mechanical/DataModel/Enums/BeamEndReleaseBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BeamEndReleaseBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Children"></a>

### *property* EndRelease.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.ClsId"></a>

### *property* EndRelease.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Comments"></a>

### *property* EndRelease.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CoordinateSystem"></a>

### *property* EndRelease.CoordinateSystem *: Ansys.Mechanical.DataModel.Interfaces.ICoordinateSystemSelection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.DataModelObjectCategory"></a>

### *property* EndRelease.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.EdgeLocation"></a>

### *property* EndRelease.EdgeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Figures"></a>

### *property* EndRelease.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GroupingFolder"></a>

### *property* EndRelease.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.IconName"></a>

### *property* EndRelease.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Images"></a>

### *property* EndRelease.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.IndependentEdges"></a>

### *property* EndRelease.IndependentEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentEdges.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.InternalObject"></a>

### *property* EndRelease.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamEndReleaseAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Name"></a>

### *property* EndRelease.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.ObjectId"></a>

### *property* EndRelease.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.ObjectState"></a>

### *property* EndRelease.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.ObjectTags"></a>

### *property* EndRelease.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Parent"></a>

### *property* EndRelease.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Properties"></a>

### *property* EndRelease.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RotationX"></a>

### *property* EndRelease.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RotationY"></a>

### *property* EndRelease.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RotationZ"></a>

### *property* EndRelease.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.State"></a>

### *property* EndRelease.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Suppressed"></a>

### *property* EndRelease.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.TranslationX"></a>

### *property* EndRelease.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.TranslationY"></a>

### *property* EndRelease.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.TranslationZ"></a>

### *property* EndRelease.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.VertexLocation"></a>

### *property* EndRelease.VertexLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VertexLocation.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.VisibleProperties"></a>

### *property* EndRelease.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EndRelease.Activate"></a>

### EndRelease.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.AddComment"></a>

### EndRelease.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.AddFigure"></a>

### EndRelease.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.AddImage"></a>

### EndRelease.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Copy"></a>

### EndRelease.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CopyTo"></a>

### EndRelease.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CreateObjRef"></a>

### EndRelease.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CreateParameter"></a>

### EndRelease.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Cut"></a>

### EndRelease.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Delete"></a>

### EndRelease.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Duplicate"></a>

### EndRelease.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Equals"></a>

### EndRelease.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetAPIName"></a>

### EndRelease.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetAllProperties"></a>

### EndRelease.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetChildren"></a>

### EndRelease.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EndRelease.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetDetailsView"></a>

### EndRelease.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetEnumName"></a>

### EndRelease.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetHashCode"></a>

### EndRelease.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetIconFile"></a>

### EndRelease.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetLifetimeService"></a>

### EndRelease.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetObjectData"></a>

### EndRelease.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetParameter"></a>

### EndRelease.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetPath"></a>

### EndRelease.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetPropertyName"></a>

### EndRelease.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetPropertyValue"></a>

### EndRelease.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetVisibleProperties"></a>

### EndRelease.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetVisiblePropertyNames"></a>

### EndRelease.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GroupAllSimilarChildren"></a>

### EndRelease.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GroupSimilarObjects"></a>

### EndRelease.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.InitializeLifetimeService"></a>

### EndRelease.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.IsPropertyEditable"></a>

### EndRelease.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EndRelease.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.IsPropertyVisible"></a>

### EndRelease.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EndRelease.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Paste"></a>

### EndRelease.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.PropertyByAPIName"></a>

### EndRelease.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.PropertyById"></a>

### EndRelease.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.PropertyByName"></a>

### EndRelease.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RemoveFromGroup"></a>

### EndRelease.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RemoveParameter"></a>

### EndRelease.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

