# `MagneticFluxParallel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel(internalObject: Any)

<a id="MagneticFluxParallel"></a>

### *class* MagneticFluxParallel(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MagneticFluxParallel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MagneticFluxParallel.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MagneticFluxParallel.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MagneticFluxParallel.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MagneticFluxParallel.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MagneticFluxParallel.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MagneticFluxParallel.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MagneticFluxParallel.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MagneticFluxParallel.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MagneticFluxParallel.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MagneticFluxParallel.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MagneticFluxParallel.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MagneticFluxParallel.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MagneticFluxParallel.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MagneticFluxParallel.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MagneticFluxParallel.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MagneticFluxParallel.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MagneticFluxParallel.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MagneticFluxParallel.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MagneticFluxParallel.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MagneticFluxParallel.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MagneticFluxParallel.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MagneticFluxParallel.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MagneticFluxParallel.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MagneticFluxParallel.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MagneticFluxParallel.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MagneticFluxParallel.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MagneticFluxParallel.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MagneticFluxParallel.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MagneticFluxParallel.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MagneticFluxParallel.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MagneticFluxParallel.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MagneticFluxParallel.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MagneticFluxParallel.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MagneticFluxParallel.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MagneticFluxParallel.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MagneticFluxParallel.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MagneticFluxParallel.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MagneticFluxParallel.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MagneticFluxParallel.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MagneticFluxParallel.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#MagneticFluxParallel.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#MagneticFluxParallel.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#MagneticFluxParallel.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MagneticFluxParallel.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#MagneticFluxParallel.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MagneticFluxParallel.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#MagneticFluxParallel.IconName)                                 | IconName property.                                            |
| [`Images`](#MagneticFluxParallel.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#MagneticFluxParallel.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#MagneticFluxParallel.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#MagneticFluxParallel.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#MagneticFluxParallel.Name)                                         | Name property.                                                |
| [`ObjectId`](#MagneticFluxParallel.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#MagneticFluxParallel.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#MagneticFluxParallel.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#MagneticFluxParallel.Parent)                                     | Parent property.                                              |
| [`Properties`](#MagneticFluxParallel.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MagneticFluxParallel.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#MagneticFluxParallel.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#MagneticFluxParallel.State)                                       | State property.                                               |
| [`Suppressed`](#MagneticFluxParallel.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#MagneticFluxParallel.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#MagneticFluxParallel.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MagneticFluxParallel.AttachedRefs"></a>

### *property* MagneticFluxParallel.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Children"></a>

### *property* MagneticFluxParallel.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ClsId"></a>

### *property* MagneticFluxParallel.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Comments"></a>

### *property* MagneticFluxParallel.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.DataModelObjectCategory"></a>

### *property* MagneticFluxParallel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Figures"></a>

### *property* MagneticFluxParallel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupingFolder"></a>

### *property* MagneticFluxParallel.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.IconName"></a>

### *property* MagneticFluxParallel.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Images"></a>

### *property* MagneticFluxParallel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ImportableObjectSourceId"></a>

### *property* MagneticFluxParallel.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.InternalObject"></a>

### *property* MagneticFluxParallel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Location"></a>

### *property* MagneticFluxParallel.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Name"></a>

### *property* MagneticFluxParallel.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ObjectId"></a>

### *property* MagneticFluxParallel.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ObjectState"></a>

### *property* MagneticFluxParallel.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ObjectTags"></a>

### *property* MagneticFluxParallel.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Parent"></a>

### *property* MagneticFluxParallel.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Properties"></a>

### *property* MagneticFluxParallel.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ReadOnly"></a>

### *property* MagneticFluxParallel.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.SharedRefBody"></a>

### *property* MagneticFluxParallel.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.State"></a>

### *property* MagneticFluxParallel.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Suppressed"></a>

### *property* MagneticFluxParallel.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.TransferableObjectId"></a>

### *property* MagneticFluxParallel.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.VisibleProperties"></a>

### *property* MagneticFluxParallel.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticFluxParallel.Activate"></a>

### MagneticFluxParallel.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddComment"></a>

### MagneticFluxParallel.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddFigure"></a>

### MagneticFluxParallel.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddImage"></a>

### MagneticFluxParallel.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Copy"></a>

### MagneticFluxParallel.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CopyTo"></a>

### MagneticFluxParallel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CreateObjRef"></a>

### MagneticFluxParallel.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CreateParameter"></a>

### MagneticFluxParallel.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Cut"></a>

### MagneticFluxParallel.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Delete"></a>

### MagneticFluxParallel.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Duplicate"></a>

### MagneticFluxParallel.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Equals"></a>

### MagneticFluxParallel.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetAPIName"></a>

### MagneticFluxParallel.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetAllProperties"></a>

### MagneticFluxParallel.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetChildren"></a>

### MagneticFluxParallel.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MagneticFluxParallel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetDetailsView"></a>

### MagneticFluxParallel.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetEnumName"></a>

### MagneticFluxParallel.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetHashCode"></a>

### MagneticFluxParallel.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetIconFile"></a>

### MagneticFluxParallel.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetLifetimeService"></a>

### MagneticFluxParallel.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetObjectData"></a>

### MagneticFluxParallel.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetParameter"></a>

### MagneticFluxParallel.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetPath"></a>

### MagneticFluxParallel.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetPropertyName"></a>

### MagneticFluxParallel.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetPropertyValue"></a>

### MagneticFluxParallel.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetVisibleProperties"></a>

### MagneticFluxParallel.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetVisiblePropertyNames"></a>

### MagneticFluxParallel.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupAllSimilarChildren"></a>

### MagneticFluxParallel.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupSimilarObjects"></a>

### MagneticFluxParallel.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.InitializeLifetimeService"></a>

### MagneticFluxParallel.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.IsPropertyEditable"></a>

### MagneticFluxParallel.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MagneticFluxParallel.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.IsPropertyVisible"></a>

### MagneticFluxParallel.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MagneticFluxParallel.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Paste"></a>

### MagneticFluxParallel.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PromoteToNamedSelection"></a>

### MagneticFluxParallel.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyByAPIName"></a>

### MagneticFluxParallel.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyById"></a>

### MagneticFluxParallel.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyByName"></a>

### MagneticFluxParallel.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.RemoveFromGroup"></a>

### MagneticFluxParallel.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.RemoveParameter"></a>

### MagneticFluxParallel.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

