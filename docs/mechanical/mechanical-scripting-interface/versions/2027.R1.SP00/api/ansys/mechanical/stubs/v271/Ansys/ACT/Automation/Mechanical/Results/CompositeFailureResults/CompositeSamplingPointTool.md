# `CompositeSamplingPointTool`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool(internalObject: Any)

<a id="CompositeSamplingPointTool"></a>

### *class* CompositeSamplingPointTool(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CompositeSamplingPointTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeSamplingPointTool.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CompositeSamplingPointTool.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddCompositeSamplingPoint`](#CompositeSamplingPointTool.AddCompositeSamplingPoint) | Creates a new CompositeSamplingPoint                                                        |
| [`AddFigure`](#CompositeSamplingPointTool.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CompositeSamplingPointTool.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CompositeSamplingPointTool.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompositeSamplingPointTool.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompositeSamplingPointTool.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompositeSamplingPointTool.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CompositeSamplingPointTool.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompositeSamplingPointTool.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CompositeSamplingPointTool.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CompositeSamplingPointTool.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CompositeSamplingPointTool.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CompositeSamplingPointTool.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompositeSamplingPointTool.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CompositeSamplingPointTool.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompositeSamplingPointTool.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompositeSamplingPointTool.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompositeSamplingPointTool.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompositeSamplingPointTool.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CompositeSamplingPointTool.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CompositeSamplingPointTool.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompositeSamplingPointTool.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CompositeSamplingPointTool.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompositeSamplingPointTool.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CompositeSamplingPointTool.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompositeSamplingPointTool.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompositeSamplingPointTool.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompositeSamplingPointTool.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompositeSamplingPointTool.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompositeSamplingPointTool.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompositeSamplingPointTool.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompositeSamplingPointTool.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CompositeSamplingPointTool.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CompositeSamplingPointTool.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CompositeSamplingPointTool.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompositeSamplingPointTool.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompositeSamplingPointTool.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CompositeSamplingPointTool.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CompositeSamplingPointTool.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CompositeSamplingPointTool.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#CompositeSamplingPointTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeSamplingPointTool.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#CompositeSamplingPointTool.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CompositeSamplingPointTool.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CompositeSamplingPointTool.IconName)                               | IconName property.                                            |
| [`Images`](#CompositeSamplingPointTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CompositeSamplingPointTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#CompositeSamplingPointTool.Name)                                       | Name property.                                                |
| [`ObjectId`](#CompositeSamplingPointTool.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CompositeSamplingPointTool.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CompositeSamplingPointTool.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CompositeSamplingPointTool.Parent)                                   | Parent property.                                              |
| [`Properties`](#CompositeSamplingPointTool.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#CompositeSamplingPointTool.State)                                     | State property.                                               |
| [`VisibleProperties`](#CompositeSamplingPointTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeSamplingPointTool.AttachedRefs"></a>

### *property* CompositeSamplingPointTool.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Children"></a>

### *property* CompositeSamplingPointTool.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.ClsId"></a>

### *property* CompositeSamplingPointTool.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Comments"></a>

### *property* CompositeSamplingPointTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.DataModelObjectCategory"></a>

### *property* CompositeSamplingPointTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Figures"></a>

### *property* CompositeSamplingPointTool.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupingFolder"></a>

### *property* CompositeSamplingPointTool.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.IconName"></a>

### *property* CompositeSamplingPointTool.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Images"></a>

### *property* CompositeSamplingPointTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.InternalObject"></a>

### *property* CompositeSamplingPointTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeFailureToolAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Name"></a>

### *property* CompositeSamplingPointTool.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.ObjectId"></a>

### *property* CompositeSamplingPointTool.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.ObjectState"></a>

### *property* CompositeSamplingPointTool.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.ObjectTags"></a>

### *property* CompositeSamplingPointTool.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Parent"></a>

### *property* CompositeSamplingPointTool.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Properties"></a>

### *property* CompositeSamplingPointTool.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.State"></a>

### *property* CompositeSamplingPointTool.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.VisibleProperties"></a>

### *property* CompositeSamplingPointTool.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeSamplingPointTool.Activate"></a>

### CompositeSamplingPointTool.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddComment"></a>

### CompositeSamplingPointTool.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddCompositeSamplingPoint"></a>

### CompositeSamplingPointTool.AddCompositeSamplingPoint() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint](CompositeSamplingPoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint)

Creates a new CompositeSamplingPoint

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddFigure"></a>

### CompositeSamplingPointTool.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.AddImage"></a>

### CompositeSamplingPointTool.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Copy"></a>

### CompositeSamplingPointTool.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CopyTo"></a>

### CompositeSamplingPointTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CreateObjRef"></a>

### CompositeSamplingPointTool.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.CreateParameter"></a>

### CompositeSamplingPointTool.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Cut"></a>

### CompositeSamplingPointTool.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Delete"></a>

### CompositeSamplingPointTool.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Duplicate"></a>

### CompositeSamplingPointTool.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Equals"></a>

### CompositeSamplingPointTool.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetAPIName"></a>

### CompositeSamplingPointTool.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetAllProperties"></a>

### CompositeSamplingPointTool.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetChildren"></a>

### CompositeSamplingPointTool.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompositeSamplingPointTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetDetailsView"></a>

### CompositeSamplingPointTool.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetEnumName"></a>

### CompositeSamplingPointTool.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetHashCode"></a>

### CompositeSamplingPointTool.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetIconFile"></a>

### CompositeSamplingPointTool.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetLifetimeService"></a>

### CompositeSamplingPointTool.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetObjectData"></a>

### CompositeSamplingPointTool.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetParameter"></a>

### CompositeSamplingPointTool.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetPath"></a>

### CompositeSamplingPointTool.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetPropertyName"></a>

### CompositeSamplingPointTool.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetPropertyValue"></a>

### CompositeSamplingPointTool.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetVisibleProperties"></a>

### CompositeSamplingPointTool.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GetVisiblePropertyNames"></a>

### CompositeSamplingPointTool.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupAllSimilarChildren"></a>

### CompositeSamplingPointTool.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.GroupSimilarObjects"></a>

### CompositeSamplingPointTool.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.InitializeLifetimeService"></a>

### CompositeSamplingPointTool.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.IsPropertyEditable"></a>

### CompositeSamplingPointTool.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeSamplingPointTool.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.IsPropertyVisible"></a>

### CompositeSamplingPointTool.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeSamplingPointTool.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.Paste"></a>

### CompositeSamplingPointTool.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyByAPIName"></a>

### CompositeSamplingPointTool.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyById"></a>

### CompositeSamplingPointTool.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.PropertyByName"></a>

### CompositeSamplingPointTool.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.RemoveFromGroup"></a>

### CompositeSamplingPointTool.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPointTool.RemoveParameter"></a>

### CompositeSamplingPointTool.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

