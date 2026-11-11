# `FrictionlessSupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FrictionlessSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FrictionlessSupport(internalObject: Any)

<a id="FrictionlessSupport"></a>

### *class* FrictionlessSupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FrictionlessSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FrictionlessSupport.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FrictionlessSupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FrictionlessSupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FrictionlessSupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FrictionlessSupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FrictionlessSupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FrictionlessSupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FrictionlessSupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FrictionlessSupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FrictionlessSupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FrictionlessSupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FrictionlessSupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FrictionlessSupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FrictionlessSupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FrictionlessSupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FrictionlessSupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FrictionlessSupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FrictionlessSupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FrictionlessSupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FrictionlessSupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FrictionlessSupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FrictionlessSupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FrictionlessSupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FrictionlessSupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FrictionlessSupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FrictionlessSupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FrictionlessSupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FrictionlessSupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FrictionlessSupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FrictionlessSupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FrictionlessSupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FrictionlessSupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FrictionlessSupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FrictionlessSupport.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FrictionlessSupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FrictionlessSupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FrictionlessSupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FrictionlessSupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FrictionlessSupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FrictionlessSupport.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#FrictionlessSupport.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#FrictionlessSupport.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#FrictionlessSupport.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FrictionlessSupport.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#FrictionlessSupport.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#FrictionlessSupport.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#FrictionlessSupport.IconName)                                 | IconName property.                                            |
| [`Images`](#FrictionlessSupport.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#FrictionlessSupport.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#FrictionlessSupport.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#FrictionlessSupport.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#FrictionlessSupport.Name)                                         | Name property.                                                |
| [`ObjectId`](#FrictionlessSupport.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#FrictionlessSupport.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#FrictionlessSupport.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#FrictionlessSupport.Parent)                                     | Parent property.                                              |
| [`Properties`](#FrictionlessSupport.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FrictionlessSupport.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#FrictionlessSupport.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#FrictionlessSupport.State)                                       | State property.                                               |
| [`Suppressed`](#FrictionlessSupport.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#FrictionlessSupport.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#FrictionlessSupport.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FrictionlessSupport.AttachedRefs"></a>

### *property* FrictionlessSupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Children"></a>

### *property* FrictionlessSupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ClsId"></a>

### *property* FrictionlessSupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Comments"></a>

### *property* FrictionlessSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.DataModelObjectCategory"></a>

### *property* FrictionlessSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Figures"></a>

### *property* FrictionlessSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GroupingFolder"></a>

### *property* FrictionlessSupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.IconName"></a>

### *property* FrictionlessSupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Images"></a>

### *property* FrictionlessSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ImportableObjectSourceId"></a>

### *property* FrictionlessSupport.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.InternalObject"></a>

### *property* FrictionlessSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Location"></a>

### *property* FrictionlessSupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Name"></a>

### *property* FrictionlessSupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ObjectId"></a>

### *property* FrictionlessSupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ObjectState"></a>

### *property* FrictionlessSupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ObjectTags"></a>

### *property* FrictionlessSupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Parent"></a>

### *property* FrictionlessSupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Properties"></a>

### *property* FrictionlessSupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ReadOnly"></a>

### *property* FrictionlessSupport.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.SharedRefBody"></a>

### *property* FrictionlessSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.State"></a>

### *property* FrictionlessSupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Suppressed"></a>

### *property* FrictionlessSupport.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.TransferableObjectId"></a>

### *property* FrictionlessSupport.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.VisibleProperties"></a>

### *property* FrictionlessSupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FrictionlessSupport.Activate"></a>

### FrictionlessSupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.AddComment"></a>

### FrictionlessSupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.AddFigure"></a>

### FrictionlessSupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.AddImage"></a>

### FrictionlessSupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Copy"></a>

### FrictionlessSupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.CopyTo"></a>

### FrictionlessSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.CreateObjRef"></a>

### FrictionlessSupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.CreateParameter"></a>

### FrictionlessSupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Cut"></a>

### FrictionlessSupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Delete"></a>

### FrictionlessSupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Duplicate"></a>

### FrictionlessSupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Equals"></a>

### FrictionlessSupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetAPIName"></a>

### FrictionlessSupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetAllProperties"></a>

### FrictionlessSupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetChildren"></a>

### FrictionlessSupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FrictionlessSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetDetailsView"></a>

### FrictionlessSupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetEnumName"></a>

### FrictionlessSupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetHashCode"></a>

### FrictionlessSupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetIconFile"></a>

### FrictionlessSupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetLifetimeService"></a>

### FrictionlessSupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetObjectData"></a>

### FrictionlessSupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetParameter"></a>

### FrictionlessSupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetPath"></a>

### FrictionlessSupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetPropertyName"></a>

### FrictionlessSupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetPropertyValue"></a>

### FrictionlessSupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetVisibleProperties"></a>

### FrictionlessSupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetVisiblePropertyNames"></a>

### FrictionlessSupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GroupAllSimilarChildren"></a>

### FrictionlessSupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GroupSimilarObjects"></a>

### FrictionlessSupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.InitializeLifetimeService"></a>

### FrictionlessSupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.IsPropertyEditable"></a>

### FrictionlessSupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FrictionlessSupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.IsPropertyVisible"></a>

### FrictionlessSupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FrictionlessSupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Paste"></a>

### FrictionlessSupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PromoteToNamedSelection"></a>

### FrictionlessSupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PropertyByAPIName"></a>

### FrictionlessSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PropertyById"></a>

### FrictionlessSupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PropertyByName"></a>

### FrictionlessSupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.RemoveFromGroup"></a>

### FrictionlessSupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.RemoveParameter"></a>

### FrictionlessSupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

