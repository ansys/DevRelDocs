# `SurfaceChargeDensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SurfaceChargeDensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.SurfaceChargeDensity(internalObject: Any)

<a id="SurfaceChargeDensity"></a>

### *class* SurfaceChargeDensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SurfaceChargeDensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SurfaceChargeDensity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#SurfaceChargeDensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SurfaceChargeDensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SurfaceChargeDensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SurfaceChargeDensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SurfaceChargeDensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SurfaceChargeDensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SurfaceChargeDensity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SurfaceChargeDensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SurfaceChargeDensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SurfaceChargeDensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SurfaceChargeDensity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#SurfaceChargeDensity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SurfaceChargeDensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SurfaceChargeDensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SurfaceChargeDensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SurfaceChargeDensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SurfaceChargeDensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SurfaceChargeDensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SurfaceChargeDensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SurfaceChargeDensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SurfaceChargeDensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SurfaceChargeDensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SurfaceChargeDensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SurfaceChargeDensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SurfaceChargeDensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SurfaceChargeDensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SurfaceChargeDensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SurfaceChargeDensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SurfaceChargeDensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SurfaceChargeDensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SurfaceChargeDensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SurfaceChargeDensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#SurfaceChargeDensity.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#SurfaceChargeDensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SurfaceChargeDensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SurfaceChargeDensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SurfaceChargeDensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SurfaceChargeDensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#SurfaceChargeDensity.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#SurfaceChargeDensity.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#SurfaceChargeDensity.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#SurfaceChargeDensity.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#SurfaceChargeDensity.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#SurfaceChargeDensity.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#SurfaceChargeDensity.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#SurfaceChargeDensity.IconName)                                 | IconName property.                                            |
| [`Images`](#SurfaceChargeDensity.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#SurfaceChargeDensity.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#SurfaceChargeDensity.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#SurfaceChargeDensity.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#SurfaceChargeDensity.Magnitude)                               | Gets or sets the Magnitude.                                   |
| [`Name`](#SurfaceChargeDensity.Name)                                         | Name property.                                                |
| [`ObjectId`](#SurfaceChargeDensity.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#SurfaceChargeDensity.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#SurfaceChargeDensity.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#SurfaceChargeDensity.Parent)                                     | Parent property.                                              |
| [`Properties`](#SurfaceChargeDensity.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SurfaceChargeDensity.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#SurfaceChargeDensity.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#SurfaceChargeDensity.State)                                       | State property.                                               |
| [`Suppressed`](#SurfaceChargeDensity.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#SurfaceChargeDensity.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#SurfaceChargeDensity.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SurfaceChargeDensity.AttachedRefs"></a>

### *property* SurfaceChargeDensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Children"></a>

### *property* SurfaceChargeDensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ClsId"></a>

### *property* SurfaceChargeDensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Comments"></a>

### *property* SurfaceChargeDensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.DataModelObjectCategory"></a>

### *property* SurfaceChargeDensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Figures"></a>

### *property* SurfaceChargeDensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GroupingFolder"></a>

### *property* SurfaceChargeDensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.IconName"></a>

### *property* SurfaceChargeDensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Images"></a>

### *property* SurfaceChargeDensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ImportableObjectSourceId"></a>

### *property* SurfaceChargeDensity.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.InternalObject"></a>

### *property* SurfaceChargeDensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Location"></a>

### *property* SurfaceChargeDensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Magnitude"></a>

### *property* SurfaceChargeDensity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Name"></a>

### *property* SurfaceChargeDensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ObjectId"></a>

### *property* SurfaceChargeDensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ObjectState"></a>

### *property* SurfaceChargeDensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ObjectTags"></a>

### *property* SurfaceChargeDensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Parent"></a>

### *property* SurfaceChargeDensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Properties"></a>

### *property* SurfaceChargeDensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.ReadOnly"></a>

### *property* SurfaceChargeDensity.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.SharedRefBody"></a>

### *property* SurfaceChargeDensity.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.State"></a>

### *property* SurfaceChargeDensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Suppressed"></a>

### *property* SurfaceChargeDensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.TransferableObjectId"></a>

### *property* SurfaceChargeDensity.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.VisibleProperties"></a>

### *property* SurfaceChargeDensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SurfaceChargeDensity.Activate"></a>

### SurfaceChargeDensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.AddComment"></a>

### SurfaceChargeDensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.AddFigure"></a>

### SurfaceChargeDensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.AddImage"></a>

### SurfaceChargeDensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Copy"></a>

### SurfaceChargeDensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.CopyTo"></a>

### SurfaceChargeDensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.CreateObjRef"></a>

### SurfaceChargeDensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.CreateParameter"></a>

### SurfaceChargeDensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Cut"></a>

### SurfaceChargeDensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Delete"></a>

### SurfaceChargeDensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Duplicate"></a>

### SurfaceChargeDensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Equals"></a>

### SurfaceChargeDensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetAPIName"></a>

### SurfaceChargeDensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetAllProperties"></a>

### SurfaceChargeDensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetChildren"></a>

### SurfaceChargeDensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SurfaceChargeDensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetDetailsView"></a>

### SurfaceChargeDensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetEnumName"></a>

### SurfaceChargeDensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetHashCode"></a>

### SurfaceChargeDensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetIconFile"></a>

### SurfaceChargeDensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetLifetimeService"></a>

### SurfaceChargeDensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetObjectData"></a>

### SurfaceChargeDensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetParameter"></a>

### SurfaceChargeDensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetPath"></a>

### SurfaceChargeDensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetPropertyName"></a>

### SurfaceChargeDensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetPropertyValue"></a>

### SurfaceChargeDensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetVisibleProperties"></a>

### SurfaceChargeDensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GetVisiblePropertyNames"></a>

### SurfaceChargeDensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GroupAllSimilarChildren"></a>

### SurfaceChargeDensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.GroupSimilarObjects"></a>

### SurfaceChargeDensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.InitializeLifetimeService"></a>

### SurfaceChargeDensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.IsPropertyEditable"></a>

### SurfaceChargeDensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SurfaceChargeDensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.IsPropertyVisible"></a>

### SurfaceChargeDensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SurfaceChargeDensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.Paste"></a>

### SurfaceChargeDensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PromoteToNamedSelection"></a>

### SurfaceChargeDensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PropertyByAPIName"></a>

### SurfaceChargeDensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PropertyById"></a>

### SurfaceChargeDensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.PropertyByName"></a>

### SurfaceChargeDensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.RemoveFromGroup"></a>

### SurfaceChargeDensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceChargeDensity.RemoveParameter"></a>

### SurfaceChargeDensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

