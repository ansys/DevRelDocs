# `CompositeSamplingPoint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint(internalObject: Any)

<a id="CompositeSamplingPoint"></a>

### *class* CompositeSamplingPoint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CompositeSamplingPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeSamplingPoint.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CompositeSamplingPoint.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CompositeSamplingPoint.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CompositeSamplingPoint.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CompositeSamplingPoint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompositeSamplingPoint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompositeSamplingPoint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompositeSamplingPoint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CompositeSamplingPoint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompositeSamplingPoint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CompositeSamplingPoint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CompositeSamplingPoint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CompositeSamplingPoint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CompositeSamplingPoint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompositeSamplingPoint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CompositeSamplingPoint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompositeSamplingPoint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompositeSamplingPoint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompositeSamplingPoint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompositeSamplingPoint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CompositeSamplingPoint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CompositeSamplingPoint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompositeSamplingPoint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CompositeSamplingPoint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompositeSamplingPoint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CompositeSamplingPoint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompositeSamplingPoint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompositeSamplingPoint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompositeSamplingPoint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompositeSamplingPoint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompositeSamplingPoint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompositeSamplingPoint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompositeSamplingPoint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CompositeSamplingPoint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CompositeSamplingPoint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CompositeSamplingPoint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompositeSamplingPoint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompositeSamplingPoint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CompositeSamplingPoint.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CompositeSamplingPoint.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CompositeSamplingPoint.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#CompositeSamplingPoint.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeSamplingPoint.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#CompositeSamplingPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CompositeSamplingPoint.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CompositeSamplingPoint.IconName)                               | IconName property.                                            |
| [`Images`](#CompositeSamplingPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CompositeSamplingPoint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CompositeSamplingPoint.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#CompositeSamplingPoint.Name)                                       | Name property.                                                |
| [`ObjectId`](#CompositeSamplingPoint.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CompositeSamplingPoint.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CompositeSamplingPoint.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CompositeSamplingPoint.Parent)                                   | Parent property.                                              |
| [`Properties`](#CompositeSamplingPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#CompositeSamplingPoint.State)                                     | State property.                                               |
| [`VisibleProperties`](#CompositeSamplingPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeSamplingPoint.AttachedRefs"></a>

### *property* CompositeSamplingPoint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Children"></a>

### *property* CompositeSamplingPoint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.ClsId"></a>

### *property* CompositeSamplingPoint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Comments"></a>

### *property* CompositeSamplingPoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.DataModelObjectCategory"></a>

### *property* CompositeSamplingPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Figures"></a>

### *property* CompositeSamplingPoint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupingFolder"></a>

### *property* CompositeSamplingPoint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.IconName"></a>

### *property* CompositeSamplingPoint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Images"></a>

### *property* CompositeSamplingPoint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.InternalObject"></a>

### *property* CompositeSamplingPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeSamplingPointResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Location"></a>

### *property* CompositeSamplingPoint.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Name"></a>

### *property* CompositeSamplingPoint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.ObjectId"></a>

### *property* CompositeSamplingPoint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.ObjectState"></a>

### *property* CompositeSamplingPoint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.ObjectTags"></a>

### *property* CompositeSamplingPoint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Parent"></a>

### *property* CompositeSamplingPoint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Properties"></a>

### *property* CompositeSamplingPoint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.State"></a>

### *property* CompositeSamplingPoint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.VisibleProperties"></a>

### *property* CompositeSamplingPoint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeSamplingPoint.Activate"></a>

### CompositeSamplingPoint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddComment"></a>

### CompositeSamplingPoint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddFigure"></a>

### CompositeSamplingPoint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddImage"></a>

### CompositeSamplingPoint.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Copy"></a>

### CompositeSamplingPoint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CopyTo"></a>

### CompositeSamplingPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CreateObjRef"></a>

### CompositeSamplingPoint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CreateParameter"></a>

### CompositeSamplingPoint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Cut"></a>

### CompositeSamplingPoint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Delete"></a>

### CompositeSamplingPoint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Duplicate"></a>

### CompositeSamplingPoint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Equals"></a>

### CompositeSamplingPoint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetAPIName"></a>

### CompositeSamplingPoint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetAllProperties"></a>

### CompositeSamplingPoint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetChildren"></a>

### CompositeSamplingPoint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompositeSamplingPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetDetailsView"></a>

### CompositeSamplingPoint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetEnumName"></a>

### CompositeSamplingPoint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetHashCode"></a>

### CompositeSamplingPoint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetIconFile"></a>

### CompositeSamplingPoint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetLifetimeService"></a>

### CompositeSamplingPoint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetObjectData"></a>

### CompositeSamplingPoint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetParameter"></a>

### CompositeSamplingPoint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetPath"></a>

### CompositeSamplingPoint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetPropertyName"></a>

### CompositeSamplingPoint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetPropertyValue"></a>

### CompositeSamplingPoint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetVisibleProperties"></a>

### CompositeSamplingPoint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetVisiblePropertyNames"></a>

### CompositeSamplingPoint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupAllSimilarChildren"></a>

### CompositeSamplingPoint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupSimilarObjects"></a>

### CompositeSamplingPoint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.InitializeLifetimeService"></a>

### CompositeSamplingPoint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.IsPropertyEditable"></a>

### CompositeSamplingPoint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeSamplingPoint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.IsPropertyVisible"></a>

### CompositeSamplingPoint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeSamplingPoint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Paste"></a>

### CompositeSamplingPoint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyByAPIName"></a>

### CompositeSamplingPoint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyById"></a>

### CompositeSamplingPoint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyByName"></a>

### CompositeSamplingPoint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.RemoveFromGroup"></a>

### CompositeSamplingPoint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.RemoveParameter"></a>

### CompositeSamplingPoint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

