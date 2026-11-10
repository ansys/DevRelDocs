# `AcousticPort`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort(internalObject: Any)

<a id="AcousticPort"></a>

### *class* AcousticPort(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticPort.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticPort.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticPort.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticPort.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticPort.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticPort.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticPort.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticPort.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticPort.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticPort.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticPort.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticPort.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticPort.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticPort.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticPort.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticPort.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticPort.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticPort.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticPort.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticPort.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticPort.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticPort.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticPort.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticPort.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticPort.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticPort.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticPort.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticPort.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticPort.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticPort.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticPort.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticPort.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticPort.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticPort.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticPort.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticPort.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticPort.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticPort.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticPort.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticPort.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticPort.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#AcousticPort.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#AcousticPort.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#AcousticPort.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticPort.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticPort.Figures)                                         | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticPort.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#AcousticPort.IconName)                                       | IconName property.                                            |
| [`Images`](#AcousticPort.Images)                                           | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticPort.ImportableObjectSourceId)       | ImportableObjectSourceId property.                            |
| [`InsideSurfaceBodiesLocation`](#AcousticPort.InsideSurfaceBodiesLocation) | Gets or sets the InsideSurfaceBodiesLocation.                 |
| [`InternalObject`](#AcousticPort.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Name`](#AcousticPort.Name)                                               | Name property.                                                |
| [`ObjectId`](#AcousticPort.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#AcousticPort.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#AcousticPort.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#AcousticPort.Parent)                                           | Parent property.                                              |
| [`PortBehavior`](#AcousticPort.PortBehavior)                               | Gets or sets the PortBehavior.                                |
| [`PortNumber`](#AcousticPort.PortNumber)                                   | Gets the PortNumber.                                          |
| [`PortPosition`](#AcousticPort.PortPosition)                               | Gets or sets the PortPosition.                                |
| [`PortSurfaceLocation`](#AcousticPort.PortSurfaceLocation)                 | Gets or sets the PortSurfaceLocation.                         |
| [`Properties`](#AcousticPort.Properties)                                   | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticPort.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticPort.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticPort.State)                                             | State property.                                               |
| [`Suppressed`](#AcousticPort.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticPort.TransferableObjectId)               | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticPort.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPort.AttachedRefs"></a>

### *property* AcousticPort.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Children"></a>

### *property* AcousticPort.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ClsId"></a>

### *property* AcousticPort.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Comments"></a>

### *property* AcousticPort.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.DataModelObjectCategory"></a>

### *property* AcousticPort.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Figures"></a>

### *property* AcousticPort.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GroupingFolder"></a>

### *property* AcousticPort.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.IconName"></a>

### *property* AcousticPort.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Images"></a>

### *property* AcousticPort.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ImportableObjectSourceId"></a>

### *property* AcousticPort.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.InsideSurfaceBodiesLocation"></a>

### *property* AcousticPort.InsideSurfaceBodiesLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InsideSurfaceBodiesLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.InternalObject"></a>

### *property* AcousticPort.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Name"></a>

### *property* AcousticPort.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ObjectId"></a>

### *property* AcousticPort.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ObjectState"></a>

### *property* AcousticPort.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ObjectTags"></a>

### *property* AcousticPort.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Parent"></a>

### *property* AcousticPort.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortBehavior"></a>

### *property* AcousticPort.PortBehavior *: [Ansys.Mechanical.DataModel.Enums.PortBehavior](../../../../Mechanical/DataModel/Enums/PortBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PortBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PortBehavior.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortNumber"></a>

### *property* AcousticPort.PortNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PortNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortPosition"></a>

### *property* AcousticPort.PortPosition *: [Ansys.Mechanical.DataModel.Enums.PortPosition](../../../../Mechanical/DataModel/Enums/PortPosition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PortPosition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PortPosition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortSurfaceLocation"></a>

### *property* AcousticPort.PortSurfaceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PortSurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Properties"></a>

### *property* AcousticPort.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ReadOnly"></a>

### *property* AcousticPort.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.SharedRefBody"></a>

### *property* AcousticPort.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.State"></a>

### *property* AcousticPort.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Suppressed"></a>

### *property* AcousticPort.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.TransferableObjectId"></a>

### *property* AcousticPort.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.VisibleProperties"></a>

### *property* AcousticPort.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPort.Activate"></a>

### AcousticPort.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.AddComment"></a>

### AcousticPort.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.AddFigure"></a>

### AcousticPort.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.AddImage"></a>

### AcousticPort.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Copy"></a>

### AcousticPort.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.CopyTo"></a>

### AcousticPort.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.CreateObjRef"></a>

### AcousticPort.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.CreateParameter"></a>

### AcousticPort.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Cut"></a>

### AcousticPort.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Delete"></a>

### AcousticPort.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Duplicate"></a>

### AcousticPort.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Equals"></a>

### AcousticPort.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetAPIName"></a>

### AcousticPort.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetAllProperties"></a>

### AcousticPort.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetChildren"></a>

### AcousticPort.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticPort.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetDetailsView"></a>

### AcousticPort.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetEnumName"></a>

### AcousticPort.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetHashCode"></a>

### AcousticPort.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetIconFile"></a>

### AcousticPort.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetLifetimeService"></a>

### AcousticPort.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetObjectData"></a>

### AcousticPort.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetParameter"></a>

### AcousticPort.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetPath"></a>

### AcousticPort.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetPropertyName"></a>

### AcousticPort.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetPropertyValue"></a>

### AcousticPort.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetVisibleProperties"></a>

### AcousticPort.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetVisiblePropertyNames"></a>

### AcousticPort.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GroupAllSimilarChildren"></a>

### AcousticPort.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GroupSimilarObjects"></a>

### AcousticPort.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.InitializeLifetimeService"></a>

### AcousticPort.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.IsPropertyEditable"></a>

### AcousticPort.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPort.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.IsPropertyVisible"></a>

### AcousticPort.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticPort.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Paste"></a>

### AcousticPort.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PromoteToNamedSelection"></a>

### AcousticPort.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PropertyByAPIName"></a>

### AcousticPort.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PropertyById"></a>

### AcousticPort.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PropertyByName"></a>

### AcousticPort.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.RemoveFromGroup"></a>

### AcousticPort.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.RemoveParameter"></a>

### AcousticPort.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

