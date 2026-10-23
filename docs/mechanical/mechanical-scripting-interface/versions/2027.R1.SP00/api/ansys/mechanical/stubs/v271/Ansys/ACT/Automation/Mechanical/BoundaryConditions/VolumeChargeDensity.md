# `VolumeChargeDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VolumeChargeDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.VolumeChargeDensity(internalObject: Any)

<a id="VolumeChargeDensity"></a>

### *class* VolumeChargeDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a VolumeChargeDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#VolumeChargeDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#VolumeChargeDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#VolumeChargeDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#VolumeChargeDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#VolumeChargeDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#VolumeChargeDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#VolumeChargeDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#VolumeChargeDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#VolumeChargeDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#VolumeChargeDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#VolumeChargeDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#VolumeChargeDensity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#VolumeChargeDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#VolumeChargeDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#VolumeChargeDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#VolumeChargeDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#VolumeChargeDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#VolumeChargeDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#VolumeChargeDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#VolumeChargeDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#VolumeChargeDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#VolumeChargeDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#VolumeChargeDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#VolumeChargeDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#VolumeChargeDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#VolumeChargeDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#VolumeChargeDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#VolumeChargeDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#VolumeChargeDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#VolumeChargeDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#VolumeChargeDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#VolumeChargeDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#VolumeChargeDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#VolumeChargeDensity.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#VolumeChargeDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#VolumeChargeDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#VolumeChargeDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#VolumeChargeDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#VolumeChargeDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#VolumeChargeDensity.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#VolumeChargeDensity.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#VolumeChargeDensity.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#VolumeChargeDensity.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VolumeChargeDensity.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#VolumeChargeDensity.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#VolumeChargeDensity.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#VolumeChargeDensity.IconName)                                 | IconName property.                                            |
| [`Images`](#VolumeChargeDensity.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#VolumeChargeDensity.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#VolumeChargeDensity.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#VolumeChargeDensity.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#VolumeChargeDensity.Magnitude)                               | Gets or sets the Magnitude.                                   |
| [`Name`](#VolumeChargeDensity.Name)                                         | Name property.                                                |
| [`ObjectId`](#VolumeChargeDensity.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#VolumeChargeDensity.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#VolumeChargeDensity.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#VolumeChargeDensity.Parent)                                     | Parent property.                                              |
| [`Properties`](#VolumeChargeDensity.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#VolumeChargeDensity.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#VolumeChargeDensity.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#VolumeChargeDensity.State)                                       | State property.                                               |
| [`Suppressed`](#VolumeChargeDensity.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#VolumeChargeDensity.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#VolumeChargeDensity.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="VolumeChargeDensity.AttachedRefs"></a>

### *property* VolumeChargeDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Children"></a>

### *property* VolumeChargeDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ClsId"></a>

### *property* VolumeChargeDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Comments"></a>

### *property* VolumeChargeDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.DataModelObjectCategory"></a>

### *property* VolumeChargeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Figures"></a>

### *property* VolumeChargeDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GroupingFolder"></a>

### *property* VolumeChargeDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.IconName"></a>

### *property* VolumeChargeDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Images"></a>

### *property* VolumeChargeDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ImportableObjectSourceId"></a>

### *property* VolumeChargeDensity.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.InternalObject"></a>

### *property* VolumeChargeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Location"></a>

### *property* VolumeChargeDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Magnitude"></a>

### *property* VolumeChargeDensity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Name"></a>

### *property* VolumeChargeDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ObjectId"></a>

### *property* VolumeChargeDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ObjectState"></a>

### *property* VolumeChargeDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ObjectTags"></a>

### *property* VolumeChargeDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Parent"></a>

### *property* VolumeChargeDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Properties"></a>

### *property* VolumeChargeDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.ReadOnly"></a>

### *property* VolumeChargeDensity.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.SharedRefBody"></a>

### *property* VolumeChargeDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.State"></a>

### *property* VolumeChargeDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Suppressed"></a>

### *property* VolumeChargeDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.TransferableObjectId"></a>

### *property* VolumeChargeDensity.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.VisibleProperties"></a>

### *property* VolumeChargeDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VolumeChargeDensity.Activate"></a>

### VolumeChargeDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.AddComment"></a>

### VolumeChargeDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.AddFigure"></a>

### VolumeChargeDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.AddImage"></a>

### VolumeChargeDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Copy"></a>

### VolumeChargeDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.CopyTo"></a>

### VolumeChargeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.CreateObjRef"></a>

### VolumeChargeDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.CreateParameter"></a>

### VolumeChargeDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Cut"></a>

### VolumeChargeDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Delete"></a>

### VolumeChargeDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Duplicate"></a>

### VolumeChargeDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Equals"></a>

### VolumeChargeDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetAPIName"></a>

### VolumeChargeDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetAllProperties"></a>

### VolumeChargeDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetChildren"></a>

### VolumeChargeDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### VolumeChargeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetDetailsView"></a>

### VolumeChargeDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetEnumName"></a>

### VolumeChargeDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetHashCode"></a>

### VolumeChargeDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetIconFile"></a>

### VolumeChargeDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetLifetimeService"></a>

### VolumeChargeDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetObjectData"></a>

### VolumeChargeDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetParameter"></a>

### VolumeChargeDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetPath"></a>

### VolumeChargeDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetPropertyName"></a>

### VolumeChargeDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetPropertyValue"></a>

### VolumeChargeDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetVisibleProperties"></a>

### VolumeChargeDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GetVisiblePropertyNames"></a>

### VolumeChargeDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GroupAllSimilarChildren"></a>

### VolumeChargeDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.GroupSimilarObjects"></a>

### VolumeChargeDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.InitializeLifetimeService"></a>

### VolumeChargeDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.IsPropertyEditable"></a>

### VolumeChargeDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VolumeChargeDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.IsPropertyVisible"></a>

### VolumeChargeDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VolumeChargeDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.Paste"></a>

### VolumeChargeDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PromoteToNamedSelection"></a>

### VolumeChargeDensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PropertyByAPIName"></a>

### VolumeChargeDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PropertyById"></a>

### VolumeChargeDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.PropertyByName"></a>

### VolumeChargeDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.RemoveFromGroup"></a>

### VolumeChargeDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="VolumeChargeDensity.RemoveParameter"></a>

### VolumeChargeDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

