# `PartTransformGroup`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PartTransformGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PartTransformGroup(internalObject: Any)

<a id="PartTransformGroup"></a>

### *class* PartTransformGroup(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PartTransformGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PartTransformGroup.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PartTransformGroup.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PartTransformGroup.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PartTransformGroup.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddPartTransform`](#PartTransformGroup.AddPartTransform)                   | Creates a new PartTransform                                                                 |
| [`Copy`](#PartTransformGroup.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PartTransformGroup.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PartTransformGroup.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PartTransformGroup.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PartTransformGroup.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PartTransformGroup.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PartTransformGroup.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PartTransformGroup.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PartTransformGroup.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PartTransformGroup.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PartTransformGroup.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PartTransformGroup.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PartTransformGroup.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PartTransformGroup.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PartTransformGroup.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PartTransformGroup.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PartTransformGroup.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PartTransformGroup.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PartTransformGroup.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PartTransformGroup.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PartTransformGroup.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PartTransformGroup.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PartTransformGroup.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PartTransformGroup.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PartTransformGroup.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PartTransformGroup.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PartTransformGroup.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PartTransformGroup.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PartTransformGroup.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PartTransformGroup.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PartTransformGroup.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PartTransformGroup.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PartTransformGroup.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PartTransformGroup.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`TransformGeometry`](#PartTransformGroup.TransformGeometry)                 | TransformGeometry method.                                                                   |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PartTransformGroup.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#PartTransformGroup.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#PartTransformGroup.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#PartTransformGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PartTransformGroup.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#PartTransformGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PartTransformGroup.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#PartTransformGroup.IconName)                               | IconName property.                                            |
| [`Images`](#PartTransformGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PartTransformGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#PartTransformGroup.Name)                                       | Name property.                                                |
| [`ObjectId`](#PartTransformGroup.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#PartTransformGroup.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#PartTransformGroup.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#PartTransformGroup.Parent)                                   | Parent property.                                              |
| [`Properties`](#PartTransformGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`RegenerateContacts`](#PartTransformGroup.RegenerateContacts)           | Gets or sets the RegenerateContacts.                          |
| [`State`](#PartTransformGroup.State)                                     | State property.                                               |
| [`Suppressed`](#PartTransformGroup.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TransformMesh`](#PartTransformGroup.TransformMesh)                     | Gets or sets the TransformMesh.                               |
| [`VisibleProperties`](#PartTransformGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PartTransformGroup.AttachedRefs"></a>

### *property* PartTransformGroup.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Children"></a>

### *property* PartTransformGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.ClsId"></a>

### *property* PartTransformGroup.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Comments"></a>

### *property* PartTransformGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.DataModelObjectCategory"></a>

### *property* PartTransformGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Figures"></a>

### *property* PartTransformGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GroupingFolder"></a>

### *property* PartTransformGroup.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.IconName"></a>

### *property* PartTransformGroup.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Images"></a>

### *property* PartTransformGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.InternalObject"></a>

### *property* PartTransformGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Name"></a>

### *property* PartTransformGroup.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.ObjectId"></a>

### *property* PartTransformGroup.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.ObjectState"></a>

### *property* PartTransformGroup.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.ObjectTags"></a>

### *property* PartTransformGroup.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Parent"></a>

### *property* PartTransformGroup.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Properties"></a>

### *property* PartTransformGroup.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.RegenerateContacts"></a>

### *property* PartTransformGroup.RegenerateContacts *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RegenerateContacts.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.State"></a>

### *property* PartTransformGroup.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Suppressed"></a>

### *property* PartTransformGroup.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.TransformMesh"></a>

### *property* PartTransformGroup.TransformMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TransformMesh.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.VisibleProperties"></a>

### *property* PartTransformGroup.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PartTransformGroup.Activate"></a>

### PartTransformGroup.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddComment"></a>

### PartTransformGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddFigure"></a>

### PartTransformGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddImage"></a>

### PartTransformGroup.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddPartTransform"></a>

### PartTransformGroup.AddPartTransform() → [Ansys.ACT.Automation.Mechanical.PartTransform](PartTransform.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PartTransform)

Creates a new PartTransform

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Copy"></a>

### PartTransformGroup.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.CopyTo"></a>

### PartTransformGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.CreateObjRef"></a>

### PartTransformGroup.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.CreateParameter"></a>

### PartTransformGroup.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Cut"></a>

### PartTransformGroup.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Delete"></a>

### PartTransformGroup.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Duplicate"></a>

### PartTransformGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Equals"></a>

### PartTransformGroup.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetAPIName"></a>

### PartTransformGroup.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetAllProperties"></a>

### PartTransformGroup.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetChildren"></a>

### PartTransformGroup.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PartTransformGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetDetailsView"></a>

### PartTransformGroup.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetEnumName"></a>

### PartTransformGroup.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetHashCode"></a>

### PartTransformGroup.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetIconFile"></a>

### PartTransformGroup.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetLifetimeService"></a>

### PartTransformGroup.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetObjectData"></a>

### PartTransformGroup.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetParameter"></a>

### PartTransformGroup.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetPath"></a>

### PartTransformGroup.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetPropertyName"></a>

### PartTransformGroup.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetPropertyValue"></a>

### PartTransformGroup.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetVisibleProperties"></a>

### PartTransformGroup.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetVisiblePropertyNames"></a>

### PartTransformGroup.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GroupAllSimilarChildren"></a>

### PartTransformGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GroupSimilarObjects"></a>

### PartTransformGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.InitializeLifetimeService"></a>

### PartTransformGroup.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.IsPropertyEditable"></a>

### PartTransformGroup.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PartTransformGroup.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.IsPropertyVisible"></a>

### PartTransformGroup.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PartTransformGroup.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Paste"></a>

### PartTransformGroup.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.PropertyByAPIName"></a>

### PartTransformGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.PropertyById"></a>

### PartTransformGroup.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.PropertyByName"></a>

### PartTransformGroup.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.RemoveFromGroup"></a>

### PartTransformGroup.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.RemoveParameter"></a>

### PartTransformGroup.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.TransformGeometry"></a>

### PartTransformGroup.TransformGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

