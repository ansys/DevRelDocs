# `AcousticRadiationBoundary`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRadiationBoundary"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRadiationBoundary(internalObject: Any)

<a id="AcousticRadiationBoundary"></a>

### *class* AcousticRadiationBoundary(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticRadiationBoundary.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticRadiationBoundary.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticRadiationBoundary.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticRadiationBoundary.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticRadiationBoundary.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticRadiationBoundary.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticRadiationBoundary.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticRadiationBoundary.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticRadiationBoundary.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticRadiationBoundary.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticRadiationBoundary.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticRadiationBoundary.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticRadiationBoundary.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticRadiationBoundary.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticRadiationBoundary.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticRadiationBoundary.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticRadiationBoundary.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticRadiationBoundary.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticRadiationBoundary.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticRadiationBoundary.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticRadiationBoundary.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticRadiationBoundary.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticRadiationBoundary.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticRadiationBoundary.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticRadiationBoundary.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticRadiationBoundary.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticRadiationBoundary.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticRadiationBoundary.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticRadiationBoundary.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticRadiationBoundary.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticRadiationBoundary.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticRadiationBoundary.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticRadiationBoundary.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticRadiationBoundary.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticRadiationBoundary.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticRadiationBoundary.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticRadiationBoundary.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticRadiationBoundary.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticRadiationBoundary.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticRadiationBoundary.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticRadiationBoundary.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticRadiationBoundary.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticRadiationBoundary.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticRadiationBoundary.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticRadiationBoundary.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticRadiationBoundary.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticRadiationBoundary.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticRadiationBoundary.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticRadiationBoundary.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticRadiationBoundary.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticRadiationBoundary.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticRadiationBoundary.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticRadiationBoundary.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticRadiationBoundary.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticRadiationBoundary.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticRadiationBoundary.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticRadiationBoundary.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticRadiationBoundary.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticRadiationBoundary.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticRadiationBoundary.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticRadiationBoundary.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticRadiationBoundary.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticRadiationBoundary.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticRadiationBoundary.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticRadiationBoundary.AttachedRefs"></a>

### *property* AcousticRadiationBoundary.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Children"></a>

### *property* AcousticRadiationBoundary.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ClsId"></a>

### *property* AcousticRadiationBoundary.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Comments"></a>

### *property* AcousticRadiationBoundary.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.DataModelObjectCategory"></a>

### *property* AcousticRadiationBoundary.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Figures"></a>

### *property* AcousticRadiationBoundary.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GroupingFolder"></a>

### *property* AcousticRadiationBoundary.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.IconName"></a>

### *property* AcousticRadiationBoundary.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Images"></a>

### *property* AcousticRadiationBoundary.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ImportableObjectSourceId"></a>

### *property* AcousticRadiationBoundary.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.InternalObject"></a>

### *property* AcousticRadiationBoundary.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Location"></a>

### *property* AcousticRadiationBoundary.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Name"></a>

### *property* AcousticRadiationBoundary.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ObjectId"></a>

### *property* AcousticRadiationBoundary.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ObjectState"></a>

### *property* AcousticRadiationBoundary.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ObjectTags"></a>

### *property* AcousticRadiationBoundary.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Parent"></a>

### *property* AcousticRadiationBoundary.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Properties"></a>

### *property* AcousticRadiationBoundary.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.ReadOnly"></a>

### *property* AcousticRadiationBoundary.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.SharedRefBody"></a>

### *property* AcousticRadiationBoundary.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.State"></a>

### *property* AcousticRadiationBoundary.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Suppressed"></a>

### *property* AcousticRadiationBoundary.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.TransferableObjectId"></a>

### *property* AcousticRadiationBoundary.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.VisibleProperties"></a>

### *property* AcousticRadiationBoundary.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticRadiationBoundary.Activate"></a>

### AcousticRadiationBoundary.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.AddComment"></a>

### AcousticRadiationBoundary.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.AddFigure"></a>

### AcousticRadiationBoundary.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.AddImage"></a>

### AcousticRadiationBoundary.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Copy"></a>

### AcousticRadiationBoundary.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.CopyTo"></a>

### AcousticRadiationBoundary.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.CreateObjRef"></a>

### AcousticRadiationBoundary.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.CreateParameter"></a>

### AcousticRadiationBoundary.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Cut"></a>

### AcousticRadiationBoundary.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Delete"></a>

### AcousticRadiationBoundary.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Duplicate"></a>

### AcousticRadiationBoundary.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Equals"></a>

### AcousticRadiationBoundary.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetAPIName"></a>

### AcousticRadiationBoundary.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetAllProperties"></a>

### AcousticRadiationBoundary.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetChildren"></a>

### AcousticRadiationBoundary.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticRadiationBoundary.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetDetailsView"></a>

### AcousticRadiationBoundary.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetEnumName"></a>

### AcousticRadiationBoundary.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetHashCode"></a>

### AcousticRadiationBoundary.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetIconFile"></a>

### AcousticRadiationBoundary.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetLifetimeService"></a>

### AcousticRadiationBoundary.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetObjectData"></a>

### AcousticRadiationBoundary.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetParameter"></a>

### AcousticRadiationBoundary.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetPath"></a>

### AcousticRadiationBoundary.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetPropertyName"></a>

### AcousticRadiationBoundary.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetPropertyValue"></a>

### AcousticRadiationBoundary.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetVisibleProperties"></a>

### AcousticRadiationBoundary.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GetVisiblePropertyNames"></a>

### AcousticRadiationBoundary.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GroupAllSimilarChildren"></a>

### AcousticRadiationBoundary.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.GroupSimilarObjects"></a>

### AcousticRadiationBoundary.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.InitializeLifetimeService"></a>

### AcousticRadiationBoundary.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.IsPropertyEditable"></a>

### AcousticRadiationBoundary.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticRadiationBoundary.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.IsPropertyVisible"></a>

### AcousticRadiationBoundary.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticRadiationBoundary.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.Paste"></a>

### AcousticRadiationBoundary.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PromoteToNamedSelection"></a>

### AcousticRadiationBoundary.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PropertyByAPIName"></a>

### AcousticRadiationBoundary.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PropertyById"></a>

### AcousticRadiationBoundary.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.PropertyByName"></a>

### AcousticRadiationBoundary.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.RemoveFromGroup"></a>

### AcousticRadiationBoundary.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticRadiationBoundary.RemoveParameter"></a>

### AcousticRadiationBoundary.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

