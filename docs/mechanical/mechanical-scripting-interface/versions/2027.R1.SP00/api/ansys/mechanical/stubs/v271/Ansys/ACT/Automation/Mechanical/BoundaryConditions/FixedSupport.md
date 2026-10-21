# `FixedSupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport(internalObject: Any)

<a id="FixedSupport"></a>

### *class* FixedSupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FixedSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FixedSupport.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FixedSupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FixedSupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FixedSupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FixedSupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FixedSupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FixedSupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FixedSupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FixedSupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FixedSupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FixedSupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FixedSupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FixedSupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FixedSupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FixedSupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FixedSupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FixedSupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FixedSupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FixedSupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FixedSupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FixedSupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FixedSupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FixedSupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FixedSupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FixedSupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FixedSupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FixedSupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FixedSupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FixedSupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FixedSupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FixedSupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FixedSupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FixedSupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FixedSupport.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FixedSupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FixedSupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FixedSupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FixedSupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FixedSupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FixedSupport.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#FixedSupport.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#FixedSupport.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#FixedSupport.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FixedSupport.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#FixedSupport.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#FixedSupport.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#FixedSupport.IconName)                                 | IconName property.                                            |
| [`Images`](#FixedSupport.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#FixedSupport.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#FixedSupport.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#FixedSupport.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#FixedSupport.Name)                                         | Name property.                                                |
| [`ObjectId`](#FixedSupport.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#FixedSupport.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#FixedSupport.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#FixedSupport.Parent)                                     | Parent property.                                              |
| [`Properties`](#FixedSupport.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FixedSupport.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#FixedSupport.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#FixedSupport.State)                                       | State property.                                               |
| [`Suppressed`](#FixedSupport.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#FixedSupport.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#FixedSupport.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FixedSupport.AttachedRefs"></a>

### *property* FixedSupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Children"></a>

### *property* FixedSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ClsId"></a>

### *property* FixedSupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Comments"></a>

### *property* FixedSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.DataModelObjectCategory"></a>

### *property* FixedSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Figures"></a>

### *property* FixedSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupingFolder"></a>

### *property* FixedSupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.IconName"></a>

### *property* FixedSupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Images"></a>

### *property* FixedSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ImportableObjectSourceId"></a>

### *property* FixedSupport.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.InternalObject"></a>

### *property* FixedSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Location"></a>

### *property* FixedSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Name"></a>

### *property* FixedSupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ObjectId"></a>

### *property* FixedSupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ObjectState"></a>

### *property* FixedSupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ObjectTags"></a>

### *property* FixedSupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Parent"></a>

### *property* FixedSupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Properties"></a>

### *property* FixedSupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ReadOnly"></a>

### *property* FixedSupport.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.SharedRefBody"></a>

### *property* FixedSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.State"></a>

### *property* FixedSupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Suppressed"></a>

### *property* FixedSupport.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.TransferableObjectId"></a>

### *property* FixedSupport.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.VisibleProperties"></a>

### *property* FixedSupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedSupport.Activate"></a>

### FixedSupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddComment"></a>

### FixedSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddFigure"></a>

### FixedSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddImage"></a>

### FixedSupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Copy"></a>

### FixedSupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CopyTo"></a>

### FixedSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CreateObjRef"></a>

### FixedSupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CreateParameter"></a>

### FixedSupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Cut"></a>

### FixedSupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Delete"></a>

### FixedSupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Duplicate"></a>

### FixedSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Equals"></a>

### FixedSupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetAPIName"></a>

### FixedSupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetAllProperties"></a>

### FixedSupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetChildren"></a>

### FixedSupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FixedSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetDetailsView"></a>

### FixedSupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetEnumName"></a>

### FixedSupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetHashCode"></a>

### FixedSupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetIconFile"></a>

### FixedSupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetLifetimeService"></a>

### FixedSupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetObjectData"></a>

### FixedSupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetParameter"></a>

### FixedSupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetPath"></a>

### FixedSupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetPropertyName"></a>

### FixedSupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetPropertyValue"></a>

### FixedSupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetVisibleProperties"></a>

### FixedSupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetVisiblePropertyNames"></a>

### FixedSupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupAllSimilarChildren"></a>

### FixedSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupSimilarObjects"></a>

### FixedSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.InitializeLifetimeService"></a>

### FixedSupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.IsPropertyEditable"></a>

### FixedSupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FixedSupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.IsPropertyVisible"></a>

### FixedSupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FixedSupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Paste"></a>

### FixedSupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PromoteToNamedSelection"></a>

### FixedSupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyByAPIName"></a>

### FixedSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyById"></a>

### FixedSupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyByName"></a>

### FixedSupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.RemoveFromGroup"></a>

### FixedSupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.RemoveParameter"></a>

### FixedSupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

