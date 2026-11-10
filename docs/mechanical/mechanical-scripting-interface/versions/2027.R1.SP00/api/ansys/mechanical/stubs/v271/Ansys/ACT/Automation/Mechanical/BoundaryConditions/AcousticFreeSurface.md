# `AcousticFreeSurface`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface(internalObject: Any)

<a id="AcousticFreeSurface"></a>

### *class* AcousticFreeSurface(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticFreeSurface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticFreeSurface.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticFreeSurface.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticFreeSurface.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticFreeSurface.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticFreeSurface.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticFreeSurface.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticFreeSurface.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticFreeSurface.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticFreeSurface.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticFreeSurface.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticFreeSurface.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticFreeSurface.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticFreeSurface.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticFreeSurface.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticFreeSurface.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticFreeSurface.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticFreeSurface.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticFreeSurface.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticFreeSurface.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticFreeSurface.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticFreeSurface.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticFreeSurface.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticFreeSurface.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticFreeSurface.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticFreeSurface.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticFreeSurface.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticFreeSurface.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticFreeSurface.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticFreeSurface.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticFreeSurface.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticFreeSurface.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticFreeSurface.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticFreeSurface.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticFreeSurface.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticFreeSurface.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticFreeSurface.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticFreeSurface.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticFreeSurface.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticFreeSurface.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticFreeSurface.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticFreeSurface.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticFreeSurface.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticFreeSurface.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticFreeSurface.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticFreeSurface.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticFreeSurface.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticFreeSurface.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticFreeSurface.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticFreeSurface.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticFreeSurface.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticFreeSurface.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticFreeSurface.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticFreeSurface.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticFreeSurface.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticFreeSurface.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticFreeSurface.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticFreeSurface.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticFreeSurface.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticFreeSurface.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticFreeSurface.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticFreeSurface.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticFreeSurface.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticFreeSurface.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFreeSurface.AttachedRefs"></a>

### *property* AcousticFreeSurface.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Children"></a>

### *property* AcousticFreeSurface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ClsId"></a>

### *property* AcousticFreeSurface.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Comments"></a>

### *property* AcousticFreeSurface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.DataModelObjectCategory"></a>

### *property* AcousticFreeSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Figures"></a>

### *property* AcousticFreeSurface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupingFolder"></a>

### *property* AcousticFreeSurface.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.IconName"></a>

### *property* AcousticFreeSurface.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Images"></a>

### *property* AcousticFreeSurface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ImportableObjectSourceId"></a>

### *property* AcousticFreeSurface.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.InternalObject"></a>

### *property* AcousticFreeSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Location"></a>

### *property* AcousticFreeSurface.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Name"></a>

### *property* AcousticFreeSurface.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ObjectId"></a>

### *property* AcousticFreeSurface.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ObjectState"></a>

### *property* AcousticFreeSurface.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ObjectTags"></a>

### *property* AcousticFreeSurface.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Parent"></a>

### *property* AcousticFreeSurface.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Properties"></a>

### *property* AcousticFreeSurface.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ReadOnly"></a>

### *property* AcousticFreeSurface.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.SharedRefBody"></a>

### *property* AcousticFreeSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.State"></a>

### *property* AcousticFreeSurface.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Suppressed"></a>

### *property* AcousticFreeSurface.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.TransferableObjectId"></a>

### *property* AcousticFreeSurface.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.VisibleProperties"></a>

### *property* AcousticFreeSurface.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFreeSurface.Activate"></a>

### AcousticFreeSurface.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddComment"></a>

### AcousticFreeSurface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddFigure"></a>

### AcousticFreeSurface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddImage"></a>

### AcousticFreeSurface.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Copy"></a>

### AcousticFreeSurface.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CopyTo"></a>

### AcousticFreeSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CreateObjRef"></a>

### AcousticFreeSurface.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CreateParameter"></a>

### AcousticFreeSurface.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Cut"></a>

### AcousticFreeSurface.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Delete"></a>

### AcousticFreeSurface.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Duplicate"></a>

### AcousticFreeSurface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Equals"></a>

### AcousticFreeSurface.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetAPIName"></a>

### AcousticFreeSurface.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetAllProperties"></a>

### AcousticFreeSurface.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetChildren"></a>

### AcousticFreeSurface.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticFreeSurface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetDetailsView"></a>

### AcousticFreeSurface.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetEnumName"></a>

### AcousticFreeSurface.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetHashCode"></a>

### AcousticFreeSurface.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetIconFile"></a>

### AcousticFreeSurface.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetLifetimeService"></a>

### AcousticFreeSurface.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetObjectData"></a>

### AcousticFreeSurface.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetParameter"></a>

### AcousticFreeSurface.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetPath"></a>

### AcousticFreeSurface.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetPropertyName"></a>

### AcousticFreeSurface.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetPropertyValue"></a>

### AcousticFreeSurface.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetVisibleProperties"></a>

### AcousticFreeSurface.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetVisiblePropertyNames"></a>

### AcousticFreeSurface.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupAllSimilarChildren"></a>

### AcousticFreeSurface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupSimilarObjects"></a>

### AcousticFreeSurface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.InitializeLifetimeService"></a>

### AcousticFreeSurface.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.IsPropertyEditable"></a>

### AcousticFreeSurface.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFreeSurface.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.IsPropertyVisible"></a>

### AcousticFreeSurface.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFreeSurface.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Paste"></a>

### AcousticFreeSurface.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PromoteToNamedSelection"></a>

### AcousticFreeSurface.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyByAPIName"></a>

### AcousticFreeSurface.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyById"></a>

### AcousticFreeSurface.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyByName"></a>

### AcousticFreeSurface.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.RemoveFromGroup"></a>

### AcousticFreeSurface.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.RemoveParameter"></a>

### AcousticFreeSurface.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

