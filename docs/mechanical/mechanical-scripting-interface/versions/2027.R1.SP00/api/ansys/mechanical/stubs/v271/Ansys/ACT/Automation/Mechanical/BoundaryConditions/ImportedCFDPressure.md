# `ImportedCFDPressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure(internalObject: Any)

<a id="ImportedCFDPressure"></a>

### *class* ImportedCFDPressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ImportedCFDPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ImportedCFDPressure.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ImportedCFDPressure.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ImportedCFDPressure.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ImportedCFDPressure.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ImportedCFDPressure.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ImportedCFDPressure.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ImportedCFDPressure.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ImportedCFDPressure.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ImportedCFDPressure.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ImportedCFDPressure.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ImportedCFDPressure.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ImportedCFDPressure.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ImportedCFDPressure.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ImportedCFDPressure.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ImportedCFDPressure.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ImportedCFDPressure.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ImportedCFDPressure.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ImportedCFDPressure.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ImportedCFDPressure.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ImportedCFDPressure.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ImportedCFDPressure.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ImportedCFDPressure.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ImportedCFDPressure.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ImportedCFDPressure.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ImportedCFDPressure.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ImportedCFDPressure.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ImportedCFDPressure.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ImportedCFDPressure.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ImportedCFDPressure.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ImportedCFDPressure.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ImportedCFDPressure.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ImportedCFDPressure.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ImportedCFDPressure.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ImportedCFDPressure.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ImportedCFDPressure.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ImportedCFDPressure.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ImportedCFDPressure.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ImportedCFDPressure.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ImportedCFDPressure.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ImportedCFDPressure.AttachedRefs)                         | AttachedRefs property.                                        |
| [`CFDPressureFile`](#ImportedCFDPressure.CFDPressureFile)                   | Gets or sets the CFDPressureFile.                             |
| [`Children`](#ImportedCFDPressure.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ImportedCFDPressure.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ImportedCFDPressure.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedCFDPressure.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedCFDPressure.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ImportedCFDPressure.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ImportedCFDPressure.IconName)                                 | IconName property.                                            |
| [`Images`](#ImportedCFDPressure.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ImportedCFDPressure.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ImportedCFDPressure.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#ImportedCFDPressure.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#ImportedCFDPressure.Name)                                         | Name property.                                                |
| [`ObjectId`](#ImportedCFDPressure.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ImportedCFDPressure.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ImportedCFDPressure.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ImportedCFDPressure.Parent)                                     | Parent property.                                              |
| [`Properties`](#ImportedCFDPressure.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedCFDPressure.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ImportedCFDPressure.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#ImportedCFDPressure.State)                                       | State property.                                               |
| [`Suppressed`](#ImportedCFDPressure.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ImportedCFDPressure.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ImportedCFDPressure.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCFDPressure.AttachedRefs"></a>

### *property* ImportedCFDPressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CFDPressureFile"></a>

### *property* ImportedCFDPressure.CFDPressureFile *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CFDPressureFile.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Children"></a>

### *property* ImportedCFDPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ClsId"></a>

### *property* ImportedCFDPressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Comments"></a>

### *property* ImportedCFDPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.DataModelObjectCategory"></a>

### *property* ImportedCFDPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Figures"></a>

### *property* ImportedCFDPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupingFolder"></a>

### *property* ImportedCFDPressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.IconName"></a>

### *property* ImportedCFDPressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Images"></a>

### *property* ImportedCFDPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ImportableObjectSourceId"></a>

### *property* ImportedCFDPressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.InternalObject"></a>

### *property* ImportedCFDPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Location"></a>

### *property* ImportedCFDPressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Name"></a>

### *property* ImportedCFDPressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ObjectId"></a>

### *property* ImportedCFDPressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ObjectState"></a>

### *property* ImportedCFDPressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ObjectTags"></a>

### *property* ImportedCFDPressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Parent"></a>

### *property* ImportedCFDPressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Properties"></a>

### *property* ImportedCFDPressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ReadOnly"></a>

### *property* ImportedCFDPressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.SharedRefBody"></a>

### *property* ImportedCFDPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.State"></a>

### *property* ImportedCFDPressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Suppressed"></a>

### *property* ImportedCFDPressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.TransferableObjectId"></a>

### *property* ImportedCFDPressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.VisibleProperties"></a>

### *property* ImportedCFDPressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCFDPressure.Activate"></a>

### ImportedCFDPressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddComment"></a>

### ImportedCFDPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddFigure"></a>

### ImportedCFDPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddImage"></a>

### ImportedCFDPressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Copy"></a>

### ImportedCFDPressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CopyTo"></a>

### ImportedCFDPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CreateObjRef"></a>

### ImportedCFDPressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CreateParameter"></a>

### ImportedCFDPressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Cut"></a>

### ImportedCFDPressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Delete"></a>

### ImportedCFDPressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Duplicate"></a>

### ImportedCFDPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Equals"></a>

### ImportedCFDPressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetAPIName"></a>

### ImportedCFDPressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetAllProperties"></a>

### ImportedCFDPressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetChildren"></a>

### ImportedCFDPressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ImportedCFDPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetDetailsView"></a>

### ImportedCFDPressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetEnumName"></a>

### ImportedCFDPressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetHashCode"></a>

### ImportedCFDPressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetIconFile"></a>

### ImportedCFDPressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetLifetimeService"></a>

### ImportedCFDPressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetObjectData"></a>

### ImportedCFDPressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetParameter"></a>

### ImportedCFDPressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetPath"></a>

### ImportedCFDPressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetPropertyName"></a>

### ImportedCFDPressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetPropertyValue"></a>

### ImportedCFDPressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetVisibleProperties"></a>

### ImportedCFDPressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetVisiblePropertyNames"></a>

### ImportedCFDPressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupAllSimilarChildren"></a>

### ImportedCFDPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupSimilarObjects"></a>

### ImportedCFDPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.InitializeLifetimeService"></a>

### ImportedCFDPressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.IsPropertyEditable"></a>

### ImportedCFDPressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCFDPressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.IsPropertyVisible"></a>

### ImportedCFDPressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ImportedCFDPressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Paste"></a>

### ImportedCFDPressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PromoteToNamedSelection"></a>

### ImportedCFDPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyByAPIName"></a>

### ImportedCFDPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyById"></a>

### ImportedCFDPressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyByName"></a>

### ImportedCFDPressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.RemoveFromGroup"></a>

### ImportedCFDPressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.RemoveParameter"></a>

### ImportedCFDPressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

